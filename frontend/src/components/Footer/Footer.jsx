import React from "react";
import "./Footer.css";
import white_logo from "../../assets/white_logo.png";
import white_logo_name from "../../assets/white_logo_name.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col">
            <img src={white_logo} alt="logo" style={{ width: "3rem" }} />
            <img
              src={white_logo_name}
              alt="logo_name"
              style={{ width: "12rem", marginLeft: "1rem" }}
            />
            <p>&copy; 2026 RoomBuddy • All Rights Reserved</p>
            <div className="social-media">
              <h5> Follow Us</h5>
              <a
                href="https://www.linkedin.com/in/tanmay-pawar-4a072b293/"
                className="social-media-link"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a
                href="https://github.com/tanmaypawar23"
                className="social-media-link"
              >
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="" className="social-media-link">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="" className="social-media-link">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
            </div>
          </div>
          <div className="col">
            <p> Quick Links </p>
            <a href="">Home</a>
            <br />
            <a href="">About Us</a>
            <br />
            <a href="">Support</a>
            <br />
            <a href="">All Request</a>
            <br />
          </div>
          <div className="col">
            <p>Resource</p>
            <a href="">Help</a> <br />
            <a href="">FAQ</a>
            <br />
            <a href="">Privacy</a>
            <br />
            <a href="">Terms</a>
            <br />
          </div>
          <div className="col">
            <p>Contact</p>
            <a href="">
              <i className="fa-solid fa-envelope"></i>
              tanmaypawar230705@gmail.com-
            </a>
            <br />
            <a href="">
              {" "}
              <i className="fa-solid fa-phone"></i>+91 9403281305
            </a>
            <br />
            <a href="">Pune, Maharashtra</a>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
