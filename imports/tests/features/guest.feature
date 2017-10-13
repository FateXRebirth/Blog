Feature: Blog   

    As a guest to the site,
    so that I can visit this site,
    and I can register,
    but I can't visit blog/dashboard page

@watch
Scenario: Visit the site
    Then I am on the site


@watch
Scenario: Register
    When I click "Sign Up" button
    Then I should on the "register" page

@watch
Scenario: Register with a existing username
    When I register as Admin
    Then I should see error message on page
    Then I should on the "register" page

@watch
Scenario: The persisted messages are displayed
  Given there are the following messages:
    | Message     | Username | Time     | User ID |
    | Hi everyone | Person1  | 08:00:00 | 1       |
    | Hi          | Person2  | 07:00:00 | 2       |