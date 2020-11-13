import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import 'react-dates/lib/css/_datepicker.css';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import AppRouter from './routers/AppRouter.jsx';
import configureStore from './store/configureStore.jsx';
import {addExpense, removeExpense, editExpense} from './actions/expenses.jsx';
import {setFilter, resetFilter} from './actions/filters.jsx';
import getVisibleExpenses from './selectors/expenses.jsx';

const store = configureStore();

store.dispatch(addExpense({description: 'Water bill', amount: 4500}));
store.dispatch(addExpense({description: 'Gas bill', createdAt: 1000}));
store.dispatch(addExpense({description: 'Rent', amount: 109500}));

const jsx = <Provider store={store}>
  <AppRouter />
</Provider>;

ReactDOM.render(jsx, document.getElementById('app'));
