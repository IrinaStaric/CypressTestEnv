// cypress/e2e/registration_spec.cy.js

describe('User Registration and Login', () => {
  const userEmail = Cypress.env('userEmail');
  const userPassword = Cypress.env('userPassword');

  it('should register a new user successfully', () => {
    cy.register(userEmail, userPassword);
  });

  it('should log in with existing user credentials', () => {
    cy.login(userEmail, userPassword);
    // Verify successful login
    cy.url().should('include', '/dashboard');
    cy.get('h1').should('contain', 'Dashboard');
  });
});

  
  