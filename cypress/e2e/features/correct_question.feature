Feature: Correct question
As student, I want to be able to have a correction button, so that I want to know if the chosen answer is correct

  Scenario: Select a valid answer
    Given the student is on the ISTQB exam page
    When the student chooses a correct answer
    Then the program will show that the answer is correct "Correct! Your score +2"

  Scenario: Select an invalid answer
    Given the student is on the ISTQB exam page
    When the student chooses an incorrect answer
    Then the program will show that the answer is correct "Wrong! -1"

  Scenario: Select an empty answer
    Given the student is on the ISTQB exam page
    When the student chooses an empty answer
    Then the program will show that the answer is correct "Your score 0"
