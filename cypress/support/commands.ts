// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

interface LoginOptions {
  username: string;
  password: string;
}

Cypress.Commands.add("login", (options: LoginOptions) => {
  cy.visit("/");
  cy.get('[data-qa="field-email"]').type(options.username);

  cy.get('[data-qa="field-password"]').type(options.password, {
    log: false,
  });

  cy.get('[data-qa="button-submit"]').click();

  cy.url().should("contain", "/workspaces/");
});
