class ExpensesPage {
    visit() {
      cy.visit('/panel/expenses');
    }
  
    clickFuelExpensesButton() {
      cy.get('a.btn.btn-white.btn-sidebar.sidebar_btn')
        .contains('Fuel expenses')
        .click();
    }
  }
  export default new ExpensesPage();
  