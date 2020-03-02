import React from "react";
import Option from "./Option";

const Options = props => (
  <div>
    <div className="widget-header">
      <h3>Your Options</h3>

      <button
        className="button button-link"
        onClick={props.handleDeleteOptions}
      >
        Remove All
      </button>
    </div>
    {props.options.length === 0 && (
      <p className="message">Please add an option to get started!</p>
    )}
    <ol>
      <Option
        handleDeleteOption={props.handleDeleteOption}
        options={props.options}
      />
    </ol>
  </div>
);

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
export default Options;
