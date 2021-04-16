import React, { Component } from "react";

class Child extends Component {
  render() {
    return (
      <div>
        <h1>Child</h1>
        <p>name: {this.props.tenAnhHung}</p>
        <p>say: {this.props.cauNoi}</p>
        {this.props.children}
      </div>
    );
  }
}

export default Child;
