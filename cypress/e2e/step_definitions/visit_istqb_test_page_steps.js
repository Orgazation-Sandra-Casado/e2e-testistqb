import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";

  Given("the student visit istqb test page", () => {
    cy.visit('/');

  });