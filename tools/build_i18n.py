"""Собирает hookah/i18n.js из списка ключей (tools/all_keys.json) и переводов (tools/tr.tsv).

Ключ — исходная русская фраза. Пробелы по краям ключа переносятся в перевод,
последовательности \\n превращаются в настоящие переносы строк.
"""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent
keys = json.loads((ROOT / "all_keys.json").read_text(encoding="utf-8"))
rows = {}
for line in (ROOT / "tr.tsv").read_text(encoding="utf-8").splitlines():
    if not line.strip():
        continue
    idx, uk, en = line.split("\t")
    rows[int(idx)] = (uk, en)

missing = [i for i in range(len(keys)) if i not in rows]
assert not missing, f"нет перевода для: {missing}"

unesc = lambda s: s.replace("\\n", "\n")
dicts = {"uk": {}, "en": {}}
for i, key in enumerate(keys):
    k = unesc(key)
    lead, trail = k[: len(k) - len(k.lstrip(" "))], k[len(k.rstrip(" ")):]
    for lang, val in zip(("uk", "en"), rows[i]):
        v = unesc(val).strip(" ")
        dicts[lang][k] = lead + v + trail

core = r"""// Переводы интерфейса: ключ — исходная русская фраза, для ru перевод не нужен.
// Файл собирается скриптом tools/build_i18n.py — правьте переводы в tools/tr.tsv.
(function () {
  // Язык: выбранный в настройках, иначе язык телефона (uk/ru), для остальных — английский
  let saved = null;
  try { saved = JSON.parse(localStorage.getItem("hk_lang")); } catch {}
  const sys = (navigator.language || "").toLowerCase();
  const auto = sys.startsWith("uk") ? "uk" : sys.startsWith("ru") || sys.startsWith("be") ? "ru" : "en";
  const LANG = ["ru", "uk", "en"].includes(saved) ? saved : auto;
  const DICT = window.I18N_DICT[LANG] || {};
  window.LANG = LANG;
  window.LANG_SAVED = saved;
  window.LOCALE = { ru: "ru-RU", uk: "uk-UA", en: "en-GB" }[LANG];
  window.tx = (s) => (LANG === "ru" ? s : DICT[s] ?? s);
  document.documentElement.lang = LANG;

  // Статичная разметка переводится один раз при запуске: текст узлов и подсказки полей
  window.applyStaticI18n = (root) => {
    if (LANG === "ru") return;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    for (let n = walker.nextNode(); n; n = walker.nextNode()) {
      const k = n.nodeValue.trim();
      if (k && DICT[k]) n.nodeValue = n.nodeValue.replace(k, DICT[k]);
    }
    root.querySelectorAll("[placeholder],[title],[aria-label]").forEach((el) => {
      ["placeholder", "title", "aria-label"].forEach((a) => {
        const v = el.getAttribute(a);
        if (v && DICT[v.trim()]) el.setAttribute(a, DICT[v.trim()]);
      });
    });
  };
})();
"""

out = "window.I18N_DICT = " + json.dumps(dicts, ensure_ascii=False, indent=1) + ";\n" + core
(ROOT.parent / "hookah" / "i18n.js").write_text(out, encoding="utf-8")
print(f"{len(keys)} фраз × 2 языка → hookah/i18n.js")
