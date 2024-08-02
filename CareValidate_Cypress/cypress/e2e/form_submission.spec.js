// cypress/e2e/form_submission.spec.js
describe('New Request Form', () => {
    beforeEach(() => {
      cy.login(); // Using the custom command to login
    });
  
    it('should submit the new request form successfully', () => {
      cy.visit('/accommodations/new-request');
  
      cy.get('select[name="formType"]').select('Weight Loss Eligibility Intake Form');
      cy.get('input[name="field1"]').type('Value for field 1');
      cy.get('input[name="field2"]').type('Value for field 2');
      // Add more form fields as needed
  
      cy.get('button[type="submit"]').click();
  
      cy.contains('Request submitted successfully').should('be.visible');
    });
  
    it('should validate form fields', () => {
      cy.visit('/accommodations/new-request');
  
      cy.get('button[type="submit"]').click();
  
      cy.contains('Field is required').should('be.visible');
      // Add more validation checks as needed
    });
  });
  