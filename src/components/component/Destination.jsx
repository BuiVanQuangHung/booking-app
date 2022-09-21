import React, { useState } from "react";
import "../styles/destination.scss";
import diadiem from "../../img/diadiem1.jpg";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PaidIcon from "@mui/icons-material/Paid";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const Destination = () => {
  const [destination, setDestination] = useState(4);
  return (
    <div className="container-destination">
      <div className="destination-title">
        <h1 data-aos="zoom-in">top Destination for you</h1>
        <p style={{ marginBottom: "5rem" }}>
          Much place suits your mood. Explore somewhere interesting and enjoy
          the vibers!
        </p>
      </div>
      <div className="wrap-card">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => {
          if (index < destination) {
            return (
              <div className="card" data-aos="zoom-in-right">
                <img src={diadiem} alt={diadiem} />
                <h2>Da nang</h2>
                <span>Beautiful place</span>
                <div className="detail-card">
                  <p>
                    <span>
                      <LocationOnIcon />
                    </span>
                    Drome,france
                  </p>
                  <p>
                    <span>
                      <PaidIcon />
                    </span>
                    150/Package
                  </p>
                </div>
                <div className="mask_icon">
                  Plan trip now <ArrowRightAltIcon />
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>
      {destination >= 8 ? null : (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button
            onClick={() => setDestination(destination + 4)}
            className="showmore"
          >
            View All Destination
          </button>
        </div>
      )}
    </div>
  );
};

export default Destination;
