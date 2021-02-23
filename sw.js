self.addEventListener("install", e => {
  console.log("Service Worker INSTALLED");
  const resources = [
    "./",
    "./scr/css/master.css",
    "./static/img/logo192.css",
    "./static/img/logo512.css"
  ];
  e.waitUntil(
    caches.open("static").then(cache => {
      return cache.addAll(resources);
    })
  );
})

self.addEventListener("fetch", e => {
  console.log("Service Worker FETCH", e.request.url);
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
})