import React from "react"

const Categories = () => {
  const data = [
    {
      cateImg: "./images/category/cat1.png",
      cateName: "Furniture",
    },
    {
      cateImg: "./images/category/cat2.png",
      cateName: "Cooking",
    },
    {
      cateImg: "./images/category/cat3.png",
      cateName: "Accessories",
    },
    {
      cateImg: "./images/category/cat4.png",
      cateName: "Fashion",
    },
    {
      cateImg: "./images/category/cat5.png",
      cateName: "Clocks",
    },
    {
      cateImg: "./images/category/cat6.png",
      cateName: "Lighting",
    },
    {
      cateImg: "./images/category/cat7.png",
      cateName: "Toys",
    },
    {
      cateImg: "./images/category/cat8.png",
      cateName: "Handmade",
    },
    {
      cateImg: "./images/category/cat9.png",
      cateName: "Minimalist",
    },
    {
      cateImg: "./images/category/cat10.png",
      cateName: "Electronics",
    },
    {
      cateImg: "./images/category/cat11.png",
      cateName: "Cars",
    },
  ]

  return (
    <>
      <div className='category'>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Categories
