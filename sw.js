const PREFIX='n1-balance-'+self.registration.scope;
const CACHE=PREFIX+'v8-fullscreen-wallpaper';
const ASSETS=['./','./index.html','./aircraft-wallpaper.webp','./style.css','./solver.js','./usage.js','./app.js','./manifest.webmanifest','./767-vibe-icon-r2-180.png','./767-vibe-icon-r2-192.png','./767-vibe-icon-r2-512.png'];
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener('activate',event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith(PREFIX)&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',event=>{const url=new URL(event.request.url);if(event.request.method!=='GET'||url.origin!==self.location.origin||!url.href.startsWith(self.registration.scope))return;event.respondWith(caches.open(CACHE).then(async cache=>{try{const response=await fetch(event.request);if(response.ok){await cache.put(event.request,response.clone());return response;}const cached=await cache.match(event.request);return cached||response;}catch(e){const cached=await cache.match(event.request);if(cached)return cached;if(event.request.mode==='navigate')return cache.match('./index.html');throw e;}}));});

