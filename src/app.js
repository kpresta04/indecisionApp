class IndecisionAPP extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.state = {
      options: props.options
    };
  }
  handleAddOption(option) {
    if (!option) {
      return "Enter valid value to add item";
    } else if (this.state.options.indexOf(option) > -1) {
      return "This option already exists";
    }
    this.setState(prevState => ({
      options: prevState.options.concat([option])
    }));
  }
  handleDeleteOption(option) {
    this.setState(prevState => ({
      options: prevState.options.filter(el => el !== option)
    }));
  }
  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const pick = this.state.options[randomNum];
    alert(pick);
  }
  handleDeleteOptions() {
    this.setState(() => ({ options: [] }));
  }
  render() {
    const subTitle = "Put your life in the hands of a computer";
    return (
      <div>
        <Header subtitle={subTitle} />
        <Action
          handlePick={this.handlePick}
          hasOptions={this.state.options.length > 0}
        />
        <Options
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
          options={this.state.options}
        />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}
IndecisionAPP.defaultProps = {
  options: []
};
const Header = props => {
  return (
    <div>
      <h1>{props.title} </h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
};
Header.defaultProps = {
  title: "Indecision"
};
// class Header extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>{this.props.title} </h1>
//         <h2>{this.props.subtitle}</h2>
//       </div>
//     );
//   }
// }
const Action = props => {
  return (
    <div>
      <button disabled={!props.hasOptions} onClick={props.handlePick}>
        What should I do?
      </button>
    </div>
  );
};
// class Action extends React.Component {
//   render() {
//     return (
//       <div>
//         <button
//           disabled={!this.props.hasOptions}
//           onClick={this.props.handlePick}
//         >
//           What should I do?
//         </button>
//       </div>
//     );
//   }
// }
class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = { error: undefined };
  }
  handleAddOption(e) {
    e.preventDefault();
    // console.log(e.target.elements[0].value);
    const text = e.target.elements[0].value.trim();
    document.querySelector("#addOptionText").value = "";
    const error = this.props.handleAddOption(text);

    this.setState(() => ({
      error
    }));
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

const Option = props =>
  props.options.map((el, i) => (
    <div key={Math.random()}>
      <li key={i}>
        {el}
        <button key={el} onClick={() => props.handleDeleteOption(el)}>
          Remove
        </button>
      </li>
    </div>
  ));
// class Option extends React.Component {
//   render() {
//     // this.optionArray = ["Option 1", "Option 2"];

//     return this.props.options.map((el, i) => <li key={i}>{el}</li>);
//   }
// }
const Options = props => {
  return (
    <div>
      <ol>
        <Option
          handleDeleteOption={props.handleDeleteOption}
          options={props.options}
        />
      </ol>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
    </div>
  );
};
// class Options extends React.Component {
//   render() {
//     return (
//       <div>
//         <ol>
//           <Option options={this.props.options} />
//         </ol>
//         <button onClick={this.props.handleDeleteOptions}>Remove All</button>
//       </div>
//     );
//   }
// }
// const User = props => {
//   return (
//     <div>
//       <p>Name: {props.name}</p>
//       <p>Age: {props.age} </p>
//     </div>
//   );
// };
ReactDOM.render(<IndecisionAPP />, document.querySelector("#app"));
