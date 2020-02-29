import React from "react";

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

export default Option;
