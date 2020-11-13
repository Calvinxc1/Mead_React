import React from 'react';
import {shallow} from 'enzyme';

import {EditExpensePage} from './../../components/EditExpensePage.jsx';
import expenses from './../fixtures/expenses.jsx';

let editExpense, removeExpense, history, wrapper, baseExpense;

beforeEach(() => {
  editExpense = jest.fn();
  removeExpense = jest.fn();
  history = {push:jest.fn()};
  baseExpense = expenses[2]

  wrapper = shallow(<EditExpensePage
    editExpense={editExpense}
    removeExpense={removeExpense}
    history={history}
    expense={baseExpense}
  />);
})

test('should render EditExpensePage correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () => {
  const expense = {
    description: expenses[1].description,
    note: expenses[1].note,
    amount: expenses[1].amount,
    createdAt: expenses[1].createdAt,
  }
  wrapper.find('ExpenseForm').prop('onSubmit')(expense);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(editExpense).toHaveBeenLastCalledWith(baseExpense.id, expense);
});

test('should handle onClick', () => {
  wrapper.find('button').simulate('click');
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(removeExpense).toHaveBeenLastCalledWith(baseExpense.id);
});
