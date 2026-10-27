"""Оборачивает русские тексты в JS в вызовы tx("...") для перевода.

Разбирает код как JavaScript: строки, шаблоны `...${...}`, комментарии и регулярные
выражения. Текст внутри HTML-тегов (атрибуты) и регулярки не трогает. Участки между
// i18n-skip-start и // i18n-skip-end копируются как есть (например, запрос к Gemini).

Запуск: python3 tools/i18n_wrap.py файл.js [файл2.js ...] — файлы правятся на месте,
список ключей печатается в keys.json рядом со скриптом.
"""
import json
import re
import sys
from pathlib import Path

CYR = re.compile(r"[А-Яа-яЁёІіЇїЄєҐґ]")
REGEX_PREV = set("(,=:[!&|?{};+-*%<>~^")
KEYS = []


def add_key(k):
    if k not in KEYS:
        KEYS.append(k)


def js_str(s):
    """Сырой текст из шаблона/строки → литерал в двойных кавычках."""
    return '"' + s.replace('"', '\\"') + '"'


def wrap_text_runs(text, in_tag):
    """Внутри статической части шаблона оборачивает русский текст вне тегов.
    Возвращает (новый текст, состояние in_tag в конце)."""
    out, buf = [], []

    def flush():
        seg = "".join(buf)
        buf.clear()
        if CYR.search(seg):
            lead = seg[: len(seg) - len(seg.lstrip())]
            trail = seg[len(seg.rstrip()):]
            key = seg.strip()
            add_key(key)
            out.append(f"{lead}${{tx({js_str(key)})}}{trail}")
        else:
            out.append(seg)

    i = 0
    while i < len(text):
        c = text[i]
        if not in_tag and c == "<" and i + 1 < len(text) and (text[i + 1].isalpha() or text[i + 1] == "/"):
            flush()
            in_tag = True
            out.append(c)
        elif in_tag:
            out.append(c)
            if c == ">":
                in_tag = False
        else:
            buf.append(c)
        i += 1
    flush()
    return "".join(out), in_tag


class Wrapper:
    def __init__(self, src):
        self.s = src
        self.i = 0

    def prev_sig(self, out):
        j = len(out) - 1
        while j >= 0 and out[j] in " \t\r\n":
            j -= 1
        if j < 0:
            return "("
        tail = out[max(0, j - 5): j + 1]
        if tail.endswith("return") or tail.endswith("typeof"):
            return "("
        return out[j]

    def run(self, stop_at_brace=False):
        s, out, depth = self.s, [], 0
        while self.i < len(s):
            c = s[self.i]
            two = s[self.i: self.i + 2]
            # пропускаемые участки
            if s.startswith("// i18n-skip-start", self.i):
                end = s.index("// i18n-skip-end", self.i)
                out.append(s[self.i:end])
                self.i = end
                continue
            if two == "//":
                end = s.find("\n", self.i)
                end = len(s) if end < 0 else end
                out.append(s[self.i:end])
                self.i = end
                continue
            if two == "/*":
                end = s.index("*/", self.i) + 2
                out.append(s[self.i:end])
                self.i = end
                continue
            if c in "\"'":
                out.append(self.string(c))
                continue
            if c == "`":
                out.append(self.template())
                continue
            if c == "/" and self.prev_sig("".join(out[-20:])) in REGEX_PREV:
                out.append(self.regex())
                continue
            if stop_at_brace:
                if c == "{":
                    depth += 1
                elif c == "}":
                    if depth == 0:
                        return "".join(out)
                    depth -= 1
            out.append(c)
            self.i += 1
        return "".join(out)

    def string(self, q):
        s, start = self.s, self.i
        self.i += 1
        while s[self.i] != q:
            self.i += 2 if s[self.i] == "\\" else 1
        self.i += 1
        raw = s[start + 1: self.i - 1]
        if not CYR.search(raw):
            return s[start: self.i]
        if "<" in raw:
            # строка с разметкой → шаблон, где переводится только текст
            text, _ = wrap_text_runs(raw, False)
            return "`" + text + "`"
        if len(raw.strip()) <= 1:
            return s[start: self.i]  # одиночные буквы — служебные (например, замена «ё» на «е»)
        add_key(raw)
        return f"tx({q}{raw}{q})"

    def template(self):
        s = self.s
        self.i += 1
        out, chunk, in_tag = ["`"], [], False
        while True:
            c = s[self.i]
            if c == "\\":
                chunk.append(s[self.i: self.i + 2])
                self.i += 2
                continue
            if c == "`":
                text, in_tag = wrap_text_runs("".join(chunk), in_tag)
                out.append(text + "`")
                self.i += 1
                return "".join(out)
            if s.startswith("${", self.i):
                text, in_tag = wrap_text_runs("".join(chunk), in_tag)
                chunk = []
                out.append(text + "${")
                self.i += 2
                out.append(self.run(stop_at_brace=True))
                out.append("}")
                self.i += 1
                continue
            chunk.append(c)
            self.i += 1

    def regex(self):
        s, start = self.s, self.i
        self.i += 1
        in_class = False
        while True:
            c = s[self.i]
            if c == "\\":
                self.i += 2
                continue
            if c == "[":
                in_class = True
            elif c == "]":
                in_class = False
            elif c == "/" and not in_class:
                break
            self.i += 1
        self.i += 1
        while self.i < len(s) and s[self.i].isalpha():
            self.i += 1
        return s[start: self.i]


def wrap_js(src):
    return Wrapper(src).run()


if __name__ == "__main__":
    for name in sys.argv[1:]:
        p = Path(name)
        text = p.read_text(encoding="utf-8")
        if p.suffix == ".html":
            head, rest = text.split("<script>\n// ---------- Хранилище", 1)
            body, tail = rest.rsplit("</script>", 1)
            text = head + "<script>\n// ---------- Хранилище" + wrap_js(body) + "</script>" + tail
        else:
            text = wrap_js(text)
        p.write_text(text, encoding="utf-8")
    Path(__file__).with_name("keys.json").write_text(json.dumps(KEYS, ensure_ascii=False, indent=0), encoding="utf-8")
    print(len(KEYS), "ключей")
