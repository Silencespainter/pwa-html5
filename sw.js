self.addEventListener("install", e => {
  console.log("Service Worker INSTALLED");
  const resources = [
    "./",
    "./src/css/master.css",
    "./static/img/logo192.png",
    "./static/img/logo512.png"
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