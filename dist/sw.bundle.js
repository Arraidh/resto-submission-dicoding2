if(!self.define){let e,i={};const n=(n,d)=>(n=new URL(n+".js",d).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(d,f)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let s={};const o=e=>n(e,r),c={module:{uri:r},exports:s,require:o};i[r]=Promise.all(d.map((e=>c[e]||o(e)))).then((e=>(f(...e),s)))}}define(["./workbox-d249b2c8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"192.bundle.js",revision:"417f8058bf773d5c087613724b456c03"},{url:"2.bundle.js",revision:"a27efe0e11a871a06af6483bd0c52dc4"},{url:"app.webmanifest",revision:"b0901240da95e55b06b95a75030e8a32"},{url:"app~7bd12dde.bundle.js",revision:"862fcb965b031284d12780240910a3f9"},{url:"app~7bd12dde.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~ca0940c6.bundle.js",revision:"66fbf3a0af3eb543098de353597ea36b"},{url:"app~ca0940c6.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~e4317507.bundle.js",revision:"a7a7a20953aa8cb968cba0b10124e6db"},{url:"app~e4317507.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~f6563343.bundle.js",revision:"66fef6fd6a69599f1b67b819c36c6e6d"},{url:"bd6b63650298f334a08b.jpg",revision:null},{url:"icons/icon-128x128.png",revision:"34d9d8d646af9f294d968811da10e546"},{url:"icons/icon-144x144.png",revision:"2dd174daa627ee198c37c9dfe8cdc34d"},{url:"icons/icon-152x152.png",revision:"42ee3d984a8d535d697ccbb4428e8647"},{url:"icons/icon-192x192.png",revision:"923e1610b9d68d2445eb28d6e0f54aaa"},{url:"icons/icon-384x384.png",revision:"7f775b04df567c8d90c9bad2c89e2d81"},{url:"icons/icon-512x512.png",revision:"f6705cd9d5d52d8483a2bf9b47cb5f60"},{url:"icons/icon-72x72.png",revision:"1d463ddf39f394788393e31e1f0e9dbc"},{url:"icons/icon-96x96.png",revision:"7619371082a792ebb06768c13bf094bf"},{url:"images/Logo.png",revision:"65afa2c116a79897c08fe07e811f926e"},{url:"images/Rating.png",revision:"588eb0893c22fd87409f07f5eef9f71d"},{url:"images/heros/Logo.svg",revision:"f2811a4bf052060aa09655f21046e88e"},{url:"images/heros/hero-image_2.jpg",revision:"49f78cae81de4f48caf1c2fe0271c828"},{url:"index.html",revision:"d970cef7a6ef2649206d4033bed341ef"}],{})}));
//# sourceMappingURL=sw.bundle.js.map
