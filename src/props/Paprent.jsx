import React, { Component } from "react";
import Child from "./Child";
import ChildFunction from "./ChildFunction";

class Paprent extends Component {
  state = {
    hero: {
      name: "Iron Man",
      say: "I love u 3000",
    },
  };
  render() {
    return (
      <div>
        <h1>Parent</h1>
        {/* Truyền props */}
        <Child tenAnhHung={this.state.hero.name}>
          <img src="https://cdn.chanhtuoi.com/uploads/2020/05/w400/icon-facebook-67.jpg.webp" />
        </Child>
        <ChildFunction cauNoi={this.state.hero.say}>
          <img src="https://cdn.chanhtuoi.com/uploads/2020/05/w400/icon-facebook-67.jpg.webp" />
        </ChildFunction>
      </div>
    );
  }
}

export default Paprent;
