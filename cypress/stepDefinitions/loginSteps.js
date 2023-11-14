import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { faker } from "@faker-js/faker";
import { loginPage } from "../pages/login.page";

const dataLayer = require("../fixtures/dataLayer.json");

Given("User is on the login page", () => {
  loginPage.visitLoginPage();
});

When("User enter valid username into Username field", () => {
  loginPage.userNameInput(dataLayer.username);
});

When("User enter valid password into Password field", () => {
  loginPage.passwordInput(dataLayer.password);
});

When("User clicks on the Login button", () => {
  loginPage.clickLogInBtn();
});

Then("User is redirected to the inventory page", () => {
  loginPage.validateInventoryPageUrl();
});

When("User enter valid password", () => {
  loginPage.passwordInput(dataLayer.password);
});

When("User press the Login button", () => {
  loginPage.clickLogInBtn();
});

Then(
  "The Epic sadface: Username is required error message is displayed",
  () => {
    loginPage.validateUsernameErrorMsg();
  }
);

When("User enter valid username into the Username field", () => {
  loginPage.userNameInput(dataLayer.username);
});

When("User enter invalid password into Password field", () => {
  loginPage.passwordInputInvalid(faker.internet.password());
});

When("User completes the log in by clicking Login button", () => {
  loginPage.clickLogInBtn();
});

Then(
  "The Epic sadface: Username and password do not match any user in this service error message is displayed",
  () => {
    loginPage.validatePasswordErrorMsg();
  }
);
