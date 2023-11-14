const addToCartBackpackEl = "#add-to-cart-sauce-labs-backpack";
const numberNearTheCart = "#shopping_cart_container > a > span";
const cartIconEl = "#shopping_cart_container > a";
const addToCartBikeEl = "#add-to-cart-sauce-labs-bike-light";
const twitterLink = "li.social_twitter > a";
const facebookLink = "li.social_facebook > a";
const linkedinLink = "li.social_linkedin > a";
const burgerMenuBtn = "#react-burger-menu-btn";
const burgerMenuItemList = "nav.bm-item-list";
const logoutLink = "#logout_sidebar_link";
const addToCartTShortEl = "#add-to-cart-sauce-labs-bolt-t-shirt";

class InventoryPage {
  clickAddToCartBackpack() {
    cy.get(addToCartBackpackEl).click();
  }

  validateNumberNearTheCart(number) {
    cy.get(numberNearTheCart).contains(number);
  }

  clickOnTheCartIcon() {
    cy.get(cartIconEl).click();
  }

  clickAddToCartBike() {
    cy.get(addToCartBikeEl).click();
  }

  clickOnTePriceLohi() {
    cy.get("select").select("lohi");
  }

  validateSortingByPriceLohi() {
    cy.contains("Price (low to high)").should("be.visible");
  }

  clickTwitterIcon() {
    cy.get(twitterLink).invoke("removeAttr", "target").click();
  }

  validateRedirectionToTheTwitterPage() {
    cy.origin("https://twitter.com/saucelabs", () => {
      cy.url().should("include", "/saucelabs");
    });
  }

  clickFacebookIcon() {
    cy.get(facebookLink).invoke("removeAttr", "target").click();
  }

  validateRedirectionToTheFacebookPage() {
    cy.origin("https://www.facebook.com/saucelabs", () => {
      cy.url().should("include", "/saucelabs");
    });
  }

  clickLinkedinIcon() {
    cy.get(linkedinLink).invoke("removeAttr", "target").click();
  }

  validateRedirectionToTheLinkedinPage() {
    cy.origin("https://www.linkedin.com/company/sauce-labs/", () => {
      cy.url().should("include", "/sauce-labs");
    });
  }

  validateInventoryPageUrl() {
    cy.url().should("be.equal", "https://www.saucedemo.com/inventory.html");
  }

  clickOnThePrivacyPolicyLabel() {
    cy.contains("Privacy Policy").click();
  }

  clickOnTheBurgerMenuBtn() {
    cy.get(burgerMenuBtn).click();
  }

  validateDropdownListExpanded() {
    cy.get(burgerMenuItemList).should("be.visible");
  }

  clickLogoutLink() {
    cy.get(logoutLink).click();
  }

  validateLoginPageUrl() {
    cy.url().should("be.equal", "https://www.saucedemo.com/");
  }

  clickAddToCartTShort() {
    cy.get(addToCartTShortEl).click();
  }

  validateThatLoginBtnExist() {
    cy.contains("Login").should("exist");
  }
}

export const inventoryPage = new InventoryPage();
