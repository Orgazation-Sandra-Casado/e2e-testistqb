import {
    Given,
    When,
    Then,
} from "@badeball/cypress-cucumber-preprocessor";

When('the student clicks in Score button', () => {
    cy.get('[data-cy="button-see-score"]').click();
})
Then('the student should see his total score {string}', (score) => {
    cy.get('[data-cy="seeScore"]').should('have.text', score);
})

