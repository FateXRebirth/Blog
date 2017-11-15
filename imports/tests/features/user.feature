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
    Then I should not see "Log Out" button
    Then I should not see "Dashboard" button

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
    Then I should see following messages under "login" form:
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
    Then I should see "Email does not exist" message under "login" form

@watch
Scenario: Log in with wrong password
    When I fill in "email" with "admin@admin.com"
    And I fill in "password" with "1234567"
    When I press "login" button
    Then I should be on the "login" page
    Then I should see "Password is wrong" message under "login" form

@watch
Scenario: Log in with existing User
    When I fill in "email" with "admin@admin.com"
    And I fill in "password" with "123456"
    When I press "login" button
    Then I should be on the "blog" page
    Then I should see "Dashboard" button
    Then I should see "Log Out" button

@watch
Scenario: Dashboard page
    When I press "Dashboard" button
    Then I should be on the "dashboard" page
    Then "user" should be on the page
    Then "post" should be on the page
    Then "posts" should be on the page

@watch
Scenario: Edit profile with empty
    When I press "save" button
    Then I should see following messages under "changeUser" form:
    | Message |
    | Please enter your username |
    | Please enter your password|
    | Your password must be at least 6 characters |
    | Please enter the confirmation |
    | Your password must be at least 6 characters |

@watch
Scenario: Edit profile with wrong password
    When I fill in "username" with "admin"
    And I fill in "password" with "123456"
    And I fill in "confirmation" with "1234567"
    And I press "save" button
    Then I should be on the "dashboard" page
    Then I should see "Password and confirmation should be same" message under "changeUser" form

@watch
Scenario: Edit profile with new username
    When I fill in "username" with "admin1"
    And I fill in "password" with "123456"
    And I fill in "confirmation" with "123456"
    And I press "save" button
    Then I should be on the "dashboard" page
    Then "username" element's "placeholder" should be "admin1"

@watch
Scenario: Edit profile with origin data
    When I fill in "username" with "admin"
    And I fill in "password" with "123456"
    And I fill in "confirmation" with "123456"
    And I press "save" button
    Then I should be on the "dashboard" page
    Then "username" element's "placeholder" should be "admin"

@watch
Scenario: Add post with empty
    When I press "create" button
    Then I should see following messages under "addPost" form:
    | Message |
    | Please enter title |
    | Please enter a outline |
    | Please enter content |
    
@watch
Scenario: Add post with new
    When I fill in "title" with "Title"
    And I fill in "outline" with "Outline"
    And I fill in "content" with "Content"
    And I press "create" button
    Then I should be on the "dashboard" page
    Then post "Title" "Outline" should be in posts

@watch
Scenario: Edit post that we create
    When I edit the post with title "Title" and outline "Outline"
    Then "editpostPage" should be on the page
    Then I should be on the "edit" page
    Then I should see "edit" button
    Then I should see "cancel" button
    And I fill in "title" with "Title2"
    And I fill in "outline" with "Outline2"
    And I fill in "content" with "Content2"
    And I press "edit" button
    Then I should be on the "dashboard" page
    Then post "Title" "Outline" should not be in posts
    Then post "Title2" "Outline2" should be in posts

@watch
Scenario: Edit post that we create but cancel
    When I edit the post with title "Title2" and outline "Outline2"
    Then "editpostPage" should be on the page
    Then I should be on the "edit" page
    Then I should see "edit" button
    Then I should see "cancel" button
    And I press "cancel" button
    Then I should be on the "dashboard" page
    Then post "Title2" "Outline2" should be in posts

@watch
Scenario: Edit post with origin data
    When I edit the post with title "Title2" and outline "Outline2"
    Then "editpostPage" should be on the page
    Then I should be on the "edit" page
    Then I should see "edit" button
    Then I should see "cancel" button
    And I fill in "title" with "Title"
    And I fill in "outline" with "Outline"
    And I fill in "content" with "Content"
    And I press "edit" button
    Then I should be on the "dashboard" page
    Then post "Title2" "Outline2" should not be in posts
    Then post "Title" "Outline" should be in posts

@watch
Scenario: Delete post that we create but cancel
    When I delete the post with title "Title" and outline "Outline"
    Then "deletepostPage" should be on the page
    Then I should be on the "delete" page
    Then I should see "delete" button
    Then I should see "cancel" button
    And I press "cancel" button
    Then I should be on the "dashboard" page
    Then post "Title" "Outline" should be in posts

@watch
Scenario: Delete post that we create
    When I delete the post with title "Title" and outline "Outline"
    Then "deletepostPage" should be on the page
    Then I should be on the "delete" page
    Then I should see "delete" button
    Then I should see "cancel" button
    And I press "delete" button
    Then I should be on the "dashboard" page
    Then post "Title" "Outline" should not be in posts

@watch
Scenario: Log out
    When I press "Log Out" button
    Then I should be on the "index" page
    Then I should not see "Log Out" button
    When I press "Log In" button
    Then I should be on the "login" page
    When I press "Sign Up" button
    Then I should be on the "register" page

@watch
Scenario: Visit wrong page
    Then I visit "error" page
    Then I should be on the "notFound" page
    Then I visit "index" page