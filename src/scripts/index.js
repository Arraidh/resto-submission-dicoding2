import "regenerator-runtime";
import "../styles/main.scss";
import App from "./views/app";
import swRegister from "./utils/sw-register";
import "./components/footer";

console.log("Hello Coders! :)");

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

const app = new App({
  content: document.querySelector("#maincontent"),
});

window.addEventListener("hashchange", () => {
  app.renderPage();
});

window.addEventListener("load", () => {
  app.renderPage();
  swRegister();
});
