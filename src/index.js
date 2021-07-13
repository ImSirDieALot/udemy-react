import React from "react";
import ReactDOM from "react-dom";

function Greeting() {
  return (
    <div className="container">
      <h2>Hello Greeting</h2>
    </div>
  );
}

ReactDOM.render(<Greeting />, document.getElementById("root"));
