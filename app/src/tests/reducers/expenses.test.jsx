import expensesReducer from './../../reducers/expenses.jsx';
import expenses from './../fixtures/expenses.jsx';

test('should set default state', () => {
  const state = expensesReducer(undefined, {type: '@@INIT'});
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id,
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: 'gobbeldygook',
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should add an expense', () => {
  const expense = {
    description: 'Candy',
    note: '',
    amount: 123,
    createdAt: 4000,
  };
  const action = {
    type: 'ADD_EXPENSE',
    expense,
  }
  const state = expensesReducer(undefined, action);
  expect(state).toEqual([expense]);
});

test('should edit an expense', () => {
  const id = expenses[0].id;
  const updates = {amount: 666};
  const action = {
    type: 'EDIT_EXPENSE',
    id, updates,
  };
  const state = expensesReducer(expenses, action)
  expect(state).toEqual([{
    ...expenses[0],
    ...updates,
  }, expenses[1], expenses[2]]);
});

test('should not edit expense if not found', () => {
  const id = 'gobbledygook';
  const updates = {amount: 666};
  const action = {
    type: 'EDIT_EXPENSE',
    id, updates,
  };
  const state = expensesReducer(expenses, action)
  expect(state).toEqual(expenses);
});
