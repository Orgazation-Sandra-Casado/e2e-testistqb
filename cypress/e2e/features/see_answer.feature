Feature: See answer

As student, I want to see the correct answer to the question, so that I can learn more about testing

Scenario: See the answer to the question
Given the student is on the ISTQB exam page
And there is a question with answer "A"
When he clicks on the button "See answer"
Then he should see a message "The correct answer is A"
