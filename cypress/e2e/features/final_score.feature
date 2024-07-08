Feature: Finnish exam and see total score
As a student, I want to see the score, so that I can know if I will pass the test

  Scenario: Finnish exam and see total score
    Given the student is on the ISTQB exam page
    When the student clicks in Score button
    Then the student should see his total score "Total score: 0"
