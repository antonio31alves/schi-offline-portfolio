const CACHE_NAME = 'minimal-portfolio-cache-v5';
const urlsToCache = [
  '/schi-offline-portfolio/',
  '/schi-offline-portfolio/index.html',
  '/schi-offline-portfolio/styles.css',
  '/schi-offline-portfolio/scripts.js',
  '/schi-offline-portfolio/manifest.json',
  '/schi-offline-portfolio/images/logo.png',
  '/schi-offline-portfolio/images/icon-192.png',
  '/schi-offline-portfolio/images/icon-512-1.png',
  '/schi-offline-portfolio/images/window1.webp',
  '/schi-offline-portfolio/images/door1.webp',
  '/schi-offline-portfolio/images/project1.webp',
  '/schi-offline-portfolio/images/brochure-1.webp',
  '/schi-offline-portfolio/images/brochure-2.webp',
  '/schi-offline-portfolio/images/brochure-3.webp',
  '/schi-offline-portfolio/brochures/brochure1.pdf',
  '/schi-offline-portfolio/brochures/brochure2.pdf',
  '/schi-offline-portfolio/brochures/brochure3.pdf'
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
