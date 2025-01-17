import React from "react";
import "./style.css";
import TopCart from "./TopCart";

const TopCate = () => {
  return (
    <>
      <section className="TopCate background">
        <div className="container">
          <div className="heading d_flex">
            <div className="e_center">
              <p>Ecommerice Collections</p>
              <h1>FEATURE CATEGORIES</h1>
              <p>All products Item you want is in here</p>
            </div>

            <div className="heading-left row  f_flex">
              <h2>
                {" "}
                <i className="fa-solid fa-border-all"></i>Best Sellers
              </h2>
            </div>
            {/* <div className='heading-right row '>
              <span>View all</span>
              <i className='fa-solid fa-caret-right'></i>
            </div> */}
          </div>
          <TopCart />
        </div>
      </section>
    </>
  );
};

export default TopCate;
