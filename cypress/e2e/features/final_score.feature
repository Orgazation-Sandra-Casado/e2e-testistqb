Feature: Finnish exam and see total score
As a student, I want to see the score, so that I can know if I will pass the test

  Scenario: Finnish exam and see total score
    Given the student is on the ISTQB exam page
    When the student select on question "1" the answer "C"
    And the student select on question "2" the answer "C"
    And the student select on question "3" the answer "empty"
    And the student select on question "4" the answer "B"
    And the student select on question "5" the answer "B"
    And the student select on question "6" the answer "C"
    And the student select on question "7" the answer "empty"
    And the student select on question "8" the answer "C"
    And the student select on question "9" the answer "B"
    And the student select on question "10" the answer "C"
    And the student clicks on Score button
    Then the student should see his total score "Total score: 10"
