"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionAPP = function (_React$Component) {
  _inherits(IndecisionAPP, _React$Component);

  function IndecisionAPP(props) {
    _classCallCheck(this, IndecisionAPP);

    var _this = _possibleConstructorReturn(this, (IndecisionAPP.__proto__ || Object.getPrototypeOf(IndecisionAPP)).call(this, props));

    _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
    _this.handlePick = _this.handlePick.bind(_this);
    _this.handleAddOption = _this.handleAddOption.bind(_this);
    _this.handleDeleteOption = _this.handleDeleteOption.bind(_this);
    _this.state = {
      options: props.options
    };
    return _this;
  }

  _createClass(IndecisionAPP, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      try {
        var json = localStorage.getItem("options");
        var options = JSON.parse(json);
        if (options) {
          this.setState(function () {
            return { options: options };
          });
        }
      } catch (e) {
        //if invalid JSON, do nothing
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevState.options.length !== this.state.options.length) {
        var json = JSON.stringify(this.state.options);
        console.log("saving data");
        localStorage.setItem("options", json);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      console.log("component will unmount");
    }
  }, {
    key: "handleAddOption",
    value: function handleAddOption(option) {
      if (!option) {
        return "Enter valid value to add item";
      } else if (this.state.options.indexOf(option) > -1) {
        return "This option already exists";
      }
      this.setState(function (prevState) {
        return {
          options: prevState.options.concat([option])
        };
      });
    }
  }, {
    key: "handleDeleteOption",
    value: function handleDeleteOption(option) {
      this.setState(function (prevState) {
        return {
          options: prevState.options.filter(function (el) {
            return el !== option;
          })
        };
      });
    }
  }, {
    key: "handlePick",
    value: function handlePick() {
      var randomNum = Math.floor(Math.random() * this.state.options.length);
      var pick = this.state.options[randomNum];
      alert(pick);
    }
  }, {
    key: "handleDeleteOptions",
    value: function handleDeleteOptions() {
      this.setState(function () {
        return { options: [] };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var subTitle = "Put your life in the hands of a computer";
      return React.createElement(
        "div",
        null,
        React.createElement(Header, { subtitle: subTitle }),
        React.createElement(Action, {
          handlePick: this.handlePick,
          hasOptions: this.state.options.length > 0
        }),
        React.createElement(Options, {
          handleDeleteOptions: this.handleDeleteOptions,
          handleDeleteOption: this.handleDeleteOption,
          options: this.state.options
        }),
        React.createElement(AddOption, { handleAddOption: this.handleAddOption })
      );
    }
  }]);

  return IndecisionAPP;
}(React.Component);

IndecisionAPP.defaultProps = {
  options: []
};
var Header = function Header(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      props.title,
      " "
    ),
    props.subtitle && React.createElement(
      "h2",
      null,
      props.subtitle
    )
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
var Action = function Action(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "button",
      { disabled: !props.hasOptions, onClick: props.handlePick },
      "What should I do?"
    )
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

var AddOption = function (_React$Component2) {
  _inherits(AddOption, _React$Component2);

  function AddOption(props) {
    _classCallCheck(this, AddOption);

    var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

    _this2.handleAddOption = _this2.handleAddOption.bind(_this2);
    _this2.state = { error: undefined };
    return _this2;
  }

  _createClass(AddOption, [{
    key: "handleAddOption",
    value: function handleAddOption(e) {
      e.preventDefault();
      // console.log(e.target.elements[0].value);
      var text = e.target.elements[0].value.trim();
      var error = this.props.handleAddOption(text);

      this.setState(function () {
        return {
          error: error
        };
      });
      if (!error) {
        document.querySelector("#addOptionText").value = "";
      }
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        this.state.error && React.createElement(
          "p",
          null,
          this.state.error
        ),
        React.createElement(
          "form",
          { onSubmit: this.handleAddOption },
          React.createElement("input", { id: "addOptionText", type: "text" }),
          React.createElement(
            "button",
            null,
            "Add option"
          )
        )
      );
    }
  }]);

  return AddOption;
}(React.Component);

var Option = function Option(props) {
  return props.options.map(function (el, i) {
    return React.createElement(
      "div",
      { key: Math.random() },
      React.createElement(
        "li",
        { key: i },
        el,
        React.createElement(
          "button",
          { key: el, onClick: function onClick() {
              return props.handleDeleteOption(el);
            } },
          "Remove"
        )
      )
    );
  });
};
// class Option extends React.Component {
//   render() {
//     // this.optionArray = ["Option 1", "Option 2"];

//     return this.props.options.map((el, i) => <li key={i}>{el}</li>);
//   }
// }
var Options = function Options(props) {
  return React.createElement(
    "div",
    null,
    props.options.length === 0 && React.createElement(
      "p",
      null,
      "Please add an option to get started!"
    ),
    React.createElement(
      "ol",
      null,
      React.createElement(Option, {
        handleDeleteOption: props.handleDeleteOption,
        options: props.options
      })
    ),
    React.createElement(
      "button",
      { onClick: props.handleDeleteOptions },
      "Remove All"
    )
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
ReactDOM.render(React.createElement(IndecisionAPP, null), document.querySelector("#app"));
