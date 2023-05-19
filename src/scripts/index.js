import "regenerator-runtime";
import "../styles/main.scss";
// import data from "../DATA.json";
import App from "./views/app";

console.log("Hello Coders! :)");

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

const app = new App({
  content: document.querySelector('#maincontent')
})

window.addEventListener('hashchange', () => {
  app.renderPage();
})

window.addEventListener('load', () => {
  app.renderPage();
})


// const restoData = { ...data.restaurants };
// const cardData = { ...restoData };

// const cardWrapper = document.getElementById("card-wrapper");

// for (let card = 0; card < Object.keys(cardData).length; card++) {
//   cardWrapper.innerHTML += `
//   <div class="card">
//     <div class="head-card">
//       <p class="body-city" tabindex="${card}">
//       ${cardData[card].city}
//       </p>
//       <img src="${cardData[card].pictureId}" alt="" tabindex="${card}"/>
//       <div class="body-rating">
//         <img src="./images/Rating.png" alt="Picture of ${cardData[card].name}" />
//         <p tabindex="${card}">
//           ${cardData[card].rating}
//         </p>
//       </div>
//     </div>
//     <div class="body-card">
//       <h1 tabindex="${card + 1}">${cardData[card].name}</h1>
//       <p tabindex="${card}">
//         ${cardData[card].description}
//       </p>
//     </div>
//   </div>`;
// }
