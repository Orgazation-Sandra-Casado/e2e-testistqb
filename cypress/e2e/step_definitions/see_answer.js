import {
    Given,
    When,
    Then,
} from "@badeball/cypress-cucumber-preprocessor";

When("he clicks in See Answer button on question {string}", (questionNumber) => {
    cy.get('[data-cy="button-see-answer-question' + questionNumber + '"]').click();
});

Then("he should see on question {string} the message {string}", (questionId, message) => {
    cy.get('[data-cy="seeAnswer' + questionId + '"]').should('have.text', message);
});

