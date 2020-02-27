console.log("app.js is running");

let userLocation = "KC";

let app = {
  title: "Indecision app",
  subtitle: "Info about the app",
  options: []
};

const onFormSubmit = e => {
  e.preventDefault();
  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
    renderApp();
  }
};
const makeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
};
const resetOptions = () => {
  app.options = [];
  renderApp();
};

const appRoot = document.querySelector("#app");

const renderApp = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
      {/* <p>{app.options.length}</p> */}
      <button disabled={app.options.length === 0} onClick={makeDecision}>
        What should I do?
      </button>
      <button onClick={resetOptions}>Reset options</button>

      <ol>
        {app.options.map(option => {
          return <li key={option}>Option: {option}</li>;
        })}
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
};

renderApp();
