import React, { Component } from "react";
import XucXac from "./XucXac";

class BanChoi extends Component {
  renderDanhSachXucXac = () => {
    const { xucXacs } = this.props;
    return xucXacs.map((item) => {
      return <XucXac item={item} />;
    });
  };

  render() {
    return (
      <div className="row text-center">
        <div className="col-4">
          <button className="bg-danger display-4 p-5 text-light">TÀI </button>
        </div>
        <div className="col-4">
          <div className="d-flex justify-content-center">
            {this.renderDanhSachXucXac()}
          </div>
        </div>
        <div className="col-4">
          <button className="bg-dark display-4 p-5 text-light">XỈU </button>
        </div>
      </div>
    );
  }
}

export default BanChoi;
