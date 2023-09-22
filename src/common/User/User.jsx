import React from "react";
import "./style.css";

const User = () => {
  const data = [
    {
      id: 1,
      username: "thphg311@gmail.com",
      name: "Nguyễn Thị Phương",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
      u: "Hanoi Open University",
      cccd: "0123456789",
      sdt: "123456789",
    },
  ];
  const data2 = [
    {
      cateImg: "./images/category/cat1.png",
      cateName: "Information",
    },
    {
      cateImg: "./images/category/cat2.png",
      cateName: "History",
    },
    {
      cateImg: "./images/category/cat3.png",
      cateName: "Discount Voucher",
    },
    {
      cateImg: "./images/category/cat4.png",
      cateName: "Change password",
    },
    {
      cateImg: "./images/category/cat5.png",
      cateName: "Contact",
    },
    {
      cateImg: "./images/category/cat6.png",
      cateName: "Bills",
    },
    {
      cateImg: "./images/category/cat7.png",
      cateName: "Goods",
    },
    {
      cateImg: "./images/category/cat8.png",
      cateName: "Freeship Voucher",
    },
    {
      cateImg: "./images/category/cat9.png",
      cateName: "Only for you",
    },
    {
      cateImg: "./images/category/cat10.png",
      cateName: "Settings",
    },
    {
      cateImg: "./images/category/cat11.png",
      cateName: "Delete Account",
    },
  ];
  return (
    <>
      <section className="wrapper background">
        <div className="container option">
          <div className="category">
            {data2.map((value, index) => {
              return (
                <div className="box f_flex" key={index}>
                  <img src={value.cateImg} alt="" />
                  <span>{value.cateName}</span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="container info">
          {data.map((val, index) => {
            return (
              <div className="user" key={index}>
                <div className="v username">
                  <b>Username:</b> {val.username}
                </div>
                <div className="v name">
                  <b>Fullname: </b>
                  {val.name}
                </div>
                <div className="v desc">
                  <b>Describe:</b> {val.desc}
                </div>
                <div className="v u">
                  <b>University:</b> {val.u}
                </div>
                <div className="v cccd">
                  <b>ID Card Number: </b>
                  {val.cccd}
                </div>
                <div className="v sdt">
                  <b>Phone Number: </b>
                  {val.sdt}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default User;
