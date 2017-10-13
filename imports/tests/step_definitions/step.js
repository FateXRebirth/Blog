module.exports = function() {  
    'use strict';

    this.Then(/^I am on the site$/, function () {
        // browser.waitForExist('body *');
        // browser.waitForVisible('body *');
        browser.url('http://localhost:3000');
        expect(browser.getTitle()).toBe('Blog | Modern, Flexible and Customize');
        expect(browser.getUrl()).toEqual('http://localhost:3000/');
    });

    this.When(/^I click "([^"]*)" button$/, function(arg) {
        let btn = null;
        switch(arg) {
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
        browser.click(btn);
    });

    this.Then(/^I should on the "([^"]*)" page$/, function (arg) {
        // Write code here that turns the phrase above into concrete actions
        expect(browser.getUrl()).toEqual('http://localhost:3000/'+ arg);
    });

    this.Then(/^"([^"]*)" should on the page$/, function(arg) {
        // Write code here that turns the phrase above into concrete actions
        let element = '.' + arg;
        expect(browser.isVisible(element)).toBe(true);
        expect(browser.isExisting(element)).toBe(true);
    });

    this.When(/^I login as Admin$/, function () {
        // Write code here that turns the phrase above into concrete actions
        browser.setValue('#login-email', "admin@admin.com");
        browser.setValue('#login-password', "123456");
        browser.click('#login-button');
    });

    this.When(/^I register as Admin$/, function () {
        // Write code here that turns the phrase above into concrete actions
        return 'pending';
    });

    this.Then(/^I can see "([^"]*)" button$/, function (arg1) {
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
            case "login":
                btn = "#login-button"
                break;
        }
        expect(browser.isVisible(btn)).toBe(true);
        expect(browser.isExisting(btn)).toBe(true);
    });

    this.Then(/^I should see error message on page$/, function () {
        // Write code here that turns the phrase above into concrete actions
        return 'pending';
    });

    this.Given(/^there are the following messages:$/, function (table) {
        // Write code here that turns the phrase above into concrete actions
        table.hashes().forEach( (row) => {
            // console.log(row.Message);
        })
    });
    
};