import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { inventoryPage } from "../pages/inventory.page";
import { loginPage } from "../pages/login.page";
import { faker } from "@faker-js/faker";
import { cartPage } from "../pages/cart.page";

const dataLayer = require("../fixtures/dataLayer.json");

Given("User is already on the login page", () => {
  loginPage.visitLoginPage();
});

When("User is successfully logged in", () => {
  loginPage.login(dataLayer.username, dataLayer.password);
});

When("User adds the Sauce Labs Backpack product to the cart", () => {
  inventoryPage.clickAddToCartBackpack();
});

Then(
  "Verify that the number near the cart icon at the top right corner is changed to 1",
  () => {
    inventoryPage.validateNumberNearTheCart(dataLayer.number);
  }
);

When("User clicks on the Cart icon", () => {
  inventoryPage.clickOnTheCartIcon();
});

Then("Verify that the Sauce Labs Backpack product is displayed", () => {
  cartPage.validateThatBackpackExist();
});

When("User clicks on the Remove button on the product block", () => {
  cartPage.clickRemoveBackpackBtn();
});

Then("Verify that the Sauce Labs Backpack isn't displayed", () => {
  cartPage.validateThatBackpackIsRemoved();
});

When(
  "User clicks on the Add to cart button near Sauce Labs Bike Light product",
  () => {
    inventoryPage.clickAddToCartBike();
  }
);

Then(
  "Check that number near the cart icon at the top right corner is changed to 1",
  () => {
    inventoryPage.validateNumberNearTheCart(dataLayer.number);
  }
);

When("User clicks on the Cart button at the top right corner", () => {
  inventoryPage.clickOnTheCartIcon();
});

Then(
  "Verify that the Sauce Labs Bike Light product is added to the cart",
  () => {
    cartPage.validateThatBikeExist();
  }
);

When("User clicks on the Checkout button", () => {
  cartPage.clickCheckoutBtn();
});

Then("Verify that the checkout form is displayed", () => {
  cartPage.validateCheckoutFormExist();
});

When("User fill the First Name field with valid data", () => {
  cartPage.fillTheFirstNameField(faker.person.firstName());
});

When("User fill the Second Name field with valid data", () => {
  cartPage.fillTheLastNameField(faker.person.lastName());
});

When("User fill the Postal Code field with valid data", () => {
  cartPage.fillThePostalCodeField(faker.location.zipCode());
});

When("User clicks on the Continue button", () => {
  cartPage.clickContinueBtn();
});

Then("Verify that user is redirected to the Overview page", () => {
  cartPage.validateOverviewPageUrl();
});

When("User clicks on the Finish button", () => {
  cartPage.clickFinishBtn();
});

Then("Verify that Thank you for your order! message is displayed", () => {
  cartPage.validateSuccessfullCheckoutMsg();
});

When("User clicks on the Cart button", () => {
  inventoryPage.clickOnTheCartIcon();
});

Then("Verify that user is on the cart page", () => {
  cartPage.validateCartPageUrl();
});

When("User press the Checkout button", () => {
  cartPage.clickCheckoutBtn();
});

Then("Verify that the Checkout: Your Information form is displayed", () => {
  cartPage.validateCheckoutFormExist();
});

When("User completes the checkaout by clicking on the Continue button", () => {
  cartPage.clickContinueBtn();
});

Then(
  "Verify that the Error: First Name is required error message is displayed",
  () => {
    cartPage.validateFirstNameErrorMsg();
  }
);
