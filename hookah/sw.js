// Кэшируем оболочку приложения, чтобы таймеры и гайды работали без интернета
const CACHE = "hookah-v17";
const FILES = ["./", "index.html", "manifest.json", "icon.svg", "i18n.js", "mixes.js", "catalog.js", "brands.js",
  "fonts/fonts.css", "fonts/el-messiri-cyrillic.woff2", "fonts/el-messiri-latin.woff2", "fonts/rubik-cyrillic.woff2", "fonts/rubik-latin.woff2"];

// В кэш попадают только успешные ответы своего сайта: не 401 «закрыто», не 404 и не ошибки сервера
function isCacheable(r) {
  return !!r && r.ok && r.status === 200 && r.type === "basic";
}

self.addEventListener("install", (e) => {
  // Каждый файл кладём отдельно: если один не скачался, остальные всё равно попадут в кэш
  e.waitUntil(caches.open(CACHE)
    .then((c) => Promise.allSettled(FILES.map((f) => fetch(f, { cache: "reload" }).then((r) => (isCacheable(r) ? c.put(f, r) : null)))))
    .catch(() => {}));
  self.skipWaiting();
});

self.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys()
    .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
    .catch(() => {})
    .then(() => self.clients.claim()));
});

// Сначала сеть (свежая версия), при отсутствии сети — кэш. Запросы к Gemini и другим сайтам не трогаем.
self.addEventListener("fetch", (e) => {
  const req = e.request;
  const url = new URL(req.url);
  if (req.method !== "GET" || url.origin !== location.origin) return;
  e.respondWith((async () => {
    try {
      const r = await fetch(req);
      if (isCacheable(r)) {
        const copy = r.clone();
        // Кэш обновляется после ответа; waitUntil не даёт браузеру усыпить worker посреди записи
        e.waitUntil(caches.open(CACHE).then((c) => c.put(req, copy)).catch(() => {}));
      }
      return r;
    } catch {
      const match = (key) => caches.match(key).catch(() => null);
      const cached = (await match(req)) || (req.mode === "navigate" ? (await match("index.html")) || (await match("./")) : null);
      if (cached) return cached;
      const page = req.mode === "navigate";
      return new Response(
        page
          ? "<!doctype html><meta charset=utf-8><meta name=viewport content='width=device-width'><body style='font:16px system-ui;background:#16120f;color:#f3ebe3;padding:24px'><h2>Нет интернета</h2><p>Офлайн-копии приложения на этом телефоне ещё нет. Откройте его один раз с интернетом — потом таймеры и гайды будут работать и без сети.</p>"
          : "Нет подключения к интернету, а офлайн-копии этого файла нет.",
        { status: 503, headers: { "Content-Type": page ? "text/html; charset=utf-8" : "text/plain; charset=utf-8" } });
    }
  })());
});

self.addEventListener("notificationclick", (e) => {
  e.notification.close();
  e.waitUntil(self.clients.matchAll({ type: "window" }).then((cs) => (cs[0] ? cs[0].focus() : self.clients.openWindow("./"))));
});
