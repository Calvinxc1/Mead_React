import React from 'react';
import {shallow} from 'enzyme';
import moment from 'moment';

import {ExpenseListFilters} from './../../components/ExpenseListFilters.jsx';
import filters, {activeFilters} from './../fixtures/filters.jsx';

let setTextFilter, sortBy, setDates, wrapper;

beforeEach(() => {
  setTextFilter = jest.fn();
  sortBy = jest.fn();
  setDates = jest.fn();

  wrapper = shallow(<ExpenseListFilters
    filters={filters}
    setTextFilter={setTextFilter}
    sortBy={sortBy}
    setDates={setDates}
  />);
});

test('should render ExpenseListFilters correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseListFilters with active filter correctly', () => {
  wrapper.setProps({filters: activeFilters});
  expect(wrapper).toMatchSnapshot();
});

test('should handle text change', () => {
  const value = 'test text';
  wrapper.find('input').simulate('change', {target:{value}});
  expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test('should sort by amount', () => {
  const value = 'amount';
  wrapper.find('select').simulate('change', {target:{value}});
  expect(sortBy).toHaveBeenLastCalledWith(value);
});

test('should handle date changes', () => {
  const startDate = moment(0);
  const endDate = moment(0).add(3, 'days');
  wrapper.find('DateRangePicker').prop('onDatesChange')({startDate, endDate});
  expect(setDates).toHaveBeenLastCalledWith(startDate, endDate);
});

test('should handle date focus changes', () => {
  const calendarFocused = 'endDate';
  wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused);
  expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
});
