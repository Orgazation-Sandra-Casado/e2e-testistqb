Feature: welcome the student

    As student, I want to see a welcome message with my name, so that I can have a personalized exam

Scenario: Enter a name with less than 10 characters
    Given the student is on the ISTQB exam page
    When the student enters the name "Sandra" 
    And press start button
    Then the student should see the message "Hi Sandra, welcome to the test!"


Scenario: Enter an empty name
    Given the student is on the ISTQB exam page
    When the student leave empty the name
    Then the student should see the error message "The name cannot be empty"