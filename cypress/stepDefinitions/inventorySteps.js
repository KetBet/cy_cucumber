import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { inventoryPage } from "../pages/inventory.page";
import { loginPage } from "../pages/login.page";
import { cartPage } from "../pages/cart.page";

const dataLayer = require("../fixtures/dataLayer.json");

Given("User is located on the login page", () => {
  loginPage.visitLoginPage();
});

When("User is logged in", () => {
  loginPage.login(dataLayer.username, dataLayer.password);
});

When(
  "User clicks on the Add to cart button on the Sauce Labs Backpack product",
  () => {
    inventoryPage.clickAddToCartBackpack();
  }
);

Then(
  "Confirm that the number near the cart icon at the top right corner is changed to 1",
  () => {
    inventoryPage.validateNumberNearTheCart(dataLayer.number);
  }
);

When("User clicks on the Price low to high sorting dropdown link", () => {
  inventoryPage.clickOnTePriceLohi();
});

Then(
  "Verify that the Price low to high input is displayed at the sorting dropdown field",
  () => {
    inventoryPage.validateSortingByPriceLohi();
  }
);

When("User clicks on the Twitter icon at the footer", () => {
  inventoryPage.clickTwitterIcon();
});

Then("User is redirected to the company's Twitter page", () => {
  inventoryPage.validateRedirectionToTheTwitterPage();
});

When("User clicks on the Facebook icon at the footer", () => {
  inventoryPage.clickFacebookIcon();
});

Then("User is redirected to the company's Facebook page", () => {
  inventoryPage.validateRedirectionToTheFacebookPage();
});

When("User clicks on the Linkedin icon at the footer", () => {
  inventoryPage.clickLinkedinIcon();
});

Then("User is redirected to the company's Linkedin page", () => {
  inventoryPage.validateRedirectionToTheLinkedinPage();
});

When("User clicks on the Cart icon at the top right corner", () => {
  inventoryPage.clickOnTheCartIcon();
});

Then("Verify that the user is on the cart page", () => {
  cartPage.validateCartPageUrl();
});

When("User clicks on the Continue Shopping button", () => {
  cartPage.clickContinueShoppingBtn();
});

Then("Confirm that user is redirected to the inventory page", () => {
  inventoryPage.validateInventoryPageUrl();
});

When("User clicks on the Privacy Policy label at the footer", () => {
  inventoryPage.clickOnThePrivacyPolicyLabel();
});

Then("Confirm that user is still on the inventory page", () => {
  inventoryPage.validateInventoryPageUrl();
});

When(
  "User clicks on the burger menu on the top left corner of the page",
  () => {
    inventoryPage.clickOnTheBurgerMenuBtn();
  }
);

Then("Check that expanded dropdown list is displayed", () => {
  inventoryPage.validateDropdownListExpanded();
});

When("User clicks on the Logout link", () => {
  inventoryPage.clickLogoutLink();
});

Then("Verify that user is redirected to the login page", () => {
  inventoryPage.validateLoginPageUrl();
});

When(
  "User clicks on the Add to cart button near Sauce Labs Bolt T-Shirt product",
  () => {
    inventoryPage.clickAddToCartTShort();
  }
);

Then("Check that number near the cart icon is changed to 1", () => {
  inventoryPage.validateNumberNearTheCart(dataLayer.number);
});

When("User clicks on the burger menu", () => {
  inventoryPage.clickOnTheBurgerMenuBtn();
});

Then("Check that expanded dropdown list is shown", () => {
  inventoryPage.validateDropdownListExpanded();
});

When("User press the Logout button", () => {
  inventoryPage.clickLogoutLink();
});

Then("Check that the Login button is displayed", () => {
  inventoryPage.validateThatLoginBtnExist();
});

When(
  "User loggs to the account using the same valid login and password",
  () => {
    loginPage.login(dataLayer.username, dataLayer.password);
  }
);

Then("Verify that the user is redirected to the inventory page", () => {
  inventoryPage.validateInventoryPageUrl();
});

When("User open the cart link", () => {
  inventoryPage.clickOnTheCartIcon();
});

Then(
  "Confirm that Sauce Labs Bolt T-Shirt product is added to the cart",
  () => {
    cartPage.validateThatTShorAddedToCart();
  }
);
