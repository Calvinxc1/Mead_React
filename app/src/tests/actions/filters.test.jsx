import moment from 'moment';

import {setFilter, resetFilter} from './../../actions/filters.jsx';

test('should generate set filter action object, manual data', () => {
  const filter = {
    text: 'test',
    sortBy: 'amount',
    startDate: moment(),
    endDate: moment(),
  };
  const action = setFilter(filter);
  expect(action).toEqual({
    type: 'SET_FILTER',
    filter,
  });
});

test('should generate set filter action object, default data', () => {
  const filter = {};
  const action = setFilter();
  expect(action).toEqual({
    type: 'SET_FILTER',
    filter,
  });
});

test('should generate reset filter action object', () => {
  const action = resetFilter();
  expect(action).toEqual({type:'RESET_FILTER'});
});
