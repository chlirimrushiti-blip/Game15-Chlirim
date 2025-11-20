// Service worker super semplice, giusto per rendere l'app installabile

self.addEventListener('install', (event) => {
  // puoi mettere cache qui se vuoi, per ora facciamo solo skipWaiting
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  // niente di speciale per ora
});

self.addEventListener('fetch', (event) => {
  // pass-through, non facciamo cache complessa
  return;
});
