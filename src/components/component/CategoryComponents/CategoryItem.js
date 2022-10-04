import React from "react";
import "./styles/categoryItem.scss";
import { imgs } from "../../../data/data";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import EventIcon from "@mui/icons-material/Event";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import { Link } from "react-router-dom";

const CategoryItem = () => {
  return (
    <div className="container-item">
      <h1>Nha Trang Tour</h1>
      <div className="wrapper-boxitem">
        {imgs.map((item) => {
          return (
            <div className="card">
              <img src={item.img} alt={item.desc} />
              <span className="desc">{item.desc}</span>
              <h3>{item.desc}</h3>
              <div className="box-tour">
                <div className="tour-detail">
                  <p>
                    <span>
                      <AccessTimeIcon />
                    </span>
                    Duration: 4 DAYS 3 NIGHT
                  </p>
                  <p>
                    <span>
                      <EventIcon />
                    </span>
                    Departure Date: Every Thursday
                  </p>
                  <p>
                    <span>
                      <AirplanemodeActiveIcon />
                    </span>
                    Transport: VIETJET AIR
                  </p>
                  <p>
                    <span>
                      <HomeWorkIcon />
                    </span>
                    Hotel: 3*
                  </p>
                </div>
                <Link to="/category/baiviet/1">
                  <button>More Detail</button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryItem;
