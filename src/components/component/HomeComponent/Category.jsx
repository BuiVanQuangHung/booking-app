import React from "react";
import Slider from "react-slick";
import "./styles/category.scss";
import { imgs } from "../../../data/data.js";
import { Link } from "react-router-dom";

const Category = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        onClick={onClick}
        style={{ ...style, display: "none" }}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        onClick={onClick}
        style={{ ...style, display: "none" }}
      />
    );
  }
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    swipeToSlide: true,
    nextArrow: <SampleNextArrow className="nextArrow" />,
    prevArrow: <SamplePrevArrow className="prevArrow" />,
  };
  return (
    <div className="container-carousel" data-aos="zoom-out-left">
      <div className="category-title">
        <h1>Categories</h1>
        <p>
          Much destinations here but don't be confuse! It's already grouped by
          category
        </p>
      </div>
      <span />
      <div className="carousel">
        <div className="slider">
          <Slider {...settings}>
            {imgs.map((item) => {
              return (
                <Link to="/category/baiviet">
                  <div key={item.id} className="image-list">
                    <img src={item.img} alt={item.img} />
                  </div>
                  <p>{item.desc}</p>
                </Link>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Category;
