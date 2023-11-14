Feature: Login Page

Background:
Given User is on the login page

Scenario: Valid Login
When User enter valid username into Username field
And User enter valid password into Password field
And User clicks on the Login button
Then User is redirected to the inventory page

Scenario: Login with invalid Username
When User enter valid password
And User press the Login button
Then The Epic sadface: Username is required error message is displayed

Scenario: Login with invalid Password
When User enter valid username into the Username field
And User enter invalid password into Password field
And User completes the log in by clicking Login button
Then The Epic sadface: Username and password do not match any user in this service error message is displayed
