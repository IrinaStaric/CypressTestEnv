class GaragePage {
    visit() {
      cy.visit('/garage');
    }
  
    clickAddCarButton() {
      cy.get('button.btn.btn-primary').contains('Add car').click();
    }
  }
  export default new GaragePage();
  