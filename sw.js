const CACHE_NAME = "moj-sank-v4";
const APP_FILES = ["./", "./index.html", "./style.css", "./app.js", "./manifest.json"];
self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(APP_FILES)));
  self.skipWaiting();
});
self.addEventListener("activate", event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)));
    await self.clients.claim();
  })());
});
self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;
  event.respondWith((async () => {
    const cached = await caches.match(event.request);
    if (cached) return cached;
    try {
      const response = await fetch(event.request);
      if (new URL(event.request.url).origin === self.location.origin) {
        const cache = await caches.open(CACHE_NAME);
        cache.put(event.request, response.clone());
      }
      return response;
    } catch (e) {
      return new Response("Ova stranica nije sačuvana za offline rad.", {
        status: 503, headers: {"Content-Type":"text/plain; charset=utf-8"}
      });
    }
  })());
});
