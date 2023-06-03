import LikeButtonInitiator from "../src/scripts/utils/like-button-presenter";
import FavoriteRestoIdb from "../src/scripts/data/favorite-resto-idb";
import * as TestFactories from "./helpers/testFactories";
import { async } from "regenerator-runtime";

describe("Unliking A Movie", () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(async () => {
    addLikeButtonContainer();
    await FavoriteRestoIdb.putResto({ id: "rqdv5juczeskfw1e867" });
  });

  afterEach(async () => {
    await FavoriteRestoIdb.deleteResto("rqdv5juczeskfw1e867");
  });

  it("should display unlike widget when the resto has been liked", async () => {
    await TestFactories.createLikeButtonInitiatorPresenterWithResto({
      id: "rqdv5juczeskfw1e867",
    });

    expect(
      document.querySelector('[aria-label="unlike this movie"]')
    ).toBeTruthy();
  });

  it("should not display like widget when the movie has been liked", async () => {
    await TestFactories.createLikeButtonInitiatorPresenterWithResto({
      id: "rqdv5juczeskfw1e867",
    });

    expect(
      document.querySelector('[aria-label="like this movie"]')
    ).toBeFalsy();
  });

  it("should be able to remove liked resto from the list", async () => {
    await TestFactories.createLikeButtonInitiatorPresenterWithResto({
      id: "rqdv5juczeskfw1e867",
    });

    document
      .querySelector('[aria-label="unlike this movie"]')
      .dispatchEvent(new Event("click"));

    expect(await FavoriteRestoIdb.getAllRestos()).toEqual([]);
  });

  it("should not throw error if the unliked movie is not in the list", async () => {
    await TestFactories.createLikeButtonInitiatorPresenterWithResto({
      id: "rqdv5juczeskfw1e867",
    });

    await FavoriteRestoIdb.deleteResto("rqdv5juczeskfw1e867");

    document
      .querySelector('[aria-label="unlike this movie"]')
      .dispatchEvent(new Event("click"));

    expect(await FavoriteRestoIdb.getAllRestos()).toEqual([]);
  });
});
