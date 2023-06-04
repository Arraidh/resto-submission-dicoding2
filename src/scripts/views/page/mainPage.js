import restoDBSource from "../../data/restodb-source";
import { RestoTemplate } from "../templates/template-creator";

const Resto = {
  async render() {
    return `
    <picture class="hero-container">
      <source media="(max-width: 600px)" srcset="./images/heros/hero-image_2-small.jpg" >
        <img
          src="./images/heros/hero-image_2-large.jpg"
          alt="Welcome to Warung Kita Picture"
        />
        </picture>
      <div class="card-wrapper main" id="card-wrapper"></div>
        `;
  },

  async afterRender() {
    const Restos = await restoDBSource.listRestourant();
    const restoContainer = document.querySelector("#card-wrapper");
    for (let resto in Restos) {
      restoContainer.innerHTML += RestoTemplate(Restos[resto]);
    }
  },
};

export default Resto;
