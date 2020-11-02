import React from 'react';

import Action from './Action.jsx';
import AddOption from './AddOption.jsx';
import Header from './Header.jsx';
import Options from './Options.jsx';
import OptionModal from './OptionModal.jsx';

const title = 'Indecision App';
const subtitle = 'Put your life in the hands of a computer.';

class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined,
  };

  componentDidMount = () => {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);

      if(options) {
        this.setState(() => {
          return {options};
        })
      }
    } catch(e) {

    }
  };

  componentDidUpdate = (prevProps, prevState) => {
    if(prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  };

  componentWillUnmount = () => {
    console.log('componentWillUnmount');
  }

  handleDeleteOptions = () => {
    this.setState(() => ({options: []}));
  };

  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => {
      return {
        options: prevState.options.filter((option) => {
          return option != optionToRemove;
        }),
      };
    });
  };

  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const selectedOption = this.state.options[randomNum];
    this.setState(() => ({selectedOption}));
  };

  handleAddOption = (option) => {
    if(!option) {
      return 'Enter valid value to add item';
    } else if(this.state.options.indexOf(option) != -1) {
      return 'This option already exists';
    }

    this.setState((prevState) => ({options: prevState.options.concat(option)}));
  };

  handleClearSelectedOption = () => {
    this.setState(() => ({selectedOption: undefined}));
  };

  render = (props) => <div>
    <Header
      title={title}
      subtitle={subtitle}
    />
    <Action
      hasOptions={this.state.options.length > 0}
      handlePick={this.handlePick}
    />
    <Options
      options={this.state.options}
      handleDeleteOptions={this.handleDeleteOptions}
      handleDeleteOption={this.handleDeleteOption}
    />
    <AddOption
      handleAddOption={this.handleAddOption}
    />
    <OptionModal
      selectedOption={this.state.selectedOption}
      handleClearSelectedOption={this.handleClearSelectedOption}
    />
  </div>;
}

export default IndecisionApp;
