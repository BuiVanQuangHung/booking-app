import React from "react";
import girl from "../../../img/girl3.jpg";
import "./styles/banner.scss";

const Banner = () => {
  return (
    <div className="about-us-banner">
      <div className="box-detail" data-aos="fade-right">
        <h1>Start your day comfortably</h1>
        <p>
          Once infected with the passion for travel, there is no cure, and I
          know that I will be happy to have this disease for the rest of my
          life.Travel makes a person humble. You'll realize you've only taken
          over a very small place in the world.Travel is about discovering that
          people misunderstand other countries
        </p>
        <button className="booking">Booking Now</button>
      </div>
      <div className="box-img" data-aos="fade-left">
        <img src={girl} alt={girl} />
      </div>
    </div>
  );
};

export default Banner;
