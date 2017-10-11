module.exports = function() {  
    'use strict';

    this.Given(/^I am on the site$/, function () {
        // browser.waitForExist('body *');
        // browser.waitForVisible('body *');
        browser.url('http://localhost:3000');
        expect(browser.getTitle()).toBe('Blog | Modern, Flexible and Customize');
        expect(browser.getUrl()).toEqual('http://localhost:3000/');
    });

    this.When(/^I click "([^"]*)" button$/, function(arg) {
        if(arg == 'Log In') {
            browser.click('#login');
        } else if(arg == 'Sign Up') {
            browser.click('#register');
        } else if(arg == 'Log Out') {
            browser.click('#logout');
        }
    });

    this.Then(/^I should on the "([^"]*)" page$/, function (arg) {
        // Write code here that turns the phrase above into concrete actions
        expect(browser.getUrl()).toEqual('http://localhost:3000/'+ arg);
    });

    this.When(/^I login as Admin$/, function () {
        // Write code here that turns the phrase above into concrete actions
        browser.setValue('#login-email', "admin@admin.com");
        browser.setValue('#login-password', "123456");
        browser.click('#login-button');
    });

    this.When(/^I can see "([^"]*)" button$/, function (arg1) {
        // Write code here that turns the phrase above into concrete actions
        let btn = null;
        switch(arg1) {
            case "Log In":
                btn = "#login";
                break;
            case "Sign Up":
                btn = "#register";
                break;
            case "Log Out":
                btn = "#logout";
                break;
            case "Dashboard":
                btn = "#dashboard";
                break;
        }
        expect(browser.isVisible(btn)).toBe(true);
        expect(browser.isExisting(btn)).toBe(true);
    });
    
};