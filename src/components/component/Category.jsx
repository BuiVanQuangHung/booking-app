import React from "react";
import Slider from "react-slick";
import "../styles/category.scss";
import danang from "../../img/diadiem1.jpg";
import nhatrang from "../../img/diadiem2.jpg";
import hoian from "../../img/diadiem3.jpg";

const Category = () => {
  const imgs = [
    {
      id: 1,
      img: danang,
      desc: "Da Nang",
    },
    {
      id: 2,
      img: nhatrang,
      desc: "Nha Trang",
    },
    {
      id: 3,
      img: hoian,
      desc: "Hoi An",
    },
    {
      id: 4,
      img: danang,
      desc: "Da Nang",
    },
    {
      id: 5,
      img: nhatrang,
      desc: "Nha Trang",
    },
    {
      id: 6,
      img: hoian,
      desc: "Hoi An",
    },
  ];
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
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <SampleNextArrow className="nextArrow" />,
    prevArrow: <SamplePrevArrow className="prevArrow" />,
  };
  return (
    <div className="container-carousel">
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
                <>
                  <div key={item.id} className="image-list">
                    <img src={item.img} alt={item.img} />
                  </div>
                  <p>{item.desc}</p>
                </>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Category;
