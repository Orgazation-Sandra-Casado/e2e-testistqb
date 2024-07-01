Feature: See answer

As student, I want to see the correct answer to the question, so that I can learn more about testing

Scenario: See the answer to the question
    Given the student is on the ISTQB exam page
    When he clicks in See Answer button on question "1"
    Then he should see on question "1" the message "The correct answer is C"