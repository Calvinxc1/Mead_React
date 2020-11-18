const selectExpensesTotal = (expenses) => {
  return expenses
    .map((expense) => expense.amount)
    .reduce((total, val) => total+val, 0);
};

export {selectExpensesTotal};
