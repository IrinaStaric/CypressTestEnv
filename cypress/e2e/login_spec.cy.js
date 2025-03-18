// cypress/e2e/login_spec.cy.js

describe('User Login', () => {
  before(() => {
    cy.fixture('loginData').then((users) => {
      users.forEach((user) => {
        cy.register(user.email, user.password);
      });
    });
  });

  it('should log in users successfully', () => {
    cy.fixture('loginData').then((users) => {
      users.forEach((user) => {
        cy.login(user.email, user.password);
        cy.url().should('include', '/dashboard');
        cy.get('h1').should('contain', 'Dashboard');
      });
    });
  });
});
