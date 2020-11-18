import React from 'react';
import {connect} from 'react-redux';
import {DateRangePicker} from 'react-dates';

import {setFilter} from './../actions/filters.jsx';

class ExpenseListFilters extends React.Component {
  state = {
    calendarFocused: null,
  };

  onFocusChange = (calendarFocused) => {
    this.setState(() => ({calendarFocused}));
  };

  onTextChange = (e) => {
    this.props.setTextFilter(e.target.value);
  };

  onSortChange = (e) => {
    this.props.setSortBy(e.target.value);
  };

  onDatesChange = ({startDate, endDate}) => {
    this.props.setDates(startDate, endDate);
  };

  render = () => <div>
    <input
      type="text"
      value={this.props.text}
      onChange={this.onTextChange}
    />
    <select
      value={this.props.sortBy}
      onChange={this.onSortChange}
    >
      <option value="date">Date</option>
      <option value="amount">Amount</option>
    </select>
    <DateRangePicker
      startDate={this.props.startDate}
      endDate={this.props.endDate}
      onDatesChange={this.onDatesChange}
      focusedInput={this.state.calendarFocused}
      onFocusChange={this.onFocusChange}
      numberOfMonths={1}
      isOutsideRange={() => false}
      showClearDates
    />
  </div>;
}

const mapStateToProps = (state) => ({...state.filters});

const mapDispatchToProps = (dispatch) => ({
  setTextFilter: (text) => dispatch(setFilter({text})),
  setSortBy: (sortBy) => dispatch(setFilter({sortBy})),
  setDates: (startDate, endDate) => dispatch(setFilter({startDate, endDate})),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);
export {ExpenseListFilters};
