import React from 'react';
import {shallow} from 'enzyme';

import {ExpensesSummary} from './../../components/ExpensesSummary.jsx';
import expenses from './../fixtures/expenses.jsx';

test('should render ExpensesSummary with multiple expense items', () => {
  const wrapper = shallow(<ExpensesSummary expenses={expenses} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpensesSummary with single expense item', () => {
  const wrapper = shallow(<ExpensesSummary expenses={[expenses[1]]} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpensesSummary with no expense items', () => {
  const wrapper = shallow(<ExpensesSummary expenses={[]} />);
  expect(wrapper).toMatchSnapshot();
});
