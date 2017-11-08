Feature: Blog   

    As a user to the site,
    and I can log in/log out 
    so that I can edit my profile,
    and I can add/remove/edit posts.

@
Scenario: Visit the site
    When I visit "index" page
    Then "App" should on the page
    Then I should on the "index" page
    Then I can see "Log In" button
    Then I can see "Sign Up" button

@
Scenario: Log in
    When I click "Log In" button
    Then I should on the "login" page
    Then "loginPage" should on the page
    Then I can see "login" button
    
@
Scenario: Login as Admin
    When I login as Admin
    Then I should on the "blog" page
    And I can see "Dashboard" button
    And I can see "Log Out" button

@
Scenario: Dashboard page
    When I click "Dashboard" button
    Then I should on the "dashboard" page
    Then "user" should on the page
    Then "post" should on the page
    Then "posts" should on the page

@
Scenario: user profile


@
Scenario: Log out
    When I click "Log Out" button
    Then "App" should on the page
    Then I should on the "index" page

@
Scenario: Visit wrong page
    Then I visit "error" page
    Then I should on the "notFound" page