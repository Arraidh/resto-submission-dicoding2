import LikeButtonPresenter from "../../src/scripts/utils/like-button-presenter";
import FavoriteRestoIdb from "../../src/scripts/data/favorite-resto-idb";

const createLikeButtonInitiatorPresenterWithResto = async (resto) => {
  await LikeButtonPresenter.init({
    likeButtonContainer: document.querySelector("#likeButtonContainer"),
    favoriteRestos: FavoriteRestoIdb,
    resto,
  });
};

export { createLikeButtonInitiatorPresenterWithResto };
