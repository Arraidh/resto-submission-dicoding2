import restoDBSource from "../../data/restodb-source";
import { RestoTemplate } from "../templates/template-creator";

const Resto = {
  async render() {
    return `
        <div class="hero-container">
        <img
          src="./images/heros/hero-image_2.jpg"
          alt="Welcome to Warung Kita Picture"
        />
      </div>
      <div class="card-wrapper" id="card-wrapper"></div>
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
