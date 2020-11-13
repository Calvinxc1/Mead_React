import moment from 'moment';

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: moment().startOf('month'),
  endDate: moment().endOf('month'),
};

const filtersReducer = (state=filtersReducerDefaultState, action) => {
  switch(action.type) {
    case 'SET_FILTER':
      return {...state, ...action.filter};

    case 'RESET_FILTER':
      return filtersReducerDefaultState;

    default:
      return state;
  }
};

export default filtersReducer;
