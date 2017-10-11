Feature: Blog   

    As a user to the site,
    and I can log in.
    so that I can edit my profile,
    and I can add/remove/edit posts.

@watch
Scenario: Visit the site
    Given I am on the site

@watch
Scenario: Log in
    When I click "Log In" button
    Then I should on the "login" page
    
@watch
Scenario: Login as Admin
    When I login as Admin
    Then I should on the "blog" page
    And I can see "Dashboard" button
    And I can see "Log Out" button

@watch
Scenario: Log out
    When I click "Log Out" button
    Given I am on the site