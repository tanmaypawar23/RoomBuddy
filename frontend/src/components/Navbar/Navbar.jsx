import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import logoName from "../../assets/logo_name.png";
import add from "../../assets/add.png";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const router = useNavigate();
  const isLoggedIn = localStorage.getItem("token");
  return (
    <nav className="navbar">
      <div className="navbarLogo">
        <Link to="">
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
        </Link>
      </div>
      <div className="navbarMenu">
        <Link to="/" className="navbarMenulink">
          Home
        </Link>
        <Link to="/allListing" className="navbarMenulink">
          See Request
        </Link>
        <Link to="/" className="navbarMenulink">
          About Us
        </Link>
        <Link to="/" className="navbarMenulink">
          Support
        </Link>
      </div>
      <div className="navbar-button">
        {isLoggedIn ? (
          <>
            <Link to="/createListing" className="createRequet-button">
              <img
                src={add}
                alt="add"
                style={{ width: "1rem", marginRight: "0.2rem" }}
              />
              Create Request
            </Link>
            <button
              className="login-buttton"
              onClick={() => {
                localStorage.removeItem("token");
                router("/auth");
              }}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <button className="login-buttton" onClick={() => router("/auth")}>
              Login
            </button>
            <button className="signup-buttton" onClick={() => router("/auth")}>
              SignUp
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
