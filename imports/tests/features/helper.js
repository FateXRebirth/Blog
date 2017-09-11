module.exports = function() {  
    'use strict';
  
    this.Before(function() {
        server.execute(function() {
            console.log("Should go here first");
        });
        browser.pause(100);
    });
  
    this.Given(/^I am on the site$/, function () {
      browser.url('http://localhost:3000');
    });
};
  