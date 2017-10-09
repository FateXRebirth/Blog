module.exports = function() {  
    'use strict';

    this.Given(/^I am on the site$/, function () {
        browser.waitForExist('body *');
        browser.waitForVisible('body *');
        browser.url('http://localhost:3000');
        expect(browser.getTitle()).toBe('Blog | Modern, Flexible and Customize');
        expect(browser.getUrl()).toEqual('http://localhost:3000/');
    });

    this.When(/^I click "([^"]*)" button$/, function(arg) {
        let button = null;
        switch(arg) {
            case "Log In":
                button = "#login";
                break;
            case "Sign Up":
                button = "#register";
                break;
        };
        browser.click(button);
    });

    this.Then(/^I should on the "([^"]*)" page$/, function (arg) {
        expect(browser.getUrl()).toEqual('http://localhost:3000/'+ arg);
    });   
    
};