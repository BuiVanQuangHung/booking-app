import React from "react";
import "./styles/banner.scss";
import banner1 from "../../../img/banner1.jpg";
import banner2 from "../../../img/banner2.jpg";
import banner3 from "../../../img/banner3.jpg";
import Slider from "react-slick";

const Banner = () => {
  //! State
  const sliderItems = [
    {
      id: 1,
      img: banner1,
      title: "SUMMER SALE",
      desc: "DON'T COMPROMISE ON STYLE",
    },
    {
      id: 2,
      img: banner2,
      title: "AUTUMN COLLECTION",
      desc: "DON'T COMPROMISE ON STYLE",
    },
    {
      id: 3,
      img: banner3,
      title: "LOUNGEWEAR LOVE",
      desc: "DON'T COMPROMISE ON STYLE",
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
                  <p>{item.desc}</p>
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
