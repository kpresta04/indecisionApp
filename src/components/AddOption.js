import React from "react";

export default class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = { error: undefined };
  }
  handleAddOption(e) {
    e.preventDefault();
    // console.log(e.target.elements[0].value);
    const text = e.target.elements[0].value.trim();
    const error = this.props.handleAddOption(text);

    this.setState(() => ({
      error
    }));
    if (!error) {
      document.querySelector("#addOptionText").value = "";
    }
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input id="addOptionText" type="text"></input>
          <button>Add option</button>
        </form>
      </div>
    );
  }
}
