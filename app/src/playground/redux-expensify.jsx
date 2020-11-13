import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';

const addExpense = ({
    description='',
    notes='',
    amount=0,
    createdAt=0,
  }={}) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    notes,
    amount,
    createdAt,
  }
});

const removeExpense = ({id}={}) => ({type: 'REMOVE_EXPENSE', id});

const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id, updates,
});

const expensesReducerDefaultState = [];

const expensesReducer = (state=expensesReducerDefaultState, action) => {
  switch(action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.expense];

    case 'REMOVE_EXPENSE':
      return state.filter(({id}) => id != action.id);

    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if (expense.id == action.id) {
          return {
            ...expense,
            ...action.updates,
          }
        } else {
          return expense;
        }
      });

    default:
      return state;
  }
};


const setFilter = (filter={}) => ({type: 'SET_FILTER', filter});
const resetFilter = () => ({type:'RESET_FILTER'})

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined,
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

const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
  return expenses.filter((expense) => {
    const startDateMatch = typeof startDate != 'number' || expense.createdAt >= startDate;
    const endDateMatch = typeof endDate != 'number' || expense.createdAt <= endDate;
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    if (sortBy == 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    } else if (sortBy == 'amount') {
      return a.amount < b.amount ? 1 : -1
    }
  });
}

const store = createStore(combineReducers({
  expenses: expensesReducer,
  filters: filtersReducer,
}));

store.subscribe(() => {
  const {expenses, filters} = store.getState();
  const visibleExpenses = getVisibleExpenses(expenses, filters);
  console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({description:'Rent', amount:100, createdAt: 1000}));
const expenseTwo = store.dispatch(addExpense({description:'Coffee', amount:300, createdAt: -1000}));
const expenseThree = store.dispatch(addExpense({description:'Hookers', amount:3000, createdAt: 200}));
// store.dispatch(removeExpense({id:expenseOne.expense.id}))
// store.dispatch(editExpense(expenseTwo.expense.id, {amount:500}));

// store.dispatch(setFilter({startDate:0, endDate:1250}));
store.dispatch(setFilter({sortBy: 'amount'}));
store.dispatch(resetFilter());

const demoState = {
  expenses: [{
    id: '1reqwf45ytrewtvsd',
    description: 'January Rent',
    note: 'this was the final payment for that address',
    amount: 54500,
    createdAt: 0,
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined,
  },
};
