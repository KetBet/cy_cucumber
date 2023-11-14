Feature: Inventory Page

Background:
Given User is located on the login page
And User is logged in

Scenario: Check adding product to the cart 
When User clicks on the Add to cart button on the Sauce Labs Backpack product
Then Confirm that the number near the cart icon at the top right corner is changed to 1

Scenario: Check sorting products
When User clicks on the Price low to high sorting dropdown link
Then Verify that the Price low to high input is displayed at the sorting dropdown field

Scenario: Check navigation to the company's Twitter page
When User clicks on the Twitter icon at the footer 
Then User is redirected to the company's Twitter page

Scenario: Check navigation to the company's Facebook page
When User clicks on the Facebook icon at the footer 
Then User is redirected to the company's Facebook page

Scenario: Check navigation to the company's Linkedin page
When User clicks on the Linkedin icon at the footer 
Then User is redirected to the company's Linkedin page

Scenario: Continue shoping redirection from the cart
When User clicks on the Cart icon at the top right corner
And Verify that the user is on the cart page
And User clicks on the Continue Shopping button
Then Confirm that user is redirected to the inventory page 

Scenario: Check Privacy Policy invalid redirection
When User clicks on the Privacy Policy label at the footer
Then Confirm that user is still on the inventory page 

Scenario: Check success logout
When User clicks on the burger menu on the top left corner of the page
And Check that expanded dropdown list is displayed
And User clicks on the Logout link
Then Verify that user is redirected to the login page

Scenario: Check saving the cart after logout
When User clicks on the Add to cart button near Sauce Labs Bolt T-Shirt product
And Check that number near the cart icon is changed to 1
And User clicks on the burger menu
And Check that expanded dropdown list is shown
And User press the Logout button
And Check that the Login button is displayed
And User loggs to the account using the same valid login and password
And Verify that the user is redirected to the inventory page
And User open the cart link
Then Confirm that Sauce Labs Bolt T-Shirt product is added to the cart

