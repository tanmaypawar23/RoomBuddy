import React from "react";
import "./Home.css";
import home_bg_img from "../../assets/Home_main _img.jpg";
import second_home_img from "../../assets/second_home_img.png";
import third_home_img from "../../assets/third_home_img.png";

const Home = () => {
  return (
    <div className="container mb-5">
      <div className="row mt-4 align-items-center">
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

      <div className="row mt-5 align-items-center">
        <div className="col-12 col-lg-6 order-2 order-lg-1 second-content">
          <h2>Only on RoomBuddy...</h2>

          <p>
            Find verified rooms, connect with compatible roommates, and move in
            with confidence. RoomBuddy makes shared living simple, secure, and
            stress-free.
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
  );
};

export default Home;
