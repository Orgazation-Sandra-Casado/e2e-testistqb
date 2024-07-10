import {
    Given,
    When,
    Then,
} from "@badeball/cypress-cucumber-preprocessor";

When('the student select on question {string} the answer {string}', (questionNumber, selectedAnswer) => {
    cy.get('[data-cy="question' + questionNumber + '"]').select(selectedAnswer);
})

When('the student clicks on Score button', (s) => {
    cy.get('[data-cy="button-see-score"]').click();
})
Then('the student should see his total score {string}', (score) => {
    cy.get('[data-cy="seeScore"]').should('have.text', score);
})


