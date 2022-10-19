Feature: Techfios bank and cash New Account Functionality 

Scenario Outline: User should be able to login with valid credentials and open a new account	

Given User is on the techfios login page 
When User enters the username as "<username>" 
When User enters the password as "<password>"
And  User clicks on login
Then User should land on Dashboard page 
And User clicks on bankcash
And User clicks on newaccount
And User enters accountTitle as "<accountTitle>"
And User enters description as "<description>"
And User enters initialBalance as "<initialBalance>"in accounts page 
And User enters accountNumber as "<accountNumber>" in accounts page 
And User enters contactPerson as "<contactPerson>" in accounts page 
And User enters Phone as "<Phone>"in accounts page 
And User enters internetBankingURL as"<internetBankingURL>" in accounts page 
And User clicks on submit
Then User should be able to validate account created successfully

	Examples: 
|username|password|accountTitle|description|initialBalance|accountNumber|contactPerson|Phone|internetBankingURL|
|demo@techfios.com|abc123|Techfios3|Banking mobile3|5500|53554886247898|salim ahmed3|8658788877524|NONE|