Feature: Blog   

    As a user to the site,
    and I can log in/log out 
    so that I can edit my profile,
    and I can add/remove/edit posts.

@watch
Scenario: Visit the site
    Then I am on the site
    Then "App" should on the page
    And I can see "Log In" button
    And I can see "Sign Up" button

@watch
Scenario: Log in
    When I click "Log In" button
    Then I should on the "login" page
    Then "loginPage" should on the page
    Then I can see "login" button
    
@watch
Scenario: Login as Admin
    When I login as Admin
    Then I should on the "blog" page
    And I can see "Dashboard" button
    And I can see "Log Out" button

@watch
Scenario: Log out
    When I click "Log Out" button
    Then "App" should on the page
    And I am on the site