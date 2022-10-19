package runners;


import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src\\test\\java\\features\\BDDFramework.feature",
		glue = "steps",
		monochrome = true,
		
		plugin = {
				"pretty",
				"html:target/html-reports/report.html"
		}
		
		)

public class RunnerDefinition {

}
