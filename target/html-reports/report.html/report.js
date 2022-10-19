$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/features/BDDFramework.feature");
formatter.feature({
  "line": 1,
  "name": "Techfios bank and cash New Account Functionality",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "User should be able to login with valid credentials and open a new account",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials-and-open-a-new-account",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User is on the techfios login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters the username as \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters the password as \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User clicks on login",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User should land on Dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User clicks on bankcash",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User clicks on newaccount",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User enters accountTitle as \"\u003caccountTitle\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User enters description as \"\u003cdescription\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User enters initialBalance as \"\u003cinitialBalance\u003e\"in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User enters accountNumber as \"\u003caccountNumber\u003e\" in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User enters contactPerson as \"\u003ccontactPerson\u003e\" in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User enters Phone as \"\u003cPhone\u003e\"in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User enters internetBankingURL as\"\u003cinternetBankingURL\u003e\" in accounts page",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User clicks on submit",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User should be able to validate account created successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials-and-open-a-new-account;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "accountTitle",
        "description",
        "initialBalance",
        "accountNumber",
        "contactPerson",
        "Phone",
        "internetBankingURL"
      ],
      "line": 23,
      "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials-and-open-a-new-account;;1"
    },
    {
      "cells": [
        "demo@techfios.com",
        "abc123",
        "Techfios2",
        "Banking mobile2",
        "5900",
        "535548624588",
        "salim ahmed2",
        "8635588877524",
        "NONE"
      ],
      "line": 24,
      "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials-and-open-a-new-account;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 24,
  "name": "User should be able to login with valid credentials and open a new account",
  "description": "",
  "id": "techfios-bank-and-cash-new-account-functionality;user-should-be-able-to-login-with-valid-credentials-and-open-a-new-account;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User is on the techfios login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters the username as \"demo@techfios.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters the password as \"abc123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User clicks on login",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User should land on Dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User clicks on bankcash",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User clicks on newaccount",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User enters accountTitle as \"Techfios2\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User enters description as \"Banking mobile2\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User enters initialBalance as \"5900\"in accounts page",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User enters accountNumber as \"535548624588\" in accounts page",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User enters contactPerson as \"salim ahmed2\" in accounts page",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User enters Phone as \"8635588877524\"in accounts page",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User enters internetBankingURL as\"NONE\" in accounts page",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User clicks on submit",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User should be able to validate account created successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "FeaturesSteps.user_is_on_the_techfios_login_page()"
});
formatter.result({
  "duration": 5412745000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 29
    }
  ],
  "location": "FeaturesSteps.user_enters_the_username_as(String)"
});
formatter.result({
  "duration": 3128584000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 29
    }
  ],
  "location": "FeaturesSteps.user_enters_the_password_as(String)"
});
formatter.result({
  "duration": 3079016100,
  "status": "passed"
});
formatter.match({
  "location": "FeaturesSteps.user_clicks_on_login()"
});
formatter.result({
  "duration": 22959594000,
  "status": "passed"
});
formatter.match({
  "location": "FeaturesSteps.user_should_land_on_Dashboard_page()"
});
formatter.result({
  "duration": 6533000,
  "status": "passed"
});
formatter.match({
  "location": "FeaturesSteps.user_clicks_on_bankcash()"
});
formatter.result({
  "duration": 3070083400,
  "status": "passed"
});
formatter.match({
  "location": "FeaturesSteps.user_clicks_on_newaccount()"
});
formatter.result({
  "duration": 3417536400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Techfios2",
      "offset": 29
    }
  ],
  "location": "FeaturesSteps.user_enters_accountTitle_as(String)"
});
formatter.result({
  "duration": 3083736700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Banking mobile2",
      "offset": 28
    }
  ],
  "location": "FeaturesSteps.user_enters_description_as(String)"
});
formatter.result({
  "duration": 3092252400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5900",
      "offset": 31
    }
  ],
  "location": "FeaturesSteps.user_enters_initialBalance_as_in_accounts_page(String)"
});
formatter.result({
  "duration": 3084646900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "535548624588",
      "offset": 30
    }
  ],
  "location": "FeaturesSteps.user_enters_accountNumber_as_in_accounts_page(String)"
});
formatter.result({
  "duration": 3097989900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "salim ahmed2",
      "offset": 30
    }
  ],
  "location": "FeaturesSteps.user_enters_contactPerson_as_in_accounts_page(String)"
});
formatter.result({
  "duration": 3091459600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8635588877524",
      "offset": 22
    }
  ],
  "location": "FeaturesSteps.user_enters_Phone_as_in_accounts_page(String)"
});
formatter.result({
  "duration": 3088035200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NONE",
      "offset": 34
    }
  ],
  "location": "FeaturesSteps.user_enters_internetBankingURL_as_in_accounts_page(String)"
});
formatter.result({
  "duration": 3067355900,
  "status": "passed"
});
formatter.match({
  "location": "FeaturesSteps.user_clicks_on_submit()"
});
formatter.result({
  "duration": 3659126300,
  "status": "passed"
});
formatter.match({
  "location": "FeaturesSteps.user_should_be_able_to_validate_account_created_successfully()"
});
formatter.result({
  "duration": 4617600,
  "status": "passed"
});
});