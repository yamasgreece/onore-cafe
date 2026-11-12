/* Onore Cafe — minimal offline cache */
const CACHE = 'onore-v1';
const ASSETS = ['./','index.html','menu.js','config.js','manifest.webmanifest',
  'icons/icon-192.png','icons/icon-512.png','icons/apple-touch-icon.png','icons/favicon-64.png'];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(()=>self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const u = new URL(e.request.url);
  // Always fetch config.js fresh so number/fee updates apply quickly
  if (u.pathname.endsWith('config.js')) { e.respondWith(fetch(e.request).catch(()=>caches.match(e.request))); return; }
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
