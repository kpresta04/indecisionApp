// let count = 0;
// function addOne() {
//   count++;
//   // document.querySelector("#countText").textContent(`Count: ${count}`);
//   renderCounterApp();
// }

// function minusOne() {
//   count--;
//   renderCounterApp();
// }
// function resetFunction() {
//   count = 0;
//   renderCounterApp();
// }

// const appRoot = document.querySelector("#app");

// const renderCounterApp = () => {
//   const templateTwo = (
//     <div>
//       <h1 id="countText">Count: {count}</h1>
//       <button onClick={addOne}>+1</button>
//       <button onClick={minusOne}>-1</button>
//       <button onClick={resetFunction}>Reset</button>
//     </div>
//   );
// };

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);

    this.state = {
      count: 0
    };
  }
  componentDidMount() {
    const json = localStorage.getItem("count");
    if (json) {
      const count = Number(json);
      if (!isNaN(count)) {
        this.setState(() => ({ count })); //shorthand if key and value both have same name
      }
    }
  }
  componentDidUpdate() {
    const json = this.state.count;
    localStorage.setItem("count", json);
  }

  handleAddOne() {
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      };
    });
  }

  handleMinusOne() {
    this.setState(prevState => {
      return {
        count: prevState.count - 1
      };
    });
  }
  handleReset() {
    this.setState(() => {
      return {
        count: 0
      };
    });
  }
  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>

        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

// Counter.defaultProps = {
//   count: 0
// };

ReactDOM.render(<Counter />, document.querySelector("#app"));
