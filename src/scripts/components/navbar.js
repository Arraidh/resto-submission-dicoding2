// // Define the CustomNavbar class extending HTMLElement
// class CustomNavbar extends HTMLElement {
//   constructor() {
//     super();

//     // Create a shadow root
//     const shadowRoot = this.attachShadow({ mode: "open" });

//     // Create the navbar HTML structure
//     const navbar = document.createElement("header");
//     navbar.innerHTML = `
//             <img src="./images/Logo.png" alt="WarungKita" />
//             <ul class="nav-menu">
//               <li class="nav-item"><a href="/">Home</a></li>
//               <li class="nav-item"><a href="#/favourite">Favourite</a></li>
//               <li class="nav-item">
//                 <a href="https://github.com/Arraidh">About</a>
//               </li>
//             </ul>
//             <button class="hamburger">
//               <span class="bar"></span>
//               <span class="bar"></span>
//               <span class="bar"></span>
//             </button>

//             <style>
//             @media screen and (max-width: 600px) {
//               header {
//                 img {
//                   width: 40%;
//                 }
//               }
//             }

//             header {
//               z-index: 1;
//               top: 0;
//               position: sticky;
//               background-color: #fff;
//               padding: 1.5rem 5rem;
//               display: flex;
//               justify-content: space-between;
//               box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
//               align-items: center;
//             }

//             header ul {
//               position: fixed;
//               left: -150%;
//               top: 5rem;
//               gap: 0;
//               flex-direction: column;
//               background-color: white;
//               width: 100%;
//               text-align: center;
//               transition: 0.3s;
//               color: #2a9d8f;
//             }

//             header ul li {
//               margin: 16px 0;
//               padding: 1.5rem;
//             }

//             header ul.active {
//               left: 0;
//               top: 5rem;
//             }

//             header {
//               padding: 2rem;
//               justify-content: space-between;
//             }
//             </style>
//           `;

//     // Append the navbar to the shadow root
//     shadowRoot.appendChild(navbar);
//   }
// }

// // Define the custom element <custom-navbar> with the CustomNavbar class
// customElements.define("custom-navbar", CustomNavbar);
