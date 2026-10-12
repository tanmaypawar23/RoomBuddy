import React from "react";
import "./Home.css";
import home_bg_img from "../../assets/Home_main _img.jpg";
import second_home_img from "../../assets/second_home_img.png";
import third_home_img from "../../assets/third_home_img.png";
import add from "../../assets/add.png";
import coins from "../../assets/coins.png";
import search from "../../assets/search.png";
import security from "../../assets/security.png";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="container mb-5">
        <div className="row mt-1 align-items-center">
          <div className="col-12 col-lg-6 tagLine">
            <h1>
              Find your room. <br />
              Find your people.
            </h1>
          </div>

          <div className="col-12 col-lg-6">
            <img
              src={home_bg_img}
              alt="home-bg-img"
              className="home-bg-img img-fluid"
            />
          </div>
        </div>

        <div className="benfits-section row">
          <div className="col-4">
            <img
              src={search}
              alt="search"
              style={{ width: "10%", paddingBottom: "1rem" }}
            />
            <h5>Find roommates everywhere</h5>
            <h6 style={{ fontSize: "0.75rem" }}>
              Explore roommate opportunities across cities and neighborhoods in
              India.
            </h6>
          </div>
          <div className="col-4">
            <img
              src={coins}
              alt="search"
              style={{ width: "10%", paddingBottom: "1rem" }}
            />
            <h5>Affordable living</h5>
            <h6 style={{ fontSize: "0.75rem" }}>
              Split rent and household expenses to enjoy comfortable living at a
              lower cost.
            </h6>
          </div>
          <div className="col-4">
            <img
              src={security}
              alt="search"
              style={{ width: "10%", paddingBottom: "1rem" }}
            />
            <h5>Live with confidence</h5>
            <h6 style={{ fontSize: "0.75rem" }}>
              Feel secure by connecting with verified roommate profiles you can
              trust.
            </h6>
          </div>
        </div>

        <div className="row mt-5 align-items-center second-section">
          <div className="col-12 col-lg-6 mb-4 mb-lg-0">
            <img
              src={second_home_img}
              alt="second_home_img"
              className="home-bg-img img-fluid"
            />
          </div>

          <div className="col-12 col-lg-6 second-content">
            <h2>Never miss your perfect room or roommate.</h2>

            <p>
              The best listings don't stay available for long. Set your
              preferences, and RoomBuddy will notify you as soon as a matching
              room or roommate is posted. Be among the first to connect and find
              your next home.
            </p>
          </div>
        </div>
        <div className="createRequest-home">
          <h1
            className="pb-3"
            style={{ color: "white", fontSize: "2rem", fontWeight: "900" }}
          >
            Share a room. Split the rent.
          </h1>
          <h6 className="pb-3" style={{ fontSize: "0.75rem" }}>
            Create your request, share your preferences,
            <br /> and connect with compatible roommates to split rent and
            living expenses.
          </h6>
          <a
            href="/"
            className="createRequet-button"
            style={{ backgroundColor: "white", borderColor: "white" }}
          >
            <img
              src={add}
              alt="add"
              style={{
                width: "1rem",
                marginRight: "0.2rem",
                backgroundColor: "white",
              }}
            />
            Create Request
          </a>
        </div>
        <div className="row mt-5 align-items-center">
          <div className="col-12 col-lg-6 order-2 order-lg-1 second-content">
            <h2>Only on RoomBuddy...</h2>

            <p>
              Find verified rooms, connect with compatible roommates, and move
              in with confidence. RoomBuddy makes shared living simple, secure,
              and stress-free.
            </p>
          </div>

          <div className="col-12 col-lg-6 order-1 order-lg-2 mb-4 mb-lg-0">
            <img
              src={third_home_img}
              alt="third_home_img"
              className="home-bg-img img-fluid"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
