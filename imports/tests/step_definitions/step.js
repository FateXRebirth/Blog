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

    this.Then(/^"([^"]*)" should not be on the page$/, function(arg) {
        let element = '.' + arg;
        expect(browser.isVisible(element)).toBe(false);
        expect(browser.isExisting(element)).toBe(false);
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
            case "save":
                btn = "#save";
                break;
            case "create":
                btn = "#addPost";
                break;
            case "edit":
                btn = "#editPost";
                break;
            case "delete":
                btn = "#deletePost";
                break;
            default:
                btn = "#" + arg1;
                break;
        }
        expect(browser.isVisible(btn)).toBe(true);
        expect(browser.isExisting(btn)).toBe(true);
    });

    this.Then(/^I should not see "([^"]*)" button$/, function (arg1) {
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
            case "save":
                btn = "#save";
                break;
            case "create":
                btn = "#addPost";
                break;
            case "edit":
                btn = "#editPost";
                break;
            case "delete":
                btn = "#deletePost";
                break;
            default:
                btn = "#" + arg1;
                break;
        }
        expect(browser.isVisible(btn)).toBe(false);
        expect(browser.isExisting(btn)).toBe(false);
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
            case "save":
                btn = "#save";
                break;
            case "create":
                btn = "#addPost";
                break;
            case "edit":
                btn = "#editPost";
                break;
            case "delete":
                btn = "#deletePost";
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

    this.Then(/^"([^"]*)" element's "([^"]*)" should be "([^"]*)"$/, function(arg1, arg2, arg3) {
        expect(browser.getAttribute("#"+ arg1, arg2)).toBe(arg3);
    })

    this.Then(/^I should see "([^"]*)" message under "([^"]*)" form$/, function(arg1, arg2) {
        var element = browser.element('.'+ arg2 + '.error');
        expect(element.getText().indexOf(arg1)).not.toBe(-1);
    })

    this.Then(/^I should see following messages under "([^"]*)" form:$/, function (arg1, table) {
        // Write code here that turns the phrase above into concrete actions
        var element = browser.element('.'+ arg1 + '.error').getText();   
        var exist = -1;
        table.hashes().forEach( (row) => {
            if(element.indexOf(row.Message) !== -1) {
                exist = 1;
            }
        })
        expect(exist).not.toBe(-1);
    });

    this.Then(/^post "([^"]*)" "([^"]*)" should be in posts$/, function (arg1, arg2) {
        // Write code here that turns the phrase above into concrete actions
        let title = arg1;
        let outline = arg2;
    });
    
};