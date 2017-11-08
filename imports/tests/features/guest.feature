Feature: Blog   

    As a guest to the site,
    so that I can visit this site,
    and I can register,
    but I can't visit blog/dashboard page

@watch
Scenario: Visit the site
    When I visit "index" page
    Then "App" should be on the page
    Then I should be on the "index" page
    Then I should see "Log In" button
    Then I should see "Sign Up" button

@watch
Scenario: Register
    When I press "Sign Up" button
    Then "registerPage" should be on the page
    Then I should be on the "register" page
    Then I should see "register" button

@TODO
Scenario: Register with new User?

@watch
Scenario: Register with empty
    When I press "register" button
    Then I should see following messages on the page:
    | Message |
    | Please enter your username |
    | Please enter your e-mail |
    | Please enter a valid e-mail |
    | Please enter your password |
    | Your password must be at least 6 characters |
    | Please enter the confirmation |
    | The confirmation must be at least 6 characters |
    
@watch
Scenario: Register with existing User
    When I fill in "username" with "admin"
    And I fill in "email" with "admin@admin.com"
    And I fill in "password" with "123456"
    And I fill in "confirmation" with "123456"
    And I press "register" button
    Then I should be on the "register" page
    Then I should see "Email exist" message on the page

@watch
Scenario: Register with different password
    When I fill in "username" with "admin"
    And I fill in "email" with "admin@admin.com"
    And I fill in "password" with "123456"
    And I fill in "confirmation" with "1234567"
    Then I should be on the "register" page
    And I press "register" button
    Then I should see "Password and confirmation should be same" message on the page

@watch
Scenario: Visit blog page
    Then I visit "blog" page
    Then I should be on the "login" page

@watch
Scenario: Visit dashboard page
    Then I visit "dashboard" page
    Then I should be on the "login" page

@watch
Scenario: Visit wrong page
    Then I visit "error" page
    Then I should be on the "notFound" page

@Example
Scenario: The persisted messages are displayed
  Given there are the following messages:
    | Message     | Username | Time     | User ID |
    | Hi everyone | Person1  | 08:00:00 | 1       |
    | Hi          | Person2  | 07:00:00 | 2       |