import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import logoName from "../../assets/logo_name.png";
import add from "../../assets/add.png";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const router = useNavigate();
  return (
    <nav className="navbar">
      <div className="navbarLogo">
        <a href="">
          <img
            src={logo}
            alt="logo"
            style={{ width: "3rem" }}
            className="logo"
            onClick={() => {
              router("/");
            }}
          />
          <img
            src={logoName}
            alt=""
            style={{ width: "9.5rem", height: "2rem" }}
            className="logoName"
            onClick={() => {
              router("/");
            }}
          />
        </a>
      </div>
      <div className="navbarMenu">
        <a href="/" className="navbarMenulink">
          Home
        </a>
        <a href="/allListing" className="navbarMenulink">
          See Request
        </a>
        <a href="/" className="navbarMenulink">
          About Us
        </a>
        <a href="/" className="navbarMenulink">
          Support
        </a>
      </div>
      <div className="navbar-button">
        <a href="/createListing" className="createRequet-button">
          <img
            src={add}
            alt="add"
            style={{ width: "1rem", marginRight: "0.2rem" }}
          />
          Create Request
        </a>
        <button className="login-buttton" onClick={() => router("/auth")}>
          Login
        </button>
        <button className="signup-buttton" onClick={() => router("/auth")}>
          SignUp
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
