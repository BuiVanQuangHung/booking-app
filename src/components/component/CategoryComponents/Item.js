import React from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import EventIcon from "@mui/icons-material/Event";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import nhatrang from "../../../img/diadiem2.jpg";
import "./styles/item.scss";
import { Link } from "react-router-dom";
import BasicTabs from "../../../common/TabPanel";

const Item = () => {
  return (
    <div className="wrapper">
      <div className="banner_box">
        <div className="img-box">
          <img src={nhatrang} alt="diadiem" />
        </div>
        <div className="detail-box">
          <h1>Nha Trang</h1>
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
            <p>
              <span>
                <LightbulbIcon />
              </span>
              Code: TB4N3D-TP
            </p>
          </div>
          <Link to="/bookingform">
            <button>Book Now</button>
          </Link>
        </div>
      </div>
      <div className="wrapper-detail">
        <BasicTabs />
      </div>
    </div>
  );
};

export default Item;
