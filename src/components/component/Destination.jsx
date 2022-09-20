import React from "react";
import "../styles/destination.scss";
import diadiem from "../../img/diadiem1.jpg";

const Destination = () => {
  return (
    <div className="container-destination">
      <div className="destination-title">
        <h1>top Destination for you</h1>
        <p>
          Much place suits your mood. Explore somewhere interesting and enjoy
          the vibers!
        </p>
      </div>
      {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => {
        return (
          <div className="card">
            <img src={diadiem} alt={diadiem} />
            <p></p>
            <span></span>
            <div className="">
              <p></p>
              <p></p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Destination;
