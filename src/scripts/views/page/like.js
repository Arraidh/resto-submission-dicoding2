import FavoriteRestoIdb from "../../data/favorite-resto-idb";
import { RestoTemplate } from "../templates/template-creator";

const Like = {
  async render() {
    return `
    <div class="content main">
        <h2 class="content__heading">Your Liked Restaurants</h2>
        <div class="card-wrapper" id="card-wrapper"></div>
    </div>`;
  },

  async afterRender() {
    const restos = await FavoriteRestoIdb.getAllRestos();
    const restoContainer = document.querySelector("#card-wrapper");

    restos.forEach((resto) => {
      restoContainer.innerHTML += RestoTemplate(resto);
    });
  },
};

export default Like;
