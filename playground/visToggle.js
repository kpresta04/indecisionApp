class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.toggleHiddenP = this.toggleHiddenP.bind(this);

    this.state = {
      hidden: true
    };
  }
  toggleHiddenP() {
    this.setState(prevState => {
      return {
        hidden: !prevState.hidden
      };
    });
  }
  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.toggleHiddenP}>
          {this.state.hidden ? "Show details" : "Hide details"}
        </button>
        <p hidden={this.state.hidden}>This is a hidden text</p>
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.querySelector("#app"));
