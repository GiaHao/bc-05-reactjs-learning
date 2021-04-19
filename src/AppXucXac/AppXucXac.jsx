import React, { Component } from "react";
import "./style.scss";
import BanChoi from "./BanChoi";
import KetQua from "./KetQua";
import BtnPlay from "./BtnPlay";

const getIntRandom = () => {
  return Math.floor(Math.random() * 6);
};

export default class AppXucXac extends Component {
  xucXacMau = [
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
    {
      imgSrc: "./img/gameXucXac/4.png",
      diem: 4,
    },
    {
      imgSrc: "./img/gameXucXac/5.png",
      diem: 5,
    },
    {
      imgSrc: "./img/gameXucXac/6.png",
      diem: 6,
    },
  ];

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

  handlePlayGame = () => {
    let count = 1;
    const lacXucXac = setInterval(() => {
      const xucXacs = [
        this.xucXacMau[getIntRandom()],
        this.xucXacMau[getIntRandom()],
        this.xucXacMau[getIntRandom()],
      ];
      this.setState({
        // xucXacs: xucXacs
        xucXacs, // obkect literal
      });
      count += 1;
      if (count > 10) {
        clearInterval(lacXucXac);
        /**
         * các bước tính điểm:
         *  b1: cần mảng xucXacs tính tổng số điểm (tài hay xỉu)
         *  b2: cần lấy ra cái mình chọn
         *  b3: so sánh và tính ra kết quả
         */
        let { xucXacs, banChon, soBanChoi, soBanThang } = this.state;
        const tongDiem = xucXacs.reduce(
          (tongSoDiem, item) => (tongSoDiem += item.diem),
          0
        );
        let ketQua;
        if (tongDiem >= 11) {
          ketQua = true;
        } else {
          ketQua = false;
        }

        if (banChon === ketQua) {
          this.setState({ soBanThang: (soBanThang += 1) });
          this.setState({ soBanChoi: (soBanChoi += 1) });
        } else {
          this.setState({ soBanChoi: (soBanChoi += 1) });
        }
      }
    }, 100);
  };

  handleTaiOrXiu = (taiOrXiu) => {
    this.setState({
      banChon: taiOrXiu,
    });
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
          <BanChoi handleTaiOrXiu={this.handleTaiOrXiu} xucXacs={xucXacs} />
        </div>
        <KetQua
          banChon={banChon}
          soBanChoi={soBanChoi}
          soBanThang={soBanThang}
        />
        <div className="text-center">
          <BtnPlay handlePlayGame={this.handlePlayGame} />
        </div>
      </div>
    );
  }
}
