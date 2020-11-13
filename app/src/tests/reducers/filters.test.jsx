import moment from 'moment';

import filtersReducer from './../../reducers/filters.jsx';

test('should setup default filter values', () => {
  const state = filtersReducer(undefined, {type: '@@INIT'});
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month'),
  });
});

test('should set filters', () => {
  const filter = {
    text: 'test',
    sortBy: 'amount',
    startDate: moment(),
    endDate: moment(),
  };
  const state = filtersReducer(undefined, {
    type: 'SET_FILTER',
    filter,
  });
  expect(state).toEqual(filter);
});

test('should reset filters', () => {
  const state = filtersReducer({
    text: 'test',
    sortBy: 'amount',
    startDate: moment(),
    endDate: moment(),
  }, {type: 'RESET_FILTER'});
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month'),
  });
});
