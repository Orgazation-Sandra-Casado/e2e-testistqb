import {
    Given,
    When,
    Then,
} from "@badeball/cypress-cucumber-preprocessor";

When("the student enters the name {string}", (name) => {
    cy.get('[data-cy="input-name-welcome"]').clear();
    cy.get('[data-cy="input-name-welcome"]').type(name);
});

When("press start button", () => {
    cy.get('[data-cy="button-start"]').click();
});

Then("the student should see the message {string}", (welcomeMessage) => {
    cy.get('[data-cy="welcome-message"]').should('have.text', welcomeMessage);
});

When("the student leave empty the name", () => {
    cy.get('[data-cy="button-start"]').click();
});

Then("the student should see the error message {string}", (errorMessage) => {
    cy.get('[data-cy="welcome-message"]').should('have.text', errorMessage);
});


