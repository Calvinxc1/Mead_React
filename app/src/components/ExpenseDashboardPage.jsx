import React from 'react';

import ExpenseList from './ExpenseList.jsx';
import ExpenseListFilters from './ExpenseListFilters.jsx';
import ExpensesSummary from './ExpensesSummary.jsx';

const ExpenseDashboardPage = () => <div>
  <ExpenseListFilters />
  <ExpensesSummary />
  <ExpenseList />
</div>;

export default ExpenseDashboardPage;
