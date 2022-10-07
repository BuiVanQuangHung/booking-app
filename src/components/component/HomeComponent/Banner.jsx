import React from "react";
import "./styles/banner.scss";
import banner1 from "../../../img/banner1.jpg";
import banner2 from "../../../img/banner2.jpg";
import banner3 from "../../../img/banner3.jpg";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const Banner = () => {
  //! State
  const sliderItems = [
    {
      id: 1,
      img: banner1,
      title: "SUMMER SALE",
      desc: "TRAVEL NOW",
    },
    {
      id: 2,
      img: banner2,
      title: "VIETNAM TRAVEL COLLECTION",
      desc: "TRAVEL NOW",
    },
    {
      id: 3,
      img: banner3,
      title: "BEST APP EVER",
      desc: "TRAVEL NOW",
    },
  ];
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    swipeToSlide: true,
  };

  //! Render
  return (
    <div className="container_slider" data-aos="fade-up">
      <Slider {...settings}>
        {sliderItems.map((item) => {
          return (
            <>
              <div key={item.id} className="image-list">
                <img src={item.img} alt={item.img} />
                <div className="image_list-detail">
                  <h1>{item.title}</h1>
                  <Link to="/category">
                    <button>{item.desc}</button>
                  </Link>
                </div>
              </div>
            </>
          );
        })}
      </Slider>
    </div>
  );
};

export default Banner;
