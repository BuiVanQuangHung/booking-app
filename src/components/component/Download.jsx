import React from "react";
import "../styles/download.scss";
import download from "../../img/download.png";
import download2 from "../../img/download2.png";

const Download = () => {
  return (
    <div className="download_container" data-aos="zoom-in-down">
      <div className="download">
        <h1>
          Download the <span>Tour.ink</span> app now!
        </h1>
        <p>Get the latest update from us and easier booking for sure</p>
        <div className="img_download">
          <img src={download} alt={download} />
          <img src={download2} alt={download} />
        </div>
      </div>
    </div>
  );
};

export default Download;
