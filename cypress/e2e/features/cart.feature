Feature: Cart Page

Background:
Given User is already on the login page
And User is successfully logged in

Scenario: Check removing product from the cart 
When User adds the Sauce Labs Backpack product to the cart
And Verify that the number near the cart icon at the top right corner is changed to 1
And User clicks on the Cart icon
And Verify that the Sauce Labs Backpack product is displayed
And User clicks on the Remove button on the product block
Then Verify that the Sauce Labs Backpack isn't displayed

Scenario: Check valid checkout 
When User clicks on the Add to cart button near Sauce Labs Bike Light product
And Check that number near the cart icon at the top right corner is changed to 1
And User clicks on the Cart button at the top right corner
And Verify that the Sauce Labs Bike Light product is added to the cart
And User clicks on the Checkout button
And Verify that the checkout form is displayed
And User fill the First Name field with valid data
And User fill the Second Name field with valid data
And User fill the Postal Code field with valid data
And User clicks on the Continue button
And Verify that user is redirected to the Overview page
And User clicks on the Finish button
Then Verify that Thank you for your order! message is displayed

Scenario: Check invalid checkout 
When User clicks on the Cart button
And Verify that user is on the cart page
And User press the Checkout button
And Verify that the Checkout: Your Information form is displayed
And User completes the checkaout by clicking on the Continue button
Then Verify that the Error: First Name is required error message is displayed
