const removeBackpackBtn = "#remove-sauce-labs-backpack";
const checkoutBtnEl = "#checkout";
const checkoutFormEl = "form > div.checkout_info";
const firstNameEl = "#first-name";
const lastNameEl = "#last-name";
const postalCodeEl = "#postal-code";
const continueBtnEl = "#continue";
const finishBtnEl = "#finish";
const continueShoppingBtn = "#continue-shopping";

class CartPage {
  validateThatBackpackExist() {
    cy.contains("Sauce Labs Backpack").should("exist");
  }

  clickRemoveBackpackBtn() {
    cy.get(removeBackpackBtn).click();
  }

  validateThatBackpackIsRemoved() {
    cy.contains("Sauce Labs Backpack").should("not.exist");
  }

  validateThatBikeExist() {
    cy.contains("Sauce Labs Bike Light").should("exist");
  }

  clickCheckoutBtn() {
    cy.get(checkoutBtnEl).click();
  }

  validateCheckoutFormExist() {
    cy.get(checkoutFormEl).should("exist");
  }

  fillTheFirstNameField(randomFirstName) {
    cy.get(firstNameEl).type(randomFirstName);
  }

  fillTheLastNameField(randomLastName) {
    cy.get(lastNameEl).type(randomLastName);
  }

  fillThePostalCodeField(randomPostalCode) {
    cy.get(postalCodeEl).type(randomPostalCode);
  }

  clickContinueBtn() {
    cy.get(continueBtnEl).click();
  }

  validateOverviewPageUrl() {
    cy.url().should(
      "be.equal",
      "https://www.saucedemo.com/checkout-step-two.html"
    );
  }

  clickFinishBtn() {
    cy.get(finishBtnEl).click();
  }

  validateSuccessfullCheckoutMsg() {
    cy.contains("Thank you for your order!").should("be.visible");
  }

  validateCartPageUrl() {
    cy.url().should("be.equal", "https://www.saucedemo.com/cart.html");
  }

  validateFirstNameErrorMsg() {
    cy.contains("Error: First Name is required").should("be.visible");
  }

  clickContinueShoppingBtn() {
    cy.get(continueShoppingBtn).click();
  }

  validateThatTShorAddedToCart() {
    cy.contains("Sauce Labs Bolt T-Shirt").should("be.visible");
  }
}

export const cartPage = new CartPage();
