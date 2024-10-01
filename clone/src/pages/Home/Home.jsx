import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import hero_banner from "../../assets/hero_banner.jpg";
import hero_title from "../../assets/hero_title.png";
import play_icon from "../../assets/play_icon.png";
import info_icon from "../../assets/info_icon.png";
import TitleCards from "../../components/TitleCards/TitleCards";

const Home = () => {
  return (
    <div className="home">
      <div className="hero">
        <Navbar />
        <img src={hero_banner} alt="" className="banner-img" />
        <div className="hero-caption">
          <img src={hero_title} alt="" className="caption-img" />
          <p>
            Grab some popcorn and get ready to binge! From thrilling dramas to
            heartwarming comedies, Netflix offers a movie for every mood.
          </p>
          <div className="hero-btn">
            <button className="btn">
              <img src={play_icon} alt="" />
              play
            </button>
            <button className="btn dark-btn">
              <img src={info_icon} alt="" />
              more info
            </button>
          </div>
          <TitleCards />
        </div>
      </div>
    </div>
  );
};

export default Home;
