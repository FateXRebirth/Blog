Feature: Blog   

    As a guest to the site,
    so that I can visit this site,
    and I can register,
    but I can't visit blog/dashboard page

@watch
Scenario: Visit the site
    When I visit "index" page
    Then "App" should on the page
    Then I should on the "index" page
    Then I can see "Log In" button
    Then I can see "Sign Up" button

@watch
Scenario: Register
    When I click "Sign Up" button
    Then I should on the "register" page
    Then I can see "register" button

@watch
Scenario: Register with new User
    

@watch
Scenario: Register with existing User
    When I register with "Admin"
    Then I should on the "register" page
    Then I should see "email exist" message on the page
    
@watch
Scenario: Visit wrong page
    Then I visit "error" page
    Then I should on the "notFound" page

@watch
Scenario: The persisted messages are displayed
  Given there are the following messages:
    | Message     | Username | Time     | User ID |
    | Hi everyone | Person1  | 08:00:00 | 1       |
    | Hi          | Person2  | 07:00:00 | 2       |