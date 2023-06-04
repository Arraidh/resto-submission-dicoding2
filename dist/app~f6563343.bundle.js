(()=>{"use strict";var r,A={78:(r,A,n)=>{n.d(A,{K7:()=>t,jM:()=>o,nC:()=>i,qB:()=>a});var e=n(597),i=(n(90),n(770),function(r){return'\n   <div>\n      <img class="resto__poster" src="'.concat(e.Z.BASE_URL,"images/medium/").concat(r.pictureId,'" alt="').concat(r.name,'" />\n    <h1 class="resto__title">').concat(r.name,'</h1>\n    <div class="resto__info2">\n      <div class="resto__address">\n        <div>\n          <h4>Alamat</h4>\n          <p>').concat(r.address,"</p>\n        </div>\n        <div>\n          <h4>Kota</h4>\n          <p>").concat(r.city,'</p>\n        </div>\n      </div>\n      <p class="resto__description">').concat(r.description,' minutes</p>\n    </div>\n    <div class="resto__info">\n\n      <div class="food__menu">\n        <h3>Makanan</h3>\n      </div>\n\n      <div class="drink__menu">\n        <h3>Minuman</h3>\n      </div>\n      \n    </div>\n    <div class="customer__review">\n      <h2>Ulasan</h2>\n      <form id="reviewForm" method="POST" class="formbold-chatbox-form">\n        <input type="hidden" name="id" value="').concat(r.id,'">\n        \n        <div class="formbold-mb-5">\n          <label for="name" class="formbold-form-label">Your Name</label>\n          <input\n            type="text"\n            name="name"\n            id="name"\n            placeholder="Your Name"\n            class="formbold-form-input"\n          />\n        </div>\n\n        <div class="formbold-mb-5">\n          <label for="review" class="formbold-form-label">Review</label>\n          <textarea\n            rows="6"\n            name="review"\n            id="review"\n            placeholder="Explain your queries"\n            class="formbold-form-input"\n          ></textarea>\n        </div>\n\n        <div>\n          <button class="formbold-btn w-full">Submit</button>\n        </div>\n      </form>\n\n\n    </div>\n  </div>\n')}),o=function(r){return'  \n\n  <div class="card" onclick="location.href=\'#/detail/'.concat(r.id,'\';" tabindex="0">\n  <img class="card-image lazyload" data-src="').concat(e.Z.BASE_URL,"images/medium/").concat(r.pictureId,'" alt="').concat(r.name,'" >\n  <div class="card-content">\n    <h2 class="card-title">').concat(r.name,'</h2>\n    <div class="card-rating">Rating: ').concat(r.rating,'</div>\n    <p class="card-city">').concat(r.city,'</p> \n    <p class="card-description"> ').concat(r.description,"</p>\n  </div>\n</div>\n")},t=function(){return'\n  <button aria-label="like this movie" id="likeButton" class="like">\n    <i class="fa fa-heart-o" aria-hidden="true"></i>\n  </button>\n'},a=function(){return'\n  <button aria-label="unlike this movie" id="likeButton" class="like">\n    <i class="fa fa-heart" aria-hidden="true"></i>\n  </button>\n'}},144:(r,A,n)=>{n.d(A,{Z:()=>c});var e=n(537),i=n.n(e),o=n(645),t=n.n(o),a=n(667),d=n.n(a),C=new URL(n(541),n.b),s=t()(i());s.push([r.id,"@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap);"]);var l=d()(C);s.push([r.id,"html,body{padding:0;margin:0;overflow-x:visible}img{display:block}body{width:100%;height:100%;overflow-x:hidden}header{z-index:1;top:0;position:sticky;background-color:#fff;padding:1.5rem 5rem;display:flex;justify-content:space-between;box-shadow:0 2px 4px rgba(0,0,0,.1);align-items:center}.nav-menu{display:flex;gap:5rem;margin-right:2rem}.nav-item{list-style:none;font-family:poppins,sans-serif;font-size:1.25rem}.nav-item a{padding:2rem;text-decoration:none;color:#000}.hamburger{min-width:44px;min-height:44px;padding:1rem;display:none;cursor:pointer}.bar{display:block;width:25px;height:3px;margin:5px auto;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;background-color:#000}.hero-container{display:flex;justify-content:center;background-image:linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url("+l+")}.hero-container img{object-fit:cover;width:90%;height:40rem}main{font-family:poppins,sans-serif}main .card-wrapper{display:flex;justify-content:center;align-items:center;flex-wrap:wrap;padding:0;margin-top:5rem;gap:2rem}@media screen and (max-width: 400px){main header{width:100%}main header ul{width:revert}main .resto__address,main .resto__info{flex-direction:column}}main .head-card{z-index:0;position:relative}main .body-rating{border-radius:2rem 2rem 0 0;padding:.2rem 2rem;background-color:#fff;position:absolute;bottom:0;right:35%;display:flex;align-items:center;gap:1rem}main .body-city{color:#fff;padding:.2rem 2rem;background-color:#14213d;position:absolute;top:10;left:0;display:flex;align-items:center;gap:1rem}main .head-card img{height:20rem;width:100%;object-fit:cover}main .head-card .body-rating img{width:2rem;height:2rem}main .body-card{padding:10px 15px}main h1{text-align:center}main .body-card h1{padding:1rem;border-radius:1rem;background-color:#fca311;margin:0}main .body-card svg{width:31px;position:absolute;bottom:7px;right:20px}footer{margin-top:2rem;padding:2rem;position:relative;bottom:0;text-align:center;width:100%;font-family:poppins,sans-serif;color:#fff;display:block;background-color:#14213d}@media screen and (max-width: 1200px){main .card-wrapper{gap:.5rem}.hero-container img{width:100%;height:30rem}.hamburger{background-color:#fff;border:none;display:block}.hamburger.active .bar:nth-child(2){opacity:0}.hamburger.active .bar:nth-child(1){transform:translate(0, 8px) rotate(45deg)}.hamburger.active .bar:nth-child(3){transform:translate(0, -8px) rotate(-45deg)}header ul{position:fixed;left:-150%;top:5rem;gap:0;flex-direction:column;background-color:#fff;width:100%;text-align:center;transition:.3s;color:#2a9d8f}header ul li{margin:16px 0;padding:1.5rem}header ul.active{left:0;top:5rem}header{padding:2rem;justify-content:space-between}.nav-menu{gap:1rem}}::-webkit-scrollbar{width:20px}::-webkit-scrollbar-track{background-color:rgba(0,0,0,0)}::-webkit-scrollbar-thumb{background-color:#d6dee1;border-radius:20px;border:6px solid rgba(0,0,0,0);background-clip:content-box}::-webkit-scrollbar-thumb:hover{background-color:#a8bbbf}.skip-link{position:absolute;top:-40px;left:0;background-color:#bf1722;color:#fff;padding:8px;z-index:100}.skip-link:focus{top:0}@media screen and (max-width: 600px){header img{width:40%}}#restoDetail{display:flex;justify-content:center;align-items:center}#restoDetail .resto__poster{width:auto;max-width:400px}#restoDetail li{list-style-type:none}#restoDetail .resto__info2 .resto__address{display:flex;justify-content:space-around}#restoDetail .resto__info2{background-color:#fff;box-shadow:0 0px 10px rgba(0,0,0,.1);padding:2rem}#restoDetail .resto__info{display:flex;justify-content:space-around;box-shadow:0 0px 10px rgba(0,0,0,.1);padding:2rem}#restoDetail div{display:block;margin-left:auto;margin-right:auto;text-align:center;margin-bottom:2rem;width:90%;border-radius:2rem}#restoDetail img{display:block;margin-left:auto;margin-right:auto;width:50em;align-self:center}#restoDetail .customer__review .ulasan__Item{text-align:left}#restoDetail .customer__review .ulasan__Item h5{margin-top:0;font-weight:300}#restoDetail .customer__review .ulasan__Item h3{margin-bottom:0}#restoDetail .ulasan__Item{box-shadow:0 0px 10px rgba(0,0,0,.1);padding:2rem}@media screen and (max-width: 400px){#restoDetail div{width:90%}#restoDetail .resto__poster{width:auto;max-width:200px}#restoDetail .resto__info2,#restoDetail .resto__info,#restoDetail .ulasan__Item,#restoDetail my-footer{padding:1rem}}.like{width:55px;height:55px;display:flex;align-items:center;justify-content:center;background-color:#db0000;position:fixed;bottom:16px;right:16px;border-radius:50%;border:0;font-size:18px;color:#fff;cursor:pointer}footer{padding:16px}.formbold-chatbox-form{padding:32px 36px}.formbold-mb-5{margin-bottom:20px}.formbold-form-input{padding:12px 24px;border-radius:6px;border:1px solid #e0e0e0;background:#fff;font-weight:500;font-size:16px;color:#6b7280;outline:none;resize:none}.formbold-form-input:focus{border-color:#fca311;box-shadow:0px 3px 8px rgba(0,0,0,.05)}.formbold-btn{text-align:center;font-size:16px;border-radius:6px;padding:14px 32px;border:none;font-weight:600;background-color:#fca311;color:#fff;cursor:pointer}.w-full{width:100%}.card{width:100%;max-width:300px;background-color:#fff;border-radius:8px;box-shadow:0 2px 4px rgba(0,0,0,.1);overflow:hidden}.card-image{width:100%;height:auto;border-radius:8px 8px 0 0}.card-content{padding:16px}.card-title{font-size:24px;margin:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.card-rating{font-size:18px;color:#888}.card-description{margin-top:8px;color:#555;display:-webkit-box;-webkit-box-orient:vertical;overflow:hidden;-webkit-line-clamp:3}.card-city{margin-top:8px;color:#888}","",{version:3,sources:["webpack://./src/styles/main.scss"],names:[],mappings:"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",sourcesContent:['@import "https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap";\r\n\r\nhtml,\r\nbody {\r\n  padding: 0;\r\n  margin: 0;\r\n  overflow-x: visible;\r\n}\r\n\r\nimg {\r\n  display: block;\r\n}\r\n\r\nbody {\r\n  width: 100%;\r\n  height: 100%;\r\n  overflow-x: hidden;\r\n}\r\n\r\nheader {\r\n  z-index: 1;\r\n  top: 0;\r\n  position: sticky;\r\n  background-color: #fff;\r\n  padding: 1.5rem 5rem;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\r\n  align-items: center;\r\n}\r\n\r\n.nav-menu {\r\n  display: flex;\r\n  gap: 5rem;\r\n  margin-right: 2rem;\r\n}\r\n\r\n.nav-item {\r\n  list-style: none;\r\n  font-family: poppins, sans-serif;\r\n  font-size: 1.25rem;\r\n}\r\n\r\n.nav-item a {\r\n  padding: 2rem;\r\n  text-decoration: none;\r\n  color: #000;\r\n}\r\n\r\n.hamburger {\r\n  min-width: 44px;\r\n  min-height: 44px;\r\n  padding: 1rem;\r\n  display: none;\r\n  cursor: pointer;\r\n}\r\n\r\n.bar {\r\n  display: block;\r\n  width: 25px;\r\n  height: 3px;\r\n  margin: 5px auto;\r\n  -webkit-transition: all 0.3s ease-in-out;\r\n  transition: all 0.3s ease-in-out;\r\n  background-color: #000;\r\n}\r\n\r\n.hero-container {\r\n  display: flex;\r\n  justify-content: center;\r\n  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),\r\n    url("../public/images/heros/hero-image_2.jpg");\r\n  img {\r\n    object-fit: cover;\r\n    width: 90%;\r\n    height: 40rem;\r\n  }\r\n}\r\n\r\nmain {\r\n  font-family: poppins, sans-serif;\r\n  .card-wrapper {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-wrap: wrap;\r\n    padding: 0;\r\n    margin-top: 5rem;\r\n    gap: 2rem;\r\n  }\r\n\r\n  @media screen and (max-width: 400px) {\r\n    header {\r\n      width: 100%;\r\n      ul {\r\n        width: revert;\r\n      }\r\n    }\r\n    .resto__address,\r\n    .resto__info {\r\n      flex-direction: column;\r\n    }\r\n  }\r\n\r\n  .head-card {\r\n    z-index: 0;\r\n    position: relative;\r\n  }\r\n\r\n  .body-rating {\r\n    border-radius: 2rem 2rem 0 0;\r\n    padding: 0.2rem 2rem;\r\n    background-color: #fff;\r\n    position: absolute;\r\n    bottom: 0;\r\n    right: 35%;\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 1rem;\r\n  }\r\n\r\n  .body-city {\r\n    color: #fff;\r\n    padding: 0.2rem 2rem;\r\n    background-color: #14213d;\r\n    position: absolute;\r\n    top: 10;\r\n    left: 0;\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 1rem;\r\n  }\r\n\r\n  .head-card img {\r\n    height: 20rem;\r\n    width: 100%;\r\n    object-fit: cover;\r\n  }\r\n\r\n  .head-card .body-rating img {\r\n    width: 2rem;\r\n    height: 2rem;\r\n  }\r\n\r\n  .body-card {\r\n    padding: 10px 15px;\r\n  }\r\n\r\n  h1 {\r\n    text-align: center;\r\n  }\r\n\r\n  .body-card h1 {\r\n    padding: 1rem;\r\n    border-radius: 1rem;\r\n    background-color: #fca311;\r\n    margin: 0;\r\n  }\r\n\r\n  .body-card svg {\r\n    width: 31px;\r\n    position: absolute;\r\n    bottom: 7px;\r\n    right: 20px;\r\n  }\r\n}\r\n\r\nfooter {\r\n  margin-top: 2rem;\r\n  padding: 2rem;\r\n  position: relative;\r\n  bottom: 0;\r\n  text-align: center;\r\n  width: 100%;\r\n  font-family: poppins, sans-serif;\r\n  color: #fff;\r\n  display: block;\r\n  background-color: #14213d;\r\n}\r\n\r\n@media screen and (max-width: 1200px) {\r\n  main {\r\n    .card-wrapper {\r\n      gap: 0.5rem;\r\n    }\r\n  }\r\n  .hero-container {\r\n    img {\r\n      width: 100%;\r\n      height: 30rem;\r\n    }\r\n  }\r\n\r\n  .hamburger {\r\n    background-color: #fff;\r\n    border: none;\r\n    display: block;\r\n  }\r\n\r\n  .hamburger.active .bar:nth-child(2) {\r\n    opacity: 0;\r\n  }\r\n\r\n  .hamburger.active .bar:nth-child(1) {\r\n    transform: translate(0, 8px) rotate(45deg);\r\n  }\r\n  .hamburger.active .bar:nth-child(3) {\r\n    transform: translate(0, -8px) rotate(-45deg);\r\n  }\r\n\r\n  header ul {\r\n    position: fixed;\r\n    left: -150%;\r\n    top: 5rem;\r\n    gap: 0;\r\n    flex-direction: column;\r\n    background-color: white;\r\n    width: 100%;\r\n    text-align: center;\r\n    transition: 0.3s;\r\n    color: #2a9d8f;\r\n  }\r\n\r\n  header ul li {\r\n    margin: 16px 0;\r\n    padding: 1.5rem;\r\n  }\r\n\r\n  header ul.active {\r\n    left: 0;\r\n    top: 5rem;\r\n  }\r\n\r\n  header {\r\n    padding: 2rem;\r\n    justify-content: space-between;\r\n  }\r\n\r\n  .nav-menu {\r\n    gap: 1rem;\r\n  }\r\n}\r\n\r\n/* custom scrollbar */\r\n::-webkit-scrollbar {\r\n  width: 20px;\r\n}\r\n\r\n::-webkit-scrollbar-track {\r\n  background-color: transparent;\r\n}\r\n\r\n::-webkit-scrollbar-thumb {\r\n  background-color: #d6dee1;\r\n  border-radius: 20px;\r\n  border: 6px solid transparent;\r\n  background-clip: content-box;\r\n}\r\n\r\n::-webkit-scrollbar-thumb:hover {\r\n  background-color: #a8bbbf;\r\n}\r\n\r\n.skip-link {\r\n  position: absolute;\r\n  top: -40px;\r\n  left: 0;\r\n  background-color: #bf1722;\r\n  color: white;\r\n  padding: 8px;\r\n  z-index: 100;\r\n}\r\n\r\n.skip-link:focus {\r\n  top: 0;\r\n}\r\n\r\n@media screen and (max-width: 600px) {\r\n  header {\r\n    img {\r\n      width: 40%;\r\n    }\r\n  }\r\n}\r\n\r\n#restoDetail {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n\r\n  .resto__poster {\r\n    width: auto;\r\n    max-width: 400px;\r\n  }\r\n\r\n  li {\r\n    list-style-type: none;\r\n  }\r\n\r\n  .resto__info2 .resto__address {\r\n    display: flex;\r\n    justify-content: space-around;\r\n  }\r\n  .resto__info2 {\r\n    background-color: #fff;\r\n    box-shadow: 0 0px 10px rgba(0, 0, 0, 0.1);\r\n    padding: 2rem;\r\n  }\r\n\r\n  .resto__info {\r\n    display: flex;\r\n    justify-content: space-around;\r\n    box-shadow: 0 0px 10px rgba(0, 0, 0, 0.1);\r\n    padding: 2rem;\r\n  }\r\n\r\n  div {\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    text-align: center;\r\n    margin-bottom: 2rem;\r\n    width: 90%;\r\n    border-radius: 2rem;\r\n  }\r\n\r\n  img {\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    width: 50em;\r\n    align-self: center;\r\n  }\r\n\r\n  .customer__review .ulasan__Item {\r\n    text-align: left;\r\n  }\r\n  .customer__review .ulasan__Item h5 {\r\n    margin-top: 0;\r\n    font-weight: 300;\r\n  }\r\n  .customer__review .ulasan__Item h3 {\r\n    margin-bottom: 0;\r\n  }\r\n\r\n  .ulasan__Item {\r\n    box-shadow: 0 0px 10px rgba(0, 0, 0, 0.1);\r\n    padding: 2rem;\r\n  }\r\n\r\n  @media screen and (max-width: 400px) {\r\n    div {\r\n      width: 90%;\r\n    }\r\n    .resto__poster {\r\n      width: auto;\r\n      max-width: 200px;\r\n    }\r\n\r\n    .resto__info2,\r\n    .resto__info,\r\n    .ulasan__Item,\r\n    my-footer {\r\n      padding: 1rem;\r\n    }\r\n  }\r\n}\r\n\r\n.like {\r\n  width: 55px;\r\n  height: 55px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  background-color: #db0000;\r\n\r\n  position: fixed;\r\n  bottom: 16px;\r\n  right: 16px;\r\n  border-radius: 50%;\r\n  border: 0;\r\n\r\n  font-size: 18px;\r\n  color: white;\r\n  cursor: pointer;\r\n}\r\n\r\n/*\r\n  Footer\r\n*/\r\n\r\nfooter {\r\n  padding: 16px;\r\n}\r\n\r\n.formbold-chatbox-form {\r\n  padding: 32px 36px;\r\n}\r\n\r\n.formbold-mb-5 {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.formbold-form-input {\r\n  padding: 12px 24px;\r\n  border-radius: 6px;\r\n  border: 1px solid #e0e0e0;\r\n  background: white;\r\n  font-weight: 500;\r\n  font-size: 16px;\r\n  color: #6b7280;\r\n  outline: none;\r\n  resize: none;\r\n}\r\n.formbold-form-input:focus {\r\n  border-color: #fca311;\r\n  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.05);\r\n}\r\n.formbold-btn {\r\n  text-align: center;\r\n  font-size: 16px;\r\n  border-radius: 6px;\r\n  padding: 14px 32px;\r\n  border: none;\r\n  font-weight: 600;\r\n  background-color: #fca311;\r\n  color: white;\r\n  cursor: pointer;\r\n}\r\n\r\n.w-full {\r\n  width: 100%;\r\n}\r\n\r\n.card {\r\n  width: 100%;\r\n  max-width: 300px;\r\n  background-color: #fff;\r\n  border-radius: 8px;\r\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\r\n  overflow: hidden;\r\n}\r\n\r\n.card-image {\r\n  width: 100%;\r\n  height: auto;\r\n  border-radius: 8px 8px 0 0;\r\n}\r\n\r\n.card-content {\r\n  padding: 16px;\r\n}\r\n\r\n.card-title {\r\n  font-size: 24px;\r\n  margin: 0;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  white-space: nowrap;\r\n}\r\n\r\n.card-rating {\r\n  font-size: 18px;\r\n  color: #888;\r\n}\r\n\r\n.card-description {\r\n  margin-top: 8px;\r\n  color: #555;\r\n  display: -webkit-box;\r\n  -webkit-box-orient: vertical;\r\n  overflow: hidden;\r\n  -webkit-line-clamp: 3;\r\n}\r\n\r\n.card-city {\r\n  margin-top: 8px;\r\n  color: #888;\r\n}\r\n'],sourceRoot:""}]);const c=s},545:(r,A,n)=>{var e=n(379),i=n.n(e),o=n(795),t=n.n(o),a=n(569),d=n.n(a),C=n(565),s=n.n(C),l=n(216),c=n.n(l),p=n(589),m=n.n(p),g=n(144),b={};b.styleTagTransform=m(),b.setAttributes=s(),b.insert=d().bind(null,"head"),b.domAPI=t(),b.insertStyleElement=c(),i()(g.Z,b),g.Z&&g.Z.locals&&g.Z.locals}},n={};function e(r){var i=n[r];if(void 0!==i)return i.exports;var o=n[r]={id:r,exports:{}};return A[r](o,o.exports,e),o.exports}e.m=A,r=[],e.O=(A,n,i,o)=>{if(!n){var t=1/0;for(s=0;s<r.length;s++){for(var[n,i,o]=r[s],a=!0,d=0;d<n.length;d++)(!1&o||t>=o)&&Object.keys(e.O).every((r=>e.O[r](n[d])))?n.splice(d--,1):(a=!1,o<t&&(t=o));if(a){r.splice(s--,1);var C=i();void 0!==C&&(A=C)}}return A}o=o||0;for(var s=r.length;s>0&&r[s-1][2]>o;s--)r[s]=r[s-1];r[s]=[n,i,o]},e.n=r=>{var A=r&&r.__esModule?()=>r.default:()=>r;return e.d(A,{a:A}),A},e.d=(r,A)=>{for(var n in A)e.o(A,n)&&!e.o(r,n)&&Object.defineProperty(r,n,{enumerable:!0,get:A[n]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(r){if("object"==typeof window)return window}}(),e.o=(r,A)=>Object.prototype.hasOwnProperty.call(r,A),(()=>{var r;e.g.importScripts&&(r=e.g.location+"");var A=e.g.document;if(!r&&A&&(A.currentScript&&(r=A.currentScript.src),!r)){var n=A.getElementsByTagName("script");n.length&&(r=n[n.length-1].src)}if(!r)throw new Error("Automatic publicPath is not supported in this browser");r=r.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=r})(),(()=>{e.b=document.baseURI||self.location.href;var r={535:0};e.O.j=A=>0===r[A];var A=(A,n)=>{var i,o,[t,a,d]=n,C=0;if(t.some((A=>0!==r[A]))){for(i in a)e.o(a,i)&&(e.m[i]=a[i]);if(d)var s=d(e)}for(A&&A(n);C<t.length;C++)o=t[C],e.o(r,o)&&r[o]&&r[o][0](),r[o]=0;return e.O(s)},n=self.webpackChunkrestaurant_apps=self.webpackChunkrestaurant_apps||[];n.forEach(A.bind(null,0)),n.push=A.bind(null,n.push.bind(n))})(),e.nc=void 0;var i=e.O(void 0,[192,2,193,337,268],(()=>e(746)));i=e.O(i)})();
//# sourceMappingURL=app~f6563343.bundle.js.map