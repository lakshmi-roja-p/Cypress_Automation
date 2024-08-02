// cypress/support/commands.js
Cypress.Commands.add('login', () => {
    cy.visit('/login');
    cy.get('input[name="email"]').type('qa+employee@carevalidate.com');
    cy.get('button[data-testid="continue"]').click();
    cy.get('input[name="password"]').type('bLPgk5tr7D3ZqpXvV@aNKz');
    cy.get('button[type="submit"]').click();
  });
  