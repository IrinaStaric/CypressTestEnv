import GaragePage from '../support/garagePage';
import ExpensesPage from '../support/expensesPage';

describe('Garage and Fuel Expenses Tests', () => {
  it('should add a car in the garage', () => {
    GaragePage.visit();
    GaragePage.clickAddCarButton();
  });

  it('should go to the fuel expenses page after adding a car', () => {
    ExpensesPage.visit();
    ExpensesPage.clickFuelExpensesButton();
  });
});
