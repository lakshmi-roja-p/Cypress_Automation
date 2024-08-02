
describe('Login Tests', () => {
  it('should login with valid credentials', () => {
    cy.visit('/login');

    cy.get('input[name="email"]').type('qa+employee@carevalidate.com');
    cy.get('input[name="password"]').type('bLPgk5tr7D3ZqpXvV@aNKz');
    cy.get('button[type="submit"]').click();

    cy.url().should('include', '/dashboard');
    cy.contains('Welcome').should('be.visible');
  });

  it('should show an error message for invalid credentials', () => {
    cy.visit('/login');

    cy.get('input[name="email"]').type('invaliduser@example.com');
    cy.get('input[name="password"]').type('invalidpassword');
    cy.get('button[type="submit"]').click();

    cy.contains('Invalid email or password').should('be.visible');
  });
});
