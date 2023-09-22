import React from "react";
import FlashCard from "./FlashCard";
import "./style.css";

const FlashDeals = ({ productItems, addToCart }) => {
  return (
    <>
      <section className="flash">
        <div className="container">
          <div className="heading f_flex">
            <div className="e_center">
              <p>Ecommerice Collections</p>
              <h1>FEATURE CATEGORIES</h1>
              <p>All products Item you want is in here</p>
            </div>

            <h1>
              <i className="fa fa-bolt"></i>Flash Deal
            </h1>
          </div>
          <FlashCard productItems={productItems} addToCart={addToCart} />
        </div>
      </section>
    </>
  );
};

export default FlashDeals;
