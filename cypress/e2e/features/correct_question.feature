Feature: Correct question
As student, I want to be able to have a correction button, so that I want to know if the chosen answer is correct

  Scenario: Select a valid answer
    Given the student is on the ISTQB exam page
    When the student select answer "C" on question "1"
    When the student select answer "A" on question "2"
    And the student clicks on Correct button on question "1"
    Then the user should see the message "Correct! Your score +2" on question "1"
