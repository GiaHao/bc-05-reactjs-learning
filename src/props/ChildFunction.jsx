import React from "react";

function ChildFunction(props) {
  return (
    <div>
      <h1>Child Function</h1>
      <p>say: {props.cauNoi}</p>
      {props.children}
    </div>
  );
}

export default ChildFunction;
