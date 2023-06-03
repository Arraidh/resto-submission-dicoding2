import LikeButtonPresenter from "../../src/scripts/utils/like-button-presenter";

const createLikeButtonInitiatorPresenterWithResto = async (resto) => {
  await LikeButtonPresenter.init({
    likeButtonContainer: document.querySelector("#likeButtonContainer"),
    resto,
  });
};

export { createLikeButtonInitiatorPresenterWithResto };
