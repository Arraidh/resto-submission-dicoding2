const assert = require("assert");
Feature("Liking Restos");

Scenario("Liking and Unlike resto", async ({ I }) => {
  I.amOnPage("/");

  await I.waitForVisible(".card");

  const firstResto = locate(".card").first();
  const firstRestoElement = locate(".card .card-content .card-title").first();
  const firstRestoTitle = await I.grabTextFrom(firstRestoElement);
  I.click(firstResto);

  await I.waitForVisible("#likeButton");
  I.click("#likeButton");

  I.amOnPage("/#/favourite");

  await I.waitForVisible(".card");
  const likedRestoTitle = await I.grabTextFrom(
    ".card .card-content .card-title"
  );

  assert.strictEqual(firstRestoTitle, likedRestoTitle);

  I.amOnPage("/");

  I.click(firstRestoElement);

  await I.waitForVisible("#likeButton");

  I.click("#likeButton");

  I.amOnPage("/#/favourite");

  const isRestoPresent = await I.grabNumberOfVisibleElements(
    ".card .card-content .card-title"
  );

  assert.strictEqual(isRestoPresent, 0);
});
