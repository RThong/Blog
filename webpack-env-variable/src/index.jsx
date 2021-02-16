import React from "react";
import ReactDOM from "react-dom";

console.log("【app】", process.env);
const App = () => {
  return <div>app</div>;
};

ReactDOM.render(<App />, document.querySelector("#root"));
