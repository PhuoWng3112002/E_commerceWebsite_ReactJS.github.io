import React from "react";

const Catg = () => {
  const data = [
    {
      cateImg: "./images/category/b1.png",
      cateName: "Apple",
    },
    {
      cateImg: "./images/category/b2.png",
      cateName: "Samsung",
    },
    {
      cateImg: "./images/category/b3.png",
      cateName: "Oppo",
    },
    {
      cateImg: "./images/category/b4.png",
      cateName: "Vivo",
    },
    {
      cateImg: "./images/category/b5.png",
      cateName: "Redmi",
    },
  ];
  return (
    <>
      <div className="category">
        <div className="chead d_flex">
          <h1>Brands </h1>
        </div>
        {data.map((value, index) => {
          return (
            <div className="box f_flex" key={index}>
              <img className="img_brand" src={value.cateImg} alt="" />
              {/* <span>{value.cateName}</span> */}
            </div>
          );
        })}
        <div className="box box2">
          <button>View All Brands</button>
        </div>
      </div>
    </>
  );
};

export default Catg;
