// cypress/support/commands.js
Cypress.Commands.add('register', (email, password) => {
  cy.visit('/register');
  cy.get('input[name="email"]').type(email).should('have.value', email);
  cy.get('input[name="password"]').type(password, { sensitive: true }).should('have.value', password);
  cy.get('button[type="submit"]').click();
  cy.url().should('include', '/welcome');
});

Cypress.Commands.add('login', (email, password) => {
  cy.session([email, password], () => {
    cy.visit('/login');
    cy.get('input[name="email"]').type(email).should('have.value', email);
    cy.get('input[name="password"]').type(password, { sensitive: true }).should('have.value', password);
    cy.get('button[type="submit"]').click();
    cy.url().should('not.include', '/login');
  });
});

  
  
