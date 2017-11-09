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

    this.Then(/^I should be on the "([^"]*)" page$/, function (arg) {
        let url = null;
        if(arg == 'index') {
            url = "http://localhost:3000/";
        } else {
            url = "http://localhost:3000/" + arg;
        }
        expect(browser.getTitle()).toBe('Blog | Modern, Flexible and Customize');
        expect(browser.getUrl()).toEqual(url);
    });

    this.Then(/^"([^"]*)" should be on the page$/, function(arg) {
        let element = '.' + arg;
        expect(browser.isVisible(element)).toBe(true);
        expect(browser.isExisting(element)).toBe(true);
    });

    this.Then(/^I should see "([^"]*)" button$/, function (arg1) {
        let btn = null;
        switch(arg1) {
            case "Log In":
                btn = "#log-in";
                break;
            case "Sign Up":
                btn = "#sign-up";
                break;
            case "Log Out":
                btn = "#log-out";
                break;
            case "Dashboard":
                btn = "#dashboard";
                break;
            case "login":
                btn = "#login";
                break;
            case "register":
                btn = "#register";
                break;
            default:
                btn = "#" + arg1;
                break;
        }
        expect(browser.isVisible(btn)).toBe(true);
        expect(browser.isExisting(btn)).toBe(true);
    });

    this.When(/^I press "([^"]*)" button$/, function(arg1) {
        let btn = null;
        switch(arg1) {
            case "Log In":
                btn = "#log-in";
                break;
            case "Sign Up":
                btn = "#sign-up";
                break;
            case "Log Out":
                btn = "#log-out";
                break;
            case "Dashboard":
                btn = "#dashboard";
                break;
            case "login":
                btn = "#login";
                break;
            case "register":
                btn = "#register";
                break;
            default:
                btn = "#" + arg1;
                break;
        }
        browser.click(btn);
    });

    this.When(/^I fill in "([^"]*)" with "([^"]*)"$/, function (arg1, arg2) {
        // Write code here that turns the phrase above into concrete actions
        let element = "#" + arg1;
        browser.setValue(element, arg2);
    });

    this.Then(/^I should see "([^"]*)" message on the page$/, function(arg) {
        var element = browser.element('#errors');
        // console.log(element.getText());
        // console.log(element.getText().indexOf(arg));
        expect(element.getText().indexOf(arg)).not.toBe(-1);
    })

    // Example
    this.Then(/^I should see following messages on the page:$/, function (table) {
        var element = browser.element('#errors').getText();        
        var exist = -1;
        table.hashes().forEach( (row) => {
            // console.log(row.Message);
            // console.log(element.indexOf(row.Message));
            if(element.indexOf(row.Message) !== -1) {
                exist = 1;
            }
        })
        expect(exist).not.toBe(-1);
    });
    
};