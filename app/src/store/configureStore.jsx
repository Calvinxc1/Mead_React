import {createStore, combineReducers} from 'redux';
import expensesReducer from './../reducers/expenses.jsx';
import filtersReducer from './../reducers/filters.jsx';

const store = () => {
  const storeObject = createStore(combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer,
  }), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
  return storeObject;
};

export default store;
