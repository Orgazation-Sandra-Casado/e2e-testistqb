import {
  Given,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";

Given("the student is on the ISTQB exam page", () => {
  cy.visit('/');
  cy.clearCookies();
  cy.reload();

});

When("the student clic on welcome menu", () => {
  cy.get('[data-cy="menu-welcome"]').click();

  cy.contains('Welcome').click();
  cy.get('h2').contains('Welcome', { matchCase: false }).click();

  cy.get('#menu-welcome-id').click();
  cy.get('.nav-link').first().click();
  cy.get('.nav-link').filter('[href="#welcome"]').click();
  cy.get('a').first().click();

});

Then("the istqb test page url should include welcome", () => {
  cy.url().should('includes', '#welcome');
});

Then("the istqb test page title should equal to ISTQB ONLINE TEST", () => {
  cy.title().should('eq', 'ISTQB ONLINE TEST');
});

Then("the istqb menu should have 3 elements", () => {
  cy.get('[data-cy*="menu-"]').should('have.length', 3);
  cy.get('[data-cy*="menu-"]').should('have.length.greaterThan', 2);
  cy.get('[data-cy*="menu-"]').should('have.length.lessThan', 4);
  cy.get('[data-cy*="menu-"]').should('not.have.length', 1);
});

Then("the istqb page should have header title ISTQB Online Test", () => {
  cy.contains('ISTQB Online Test').should('be.visible');
  cy.contains('ISTQB Online Test').should('have.text', 'ISTQB Online Test');
  cy.contains('ISTQB Online Test').should('include.text', 'ISTQB');
  cy.contains('ISTQB Online Test').should('not.contain', 'Bootcamp');
});