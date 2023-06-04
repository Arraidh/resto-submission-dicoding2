const assert = require("assert");

Feature("Customer Review");

Scenario("Submit Customer Review", async ({ I }) => {
  I.amOnPage("/");

  await I.waitForVisible(".card");

  const firstRestoElement = locate(".card .card-content .card-title").first();
  I.click(firstRestoElement);

  await I.waitForVisible("#reviewForm");

  const hasNameInput = await I.grabNumberOfVisibleElements("#name");
  const hasReviewInput = await I.grabNumberOfVisibleElements("#review");
  const hasSubmitButton = await I.grabNumberOfVisibleElements(".formbold-btn");

  assert.strictEqual(hasNameInput, 1);
  assert.strictEqual(hasReviewInput, 1);
  assert.strictEqual(hasSubmitButton, 1);

  const name = "Rick Roll";
  const review = "Cozy Place";
  I.fillField("#name", name);
  I.fillField("#review", review);

  I.click(".formbold-btn");

  await I.refreshPage();
  await I.refreshPage();

  I.amOnPage("/");

  I.click(firstRestoElement);

  // Wait for review card to load
  await I.waitForVisible(".ulasan__Item");

  await I.waitForVisible(".customer__review .ulasan__Item");

  const reviewItems = await I.grabTextFromAll(
    ".customer__review .ulasan__Item"
  );

  const isReviewPresent = reviewItems.some(
    (item) => item.includes(name) && item.includes(review)
  );

  assert.strictEqual(isReviewPresent, true);
});
