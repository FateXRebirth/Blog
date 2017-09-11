module.exports = function() {  
    'use strict';
   
    this.Given(/^I am on the site$/, function () {
        // Write the automation code here
        pending();
        browser.url('http://localhost:3000');
    });
   
    this.When(/^I name a widget "([^"]*)"$/, function (arg1) {
        // Write the automation code here
        pending();
        // browser.setValue('input[name="widgetName"]', arg1);
    });
   
    this.When(/^submit the form$/, function () {
        // Write the automation code here
        pending();
        // browser.click('input[type="submit"]');
    });
   
    this.Then(/^I should see a list of widget names containing "([^"]*)"$/, function (arg1) {
         // Write the automation code here
        pending();
        // let _el = '.widget-name';
        // browser.waitForVisible(_el);
        // expect(browser.getText(_el)).toEqual(arg1);
    });

    this.Then(/^I should see a list of widget names containing “alpha”$/, function () {
        // Write code here that turns the phrase above into concrete actions
        return 'pending';
    });
};