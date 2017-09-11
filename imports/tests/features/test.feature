Feature: Test   

 As a visitor to the site,
 so that I can manage widgets,
 I want to create and delete widgets on my home page.

 Background:
    Given I am on the site

@watch
 Scenario: Visitor creates a widget
    When I name a widget "alpha"
    And submit the form
    Then I should see a list of widget names containing “alpha”