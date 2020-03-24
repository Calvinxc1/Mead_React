import React from 'react';

import Header from './Header.jsx';
import Action from './Action.jsx';
import Options from './Options.jsx';
import AddOption from './AddOption.jsx';

export default class IndecisionApp extends React.Component {
  state = {
    options: [],
  };

  handleAddOption = (option) => {
    if (!option) {
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    }

    this.setState((prevState) => {
      return {options: prevState.options.concat([option])}
    });
  };

  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => option != optionToRemove),
    }));
  };

  handleDeleteOptions = () => {
    this.setState(() => ({options: []}));
  };

  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  };

  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);
      if (options) {
        this.setState(() => ({options}));
      }
    } catch (e) {

    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length != this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }

  render() {
    const subtitle = 'Put your life in the hands of a computer';

    return <div>
      <Header
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
    </div>;
  }
}
