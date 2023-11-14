const userNameField = "#user-name";
const passwordInputField = "#password";
const logInBtn = "#login-button";

class LoginPage {
  visitLoginPage() {
    cy.visit("/");
  }

  login(username, password) {
    cy.get(userNameField).type(username);
    cy.get(passwordInputField).type(password);
    cy.get(logInBtn).click();
  }

  userNameInput(username) {
    cy.get(userNameField).type(username);
  }

  passwordInputInvalid(randomName) {
    cy.get(passwordInputField).type(randomName);
  }

  passwordInput(password) {
    cy.get(passwordInputField).type(password);
  }

  clickLogInBtn() {
    cy.get(logInBtn).click();
  }

  validateInventoryPageUrl() {
    cy.url().should("be.equal", "https://www.saucedemo.com/inventory.html");
  }

  validateUsernameErrorMsg() {
    cy.contains("Epic sadface: Username is required").should("be.visible");
  }

  validatePasswordErrorMsg() {
    cy.contains(
      "Epic sadface: Username and password do not match any user in this service"
    ).should("be.visible");
  }
}

export const loginPage = new LoginPage();
