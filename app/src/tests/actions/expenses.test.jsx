import {addExpense, removeExpense, editExpense} from './../../actions/expenses.jsx';

test('should setup add expense action object with provided values', () => {
  const expenseData = {
    description: 'Rent',
    amount: 109500,
    createdAt: 1000,
    notes: 'This was last months rent',
  }
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String),
    }
  });
});

test('should setup add expense action object with default values', () => {
  const expenseData = {
    description: '',
    notes: '',
    amount: 0,
    createdAt: 0,
  };
  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String),
    }
  });
});

test('should setup remove expense action object', () => {
  const id = '123abc';
  const action = removeExpense(id);
  expect(action).toEqual({type: 'REMOVE_EXPENSE', id});
});

test('should setup edit expense action object', () => {
  const id = '123abc';
  const updates = {notes:'test note'}
  const action = editExpense(id, updates);
  expect(action).toEqual({type: 'EDIT_EXPENSE', id, updates});
});
