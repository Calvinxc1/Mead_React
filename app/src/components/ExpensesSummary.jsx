import React from 'react';
import {connect} from 'react-redux';
import numeral from 'numeral';

import selectExpenses from './../selectors/expenses.jsx';
import {selectExpensesTotal} from './../selectors/expenses-total.js';

const ExpensesSummary = (props) => <div>
  Viewing {
    props.expenses.length
  } expenses totalling {
    numeral(selectExpensesTotal(props.expenses)/100).format('$0,0.00')
  }
</div>;

const mapStateToProps = (state) => ({
  expenses: selectExpenses(state.expenses, state.filters),
});

export default connect(mapStateToProps)(ExpensesSummary);
export {ExpensesSummary};
