module.exports = function() {  
    'use strict';

    this.When(/^I visit "([^"]*)" page$/, function(arg) {
        let url = null;
        if(arg == 'index') {
            url = "http://localhost:3000/";
        } else {
            url = "http://localhost:3000/" + arg;
        }
        browser.url(url);
    })

    this.Then(/^I should on the "([^"]*)" page$/, function (arg) {
        let url = null;
        if(arg == 'index') {
            url = "http://localhost:3000/";
        } else {
            url = "http://localhost:3000/" + arg;
        }
        expect(browser.getTitle()).toBe('Blog | Modern, Flexible and Customize');
        expect(browser.getUrl()).toEqual(url);
    });

    this.Then(/^"([^"]*)" should on the page$/, function(arg) {
        let element = '.' + arg;
        expect(browser.isVisible(element)).toBe(true);
        expect(browser.isExisting(element)).toBe(true);
    });

    this.Then(/^I should see "([^"]*)" message on the page$/, function(arg) {
        var element = browser.element('#errors');
        expect(element.getText()).toBe(arg);
    })

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

    this.Then(/^I can see "([^"]*)" button$/, function (arg1) {
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
                btn = "#login-button";
                break;
            case "register":
                btn = "#register-button";
                break;
        }
        expect(browser.isVisible(btn)).toBe(true);
        expect(browser.isExisting(btn)).toBe(true);
    });

    this.When(/^I login as Admin$/, function () {
        browser.setValue('#login-email', "admin@admin.com");
        browser.setValue('#login-password', "123456");
        browser.click('#login-button');
    });

    this.When(/^I register with "([^"]*)"$/, function (arg) {
        if(arg == "Admin") {
            browser.setValue('#register-username', "admin");
            browser.setValue('#register-email', "admin@admin.com");
            browser.setValue('#register-password', "123456");
            browser.setValue('#register-confirmation', "123456");
        } else {
            browser.setValue('#register-username', "test");
            browser.setValue('#register-email', "test@test.com");
            browser.setValue('#register-password', "123456");
            browser.setValue('#register-confirmation', "123456");
        }
        browser.click('#register-button');
    });

    this.Given(/^there are the following messages:$/, function (table) {
        table.hashes().forEach( (row) => {
            // console.log(row.Message);
        })
    });
    
};