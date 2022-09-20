import React from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import SearchIcon from "@mui/icons-material/Search";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import DateRangeIcon from "@mui/icons-material/DateRange";
import PersonIcon from "@mui/icons-material/Person";
import "../styles/banner.scss";
import banner1 from "../../img/banner1.jpg";
import banner2 from "../../img/banner2.jpg";
import banner3 from "../../img/banner3.jpg";

const Banner = () => {
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
  const widthWindow = window.innerWidth;
  const container = document.querySelector(".wrap_slider");
  let translate = 0;
  const handleClickLeft = () => {
    translate += widthWindow;
    container.style.transform = "translateX(" + translate + "px" + ")";
  };
  const handleClickRight = () => {
    translate -= widthWindow;
    container.style.transform = "translateX(" + translate + "px" + ")";
  };
  return (
    <div className="wrap_container">
      <div className="wrap_arrow">
        <span className="arrow" onClick={handleClickLeft}>
          <ChevronLeftIcon className="_left" fontSize="large" />
        </span>
        <span className="arrow" onClick={handleClickRight}>
          <ChevronRightIcon className="_right" fontSize="large" />
        </span>
      </div>
      <div className="container_slider">
        <div className="wrap_slider">
          {sliderItems.map((item) => (
            <>
              <div className="slider" key={item.id}>
                <img src={item.img} alt={item.title} />
                <div className="slider-detail">
                  <p>All you need at Touring</p>
                  <h1>{item.desc}</h1>
                  <h3>{item.title}</h3>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
      <div className="box-information">
        <div className="information location">
          <div className="location-detail detail">
            <p>Location</p>
            <input type="text" placeholder="Where do you want to go?" />
          </div>
          <div className="icon location_icon">
            <AddLocationIcon />
          </div>
        </div>
        <div className="information date">
          <div className="date-detail detail">
            <p>Date</p>
            <input type="text" placeholder="When do you want to go?" />
          </div>
          <div className="icon date_icon">
            <DateRangeIcon />
          </div>
        </div>
        <div className="information guest">
          <div className="guest-detail detail">
            <p>Guests</p>
            <input type="text" placeholder="How many people?" />
          </div>
          <div className="icon guest_icon">
            <PersonIcon />
          </div>
        </div>
        <button>
          <SearchIcon />
        </button>
      </div>
    </div>
  );
};

export default Banner;
