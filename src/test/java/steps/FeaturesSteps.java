package steps;

import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;
import pages.LoginCode;
import pages.WebdriverDriver;

public class FeaturesSteps extends WebdriverDriver {
	LoginCode logincode;

	@Given("^User is on the techfios login page$")
	public void user_is_on_the_techfios_login_page() {
		init();
		driver.get("https://www.techfios.com/billing/?ng=admin/");

	}

	@When("^User enters the username as \"([^\"]*)\"$")
	public void user_enters_the_username_as(String username) {
		logincode = PageFactory.initElements(driver, LoginCode.class);
		logincode.Enterusername(username);
	}

	@When("^User enters the password as \"([^\"]*)\"$")
	public void user_enters_the_password_as(String password) {
		logincode.Enterpassword(password);

	}

	@When("^User clicks on login$")
	public void user_clicks_on_login() {
		logincode.LoginButton();

	}

	@Then("^User should land on Dashboard page$")
	public void user_should_land_on_Dashboard_page() {
		String ActualTitle = driver.getTitle();
		String expectedTitle = "Dashboard- iBilling";
		
		Assert.assertEquals(expectedTitle, ActualTitle);

	}

	@Then("^User clicks on bankcash$")
	public void user_clicks_on_bankcash() {
		logincode.BankandCash();

	}

	@Then("^User clicks on newaccount$")
	public void user_clicks_on_newaccount() {
		logincode.NewAccount();

	}

	@Then("^User enters accountTitle as \"([^\"]*)\"$")
	public void user_enters_accountTitle_as(String accounttitle) {
		logincode.AccountTitle(accounttitle);

	}

	@Then("^User enters description as \"([^\"]*)\"$")
	public void user_enters_description_as(String description) {
		logincode.Description(description);

	}

	@Then("^User enters initialBalance as \"([^\"]*)\"in accounts page$")
	public void user_enters_initialBalance_as_in_accounts_page(String initialbalance) {
		logincode.InitialBalance(initialbalance);

	}

	@Then("^User enters accountNumber as \"([^\"]*)\" in accounts page$")
	public void user_enters_accountNumber_as_in_accounts_page(String accountnumber) {
		logincode.AccountNumber(accountnumber);

	}

	@Then("^User enters contactPerson as \"([^\"]*)\" in accounts page$")
	public void user_enters_contactPerson_as_in_accounts_page(String contactperson) {
		logincode.ContactPerson(contactperson);

	}

	@Then("^User enters Phone as \"([^\"]*)\"in accounts page$")
	public void user_enters_Phone_as_in_accounts_page(String phone) {
		logincode.Phone(phone);

	}

	@Then("^User enters internetBankingURL as\"([^\"]*)\" in accounts page$")
	public void user_enters_internetBankingURL_as_in_accounts_page(String Initialbalance) {
		logincode.InitialBalance(Initialbalance);

	}

	@Then("^User clicks on submit$")
	public void user_clicks_on_submit() {
		logincode.Submit();

	}

	@Then("^User should be able to validate account created successfully$")
	public void user_should_be_able_to_validate_account_created_successfully() {
		String actualTitle = driver.getTitle();
		String ActualTitle = "Accounts- iBilling";
		Assert.assertEquals(actualTitle, ActualTitle);

	}

}