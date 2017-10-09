Feature: Blog   

    As a guest to the site,
    so that I can visit this site,
    and I can register.

@watch
Scenario: Visit the site
    Given I am on the site

@watch
Scenario: Register
    Given I am on the site
    When I click "Sign Up" button
    Then I should on the "register" page