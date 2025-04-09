const CACHE_NAME = 'minimal-portfolio-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/styles.css',
  '/script.js',
  '/manifest.json',
  '/images/logo.png',
  '/images/icon-192.png',
  '/images/icon-512.png',
  '/images/window1.jpg',
  '/images/door1.jpg',
  '/images/project1.jpg',
  '/images/brochure1-cover.jpg',
  '/images/brochure2-cover.jpg',
  '/images/brochure3-cover.jpg',
  '/brochures/brochure1.pdf',
  '/brochures/brochure2.pdf',
  '/brochures/brochure3.pdf'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Caching files');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});