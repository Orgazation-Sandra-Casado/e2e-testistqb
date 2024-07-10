Feature: Correct question
As student, I want to be able to have a correction button, so that I want to know if the chosen answer is correct

  Scenario Outline: Correct a question
    Given the student is on the ISTQB exam page
    When the student select answer <selectedAnswer> on question <questionNumber>
    And the student clicks on Correct button on question <questionNumber>
    Then the user should see the message <expectedMessage> on question <questionNumber>

    Examples:
      | questionNumber | selectedAnswer | expectedMessage          |
      | "1"            | "C"            | "Correct! Your score +2" |
      | "1"            | "A"            | "Wrong! -1"              |
      | "1"            | "B"            | "Wrong! -1"              |
      | "1"            | "------"       | "Your score 0"           |
