import React from "react";
import "./product.css";

const Product = () => {
  return (
    <section id="product" className="product container">
      <div className="product-header">
        <div className="product-info">
          <h5 className="title">Product designer</h5>
          <h1 className="subtitle">That's me!</h1>
        </div>
        <div className="product-description">
          <p>
            Over the past 12 years, I've worked with a diverse range of clients,
            from startups to Fortune 500 companies. I love crafting interfaces
            that delight users and help businesses grow.
          </p>
        </div>
      </div>
      <div className="product-gallery">
        <div className="grid1">
          <img src="./assets/product1.png" alt="pic1" />
        </div>
        <div className="grid2">
          <img src="./assets/product2.png" alt="pic2" />
        </div>
        <div className="grid3">
          <img src="./assets/product3.png" alt="pic3" />
          <img src="./assets/product4.png" alt="pic4" />
        </div>
      </div>
    </section>
  );
};

export default Product;
