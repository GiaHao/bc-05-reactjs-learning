import React, { Component } from "react";

class Car extends Component {
  render() {
    return (
      <div className="car mt-2">
        <img className="img-thumbnail" src={this.props.carImg} alt="hinh" />
      </div>
    );
  }
}

export default Car;
