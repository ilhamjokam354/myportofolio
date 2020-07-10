importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

if (workbox){
  console.log(`Workbox berhasil dimuat`);
  workbox.precaching.precacheAndRoute([
      { url: './', revision: '1' },
      { url: './manifest.json', revision: '1' },
      { url: './index.html', revision: '1' },
      { url: './portfolio-details-corona.html', revision: '1' },
      { url: './portfolio-details-phising.html', revision: '1' },
      { url: './portfolio-details-restaurant.html', revision: '1' },
      { url: './portfolio-details-tokobuku.html', revision: '1' }
      ],
      {
        // Ignore all URL parameters.
        ignoreURLParametersMatching: [/.*/]
      });

  workbox.routing.registerRoute(
      /.*(?:png|gif|jpg|jpeg|svg|ico)$/,
      workbox.strategies.cacheFirst({
          cacheName: 'images-cache',
          plugins: [
          new workbox.cacheableResponse.Plugin({
              statuses: [0, 200]
          }),
          new workbox.expiration.Plugin({
              maxEntries: 100,
              maxAgeSeconds: 30 * 24 * 60 * 60,
          }),
          ]
      })
      );




    workbox.routing.registerRoute(
    /\.(?:js|css)$/,
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: 'static-resources',
    })
    );



}else{
  console.log(`Workbox gagal dimuat`);
}
self.addEventListener('push', function(event) {
    let body;
    if (event.data) {
      body = event.data.text();
    } else {
      body = 'Push message no payload';
    }
    let options = {
      body: body,
      icon: './assets/img/man1.png',
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: 1
      }
    };
    event.waitUntil(
      self.registration.showNotification('Notifikasi Dari My Portofolio', options)
    );
  });
  