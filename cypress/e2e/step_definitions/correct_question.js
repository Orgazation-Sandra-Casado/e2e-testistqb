import {
    Given,
    When,
    Then,
} from "@badeball/cypress-cucumber-preprocessor";

When('the student select answer {string} on question {string}', (selectedAnswer, questionNumber) => {
    cy.get('[data-cy="question' + questionNumber + '"]').select(selectedAnswer);
})

When('the student clicks on Correct button on question {string}', (questionNumber) => {
    cy.get('[data-cy="button-correct-question' + questionNumber + '"]').click();
})

Then('the user should see the message {string} on question {string}', (expectedMessage, questionNumber) => {
    cy.get('[data-cy="questioncorrect' + questionNumber + '"]').should('have.text', expectedMessage);
})









