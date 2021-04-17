import React, { Component } from "react";
import "./style.scss";
import BanChoi from "./BanChoi";
import KetQua from "./KetQua";
import BtnPlay from "./BtnPlay";

export default class AppXucXac extends Component {
  state = {
    banChon: true, // true: tài, false: xỉu
    soBanThang: 0,
    soBanChoi: 0,
    xucXacs: [
      {
        imgSrc: "./img/gameXucXac/1.png",
        diem: 1,
      },
      {
        imgSrc: "./img/gameXucXac/2.png",
        diem: 2,
      },
      {
        imgSrc: "./img/gameXucXac/3.png",
        diem: 3,
      },
    ],
  };

  render() {
    const { banChon, soBanThang, soBanChoi, xucXacs } = this.state;
    return (
      <div
        className="gameXucXac"
        style={{
          backgroundImage: 'url("./img/gameXucXac/bgGame.png")',
          width: "100%",
          height: "100%",
          position: "fixed",
          left: 0,
          top: 0,
        }}
      >
        <div className="container">
          <h3 className="display-4 text-center">BÀI TẬP GAME XÚC XẮC</h3>
          <BanChoi xucXacs={xucXacs} />
        </div>
        <KetQua
          banChon={banChon}
          soBanChoi={soBanChoi}
          soBanThang={soBanThang}
        />
        <div className="text-center">
          <BtnPlay />
        </div>
      </div>
    );
  }
}
