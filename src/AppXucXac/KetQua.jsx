import React, { Component } from "react";

class KetQua extends Component {
  render() {
    return (
      <div className="container text-center display-4">
        <div>
          bạn chọn :{" "}
          <span className="text-danger">
            {this.props.banChon ? "Tài" : "Xỉu"}
          </span>
        </div>
        <div>
          số bàn thắng :{" "}
          <span className="text-success">{this.props.soBanThang}</span>
        </div>
        <div>
          tổng số bàn chơi :{" "}
          <span className="text-warning">{this.props.soBanChoi}</span>
        </div>
      </div>
    );
  }
}

export default KetQua;
