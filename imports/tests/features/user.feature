Feature: Blog   

    As a user to the site,
    and I can log in/log out 
    so that I can edit my profile,
    and I can add/remove/edit posts.

@watch
Scenario: Visit the site
    When I visit "index" page
    Then "App" should be on the page
    Then I should be on the "index" page
    Then I should see "Log In" button
    Then I should see "Sign Up" button

@watch
Scenario: Redirect
    When I press "Log In" button
    Then I should be on the "login" page
    Then "loginPage" should be on the page
    Then I should see "login" button
    Then I should see "redirect" button
    When I press "redirect" button
    Then I should be on the "register" page

@watch
Scenario: Log in
    When I press "Log In" button
    Then I should be on the "login" page
    Then "loginPage" should be on the page
    Then I should see "login" button

@watch
Scenario: Log in with empty
    When I press "login" button
    Then I should see following messages on the page:
    | Message |
    | Please enter your e-mail |
    | Please enter a valid e-mail |
    | Please enter your password |
    | Your password must be at least 6 characters |

@watch
Scenario: Log in with wrong email
    When I fill in "email" with "admin@example.com"
    And I fill in "password" with "123456"
    When I press "login" button
    Then I should be on the "login" page
    Then I should see "Email does not exist" message on the page

@watch
Scenario: Log in with wrong password
    When I fill in "email" with "admin@admin.com"
    And I fill in "password" with "1234567"
    When I press "login" button
    Then I should be on the "login" page
    Then I should see "Password is wrong" message on the page

@watch
Scenario: Register with existing User
    When I fill in "email" with "admin@admin.com"
    And I fill in "password" with "123456"
    When I press "login" button
    Then I should be on the "blog" page

@
Scenario: Dashboard page
    When I click "Dashboard" button
    Then I should on the "dashboard" page
    Then "user" should on the page
    Then "post" should on the page
    Then "posts" should on the page

Scenario: Log out
    When I click "Log Out" button
    Then "App" should on the page
    Then I should on the "index" page

@
Scenario: Visit wrong page
    Then I visit "error" page
    Then I should on the "notFound" page