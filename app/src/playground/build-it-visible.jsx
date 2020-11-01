class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {visibility:false};

    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
  }

  handleToggleVisibility() {
    this.setState(() => {
      return {visibility: !this.state.visibility};
    });
  }

  render() {
    return <div>
      <h1>Visibility Toggle</h1>
      <button onClick={this.handleToggleVisibility}>
        {this.state.visibility ? "Hide details" : "Show details"}
      </button>
      {this.state.visibility && <p>
        Hey. These are some details you can now see!
      </p>}
    </div>;
  }
}

ReactDOM.render(
  <VisibilityToggle />,
  document.getElementById('app')
);
