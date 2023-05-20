import "regenerator-runtime";
import "../styles/main.scss";
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
