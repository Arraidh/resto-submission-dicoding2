import restoDBSource from "../../data/restodb-source";
import UrlParser from "../../routes/url-parser";
import { RestoDetailTemplate } from "../templates/template-creator";
import LikeButtonInitiator from "../../utils/like-button-initiator";

const Detail = {
  async render() {
    return `
        <div id='restoDetail'></div>
        <div id="likeButtonContainer"></div>
        `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await restoDBSource.detailRestourant(url.id);
    const restoContainer = document.querySelector("#restoDetail");
    restoContainer.innerHTML += RestoDetailTemplate(resto.restaurant);

    const iterateMenu = (menus, containerClass) => {
      const menuContainer = document.querySelector(containerClass);
      for (let menu in menus) {
        menuContainer.innerHTML += `<li>${menus[menu].name}</li>`;
      }
    };

    const iterateReview = (reviews, containerClass) => {
      const restoContainer = document.querySelector(containerClass);
      for (let review in reviews) {
        restoContainer.innerHTML += `
          <div class="ulasan__Item">
                <h3>${reviews[review].name}</h3>
                <h5>${reviews[review].date}</h5>
                <p>${reviews[review].review}</p>
                </div>
                `;
      }
    };

    iterateReview(resto.restaurant.customerReviews, ".customer__review");
    iterateMenu(resto.restaurant.menus.foods, ".food__menu");
    iterateMenu(resto.restaurant.menus.drinks, ".drink__menu");

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector("#likeButtonContainer"),
      resto: {
        id: resto.restaurant.id,
        name: resto.restaurant.name,
        description: resto.restaurant.description,
        city: resto.restaurant.city,
        rating: resto.restaurant.rating,
        pictureId: resto.restaurant.pictureId,
      },
    });
  },
};

export default Detail;
