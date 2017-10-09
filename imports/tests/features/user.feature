Feature: Blog   

    As a user to the site,
    and I can log in.
    so that I can edit my profile,
    and I can add/remove/edit posts.

@watch
Scenario: Visit the site
    Given I am on the site

@watch
Scenario: Register
    Given I am on the site
    When I click "Log In" button
    Then I should on the "login" page