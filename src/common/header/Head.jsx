import React from "react";

const Head = () => {
  return (
    <>
      <section className="head">
        <div className="container d_flex">
          <div className="left row">
            <i className="fa fa-phone"></i>
            <label> 123456879</label>
            <i className="fa fa-envelope"></i>
            <label>thphg311@gmail.com</label>
          </div>
          <div className="right row RText">
            <label>About</label>
            <label>Help Center</label>
            <label>Phần mềm tự do mã nguồn mở</label>
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
