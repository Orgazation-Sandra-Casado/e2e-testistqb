Feature: Visit Istqb Test page

    As a student, I want to visit istqb test page, so I can practice for my exam

Scenario: Visit istqb test page
    Given the student visit istqb test page
    When the student clic on welcome menu
    Then the istqb test page url should include welcome
    And the istqb test page title should equal to ISTQB ONLINE TEST
    And the istqb menu should have 3 elements
    And the istqb page should have header title ISTQB Online Test