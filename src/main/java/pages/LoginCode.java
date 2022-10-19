package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class LoginCode {
	WebDriver driver;

	public LoginCode(WebDriver driver) {
		this.driver = driver;
	}

	@FindBy(how = How.XPATH, using = "//input[@id='username']")
	WebElement UserName;
	@FindBy(how = How.XPATH, using = "//input[@id='password']")
	WebElement PassWord;
	@FindBy(how = How.XPATH, using = "//button[normalize-space()='Sign in']")
	WebElement Login;
	@FindBy(how = How.XPATH, using = "//div[@class=\"sidebar-collapse\"]/descendant::li[31]")
	WebElement BankandCash;
	@FindBy(how = How.XPATH, using = "//a[normalize-space()='New Account']")
	WebElement NewAccount;
	@FindBy(how = How.XPATH, using = "//input[@id='account']")
	WebElement AccountTitle;
	@FindBy(how = How.XPATH, using = "//input[@id='description']")
	WebElement Description;
	@FindBy(how = How.XPATH, using = "//input[@id='balance']")
	WebElement InitialBalance;
	@FindBy(how = How.XPATH, using = "//input[@id='account_number']")
	WebElement AccountNumber;
	@FindBy(how = How.XPATH, using = "//input[@id='contact_person']")
	WebElement ContactPerson;
	@FindBy(how = How.XPATH, using = "//input[@id='contact_phone']")
	WebElement Phone;
	@FindBy(how = How.XPATH, using = "//input[@id='ib_url']")
	WebElement InternetBankingURL;
	@FindBy(how = How.XPATH, using = "//button[normalize-space()='Submit']")
	WebElement Submit;

	public void Enterusername(String Username) {
		UserName.sendKeys(Username);
		try {
			Thread.sleep(3000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}

	}

	public void Enterpassword(String Password) {
		PassWord.sendKeys(Password);
		try {
			Thread.sleep(3000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}

	public void LoginButton() {
		Login.click();
		try {
			Thread.sleep(3000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}

	}
	public void BankandCash() {
		BankandCash.click();
		try {
			Thread.sleep(3000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
		
}
	public void NewAccount() {
		NewAccount.click();
		try {
			Thread.sleep(3000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}
	public void AccountTitle(String accounttitle) {
		AccountTitle.sendKeys(accounttitle);
		try {
			Thread.sleep(3000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}
	public void Description(String description) {
		Description.sendKeys(description);
		try {
			Thread.sleep(3000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}
	public void InitialBalance(String initialbalance) {
		InitialBalance.sendKeys(initialbalance);
		try {
			Thread.sleep(3000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}
	public void AccountNumber(String accountnumber) {
		AccountNumber.sendKeys(accountnumber);
		try {
			Thread.sleep(3000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
}
	public void ContactPerson(String contactperson) {
		ContactPerson.sendKeys(contactperson);
		try {
			Thread.sleep(3000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}
	public void Phone(String phone) {
		Phone.sendKeys(phone);
		try {
			Thread.sleep(3000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}
	public void InternetBankingURL(String InternetbankingURL) {
		InternetBankingURL.sendKeys(InternetbankingURL);
		try {
			Thread.sleep(3000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}
	public void Submit() {
		Submit.click();
		try {
			Thread.sleep(3000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}
	
}
