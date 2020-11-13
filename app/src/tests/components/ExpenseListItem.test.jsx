import React from 'react';
import {shallow} from 'enzyme';

import {ExpenseListItem} from './../../components/ExpenseListItem.jsx';
import expenses from './../fixtures/expenses.jsx';

test('should render ExpenseListItem with expense item', () => {
  const wrapper = shallow(<ExpenseListItem {...expenses[0]} />);
  expect(wrapper).toMatchSnapshot();
});
