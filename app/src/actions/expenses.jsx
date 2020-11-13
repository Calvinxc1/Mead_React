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

const removeExpense = (id) => ({type: 'REMOVE_EXPENSE', id});

const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id, updates,
});

export {addExpense, removeExpense, editExpense};
