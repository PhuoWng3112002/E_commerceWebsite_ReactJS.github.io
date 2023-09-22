import React, { useState } from "react";
import "./login.css";
import user_icon from "../assets/images/person.png";
import email_icon from "../assets/images/email.png";
import password_icon from "../assets/images/password.png";
import { Link } from "react-router-dom";

const Login = () => {
  const [action, setAction] = useState("Sign up");
  return (
    <>
      <div className="f-container">
        <div className="welcome">
          <h1>Welcome to Ecommerice !</h1>
          <p>
            Ecommerice is a platform for you to find the best deals in your
            area. We are here to help you discover new products and services
            that will make your life easier!
          </p>
          <br />
          <button>More Information</button>
        </div>
        <div className="container_login">
          <div className="header_login">
            <div className="text_login">{action}</div>
            <div className="underline"></div>
          </div>
          <div className="inputs">
            {action === "Login" ? (
              <div></div>
            ) : (
              <div className="input">
                <img src={user_icon} alt="" />
                <input type="text" placeholder="User name" />
              </div>
            )}

            <div className="input">
              <img src={email_icon} alt="" />
              <input type="email" placeholder="Email Address" />
            </div>
            <div className="input">
              <img src={password_icon} alt="" />
              <input type="password" placeholder="Password" />
            </div>
          </div>
          {action === "Sign up" ? (
            <div></div>
          ) : (
            <div className="forgot-password">
              <span>Forgot Password?</span>
            </div>
          )}

          <div className="submit-container">
            <div
              className={action === "Login" ? "submit gray" : "submit"}
              onClick={() => {
                setAction("Sign up");
              }}
            >
              Sign up
            </div>
            <div
              className={action === "Sign up" ? "submit gray" : "submit"}
              onClick={() => {
                setAction("Login");
              }}
            >
              <Link to="./home">Login</Link>
            </div>
          </div>
          <div className="socialMedia">
            <p>or {action} with Social Media</p>
            <div className="iconMedia">
              <button className="iconFb">
                <i class="fab fa-facebook"></i>
              </button>
              <button className="iconGg">
                <i class="fab fa-google"></i>
              </button>
              <button className="iconIns">
                <i class="fab fa-instagram"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
