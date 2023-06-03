import FavoriteRestoIdb from "../src/scripts/data/favorite-resto-idb";
import * as TestFactories from "./helpers/testFactories";

describe("Liking A Resto", () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = `<div id='likeButtonContainer'></div>`;
  };

  beforeEach(() => {
    addLikeButtonContainer();
  });

  it("should show the like button when the resto has not been liked before", async () => {
    await TestFactories.createLikeButtonInitiatorPresenterWithResto({
      id: "rqdv5juczeskfw1e867",
    });

    expect(
      document.querySelector('[aria-label="like this movie"]')
    ).toBeTruthy();
  });

  it("should be able to like the resto", async () => {
    await TestFactories.createLikeButtonInitiatorPresenterWithResto({
      id: "rqdv5juczeskfw1e867",
    });

    document.querySelector("#likeButton").dispatchEvent(new Event("click"));
    const resto = await FavoriteRestoIdb.getResto("rqdv5juczeskfw1e867");
    expect(resto).toEqual({ id: "rqdv5juczeskfw1e867" });

    FavoriteRestoIdb.deleteResto("rqdv5juczeskfw1e867");
  });

  it("should not add a resto again when its already liked", async () => {
    await TestFactories.createLikeButtonInitiatorPresenterWithResto({
      id: "rqdv5juczeskfw1e867",
    });

    await FavoriteRestoIdb.putResto({ id: "rqdv5juczeskfw1e867" });
    document.querySelector("#likeButton").dispatchEvent(new Event("click"));

    expect(await FavoriteRestoIdb.getAllRestos()).toEqual([
      { id: "rqdv5juczeskfw1e867" },
    ]);

    FavoriteRestoIdb.deleteResto("rqdv5juczeskfw1e867");
  });

  it("should not add a resto when it has no id", async () => {
    await TestFactories.createLikeButtonInitiatorPresenterWithResto({});

    document.querySelector("#likeButton").dispatchEvent(new Event("click"));
    expect(await FavoriteRestoIdb.getAllRestos()).toEqual([]);
  });
});
