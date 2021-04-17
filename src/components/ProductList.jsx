// rce
import React, { Component } from "react";
import ProductItem from "./ProductItem";

class ProductList extends Component {
  state = {
    phoneImgList: [
      { name: "Note 7", phoneSrc: "./img/sp_note7.png" },
      { name: "iPhone X", phoneSrc: "./img/sp_iphoneX.png" },
      { name: "Blackberry", phoneSrc: "./img/sp_blackberry.png" },
      { name: "Vivo 850", phoneSrc: "./img/sp_vivo850.png" },
    ],
  };

  renderProductItem = () => {
    return this.state.phoneImgList.map((item) => {
      return <ProductItem phoneSrc={item.phoneSrc} name={item.name} />;
    });
  };

  render() {
    return (
      <section id="smartphone" className="container-fluid pt-5 pb-5 bg-dark">
        <h1 className="text-white text-center">BEST SMARTPHONE</h1>
        <div className="row">
          {/* <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem /> */}
          {this.renderProductItem()}
        </div>
      </section>
    );
  }
}

export default ProductList;
