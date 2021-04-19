import React, { Component } from "react";
import XucXac from "./XucXac";

class BanChoi extends Component {
  renderDanhSachXucXac = () => {
    const { xucXacs } = this.props;
    return xucXacs.map((item, index) => {
      return <XucXac item={item} key={index} />;
    });
  };

  handleChoiceTaiOrXiu = (taiOrXiu) => {
    const { handleTaiOrXiu } = this.props;
    handleTaiOrXiu(taiOrXiu);
  };

  render() {
    return (
      <div className="row text-center">
        <div className="col-4">
          <button
            onClick={() => this.handleChoiceTaiOrXiu(true)}
            className="bg-danger display-4 p-5 text-light"
          >
            TÀI{" "}
          </button>
        </div>
        <div className="col-4">
          <div className="d-flex justify-content-center">
            {this.renderDanhSachXucXac()}
          </div>
        </div>
        <div className="col-4">
          <button
            onClick={() => this.handleChoiceTaiOrXiu(false)}
            className="bg-dark display-4 p-5 text-light"
          >
            XỈU{" "}
          </button>
        </div>
      </div>
    );
  }
}

export default BanChoi;
