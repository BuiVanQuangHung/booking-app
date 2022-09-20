import React from "react";
import "../styles/detail.scss";
import girl from "../../img/girl1.jpg";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import TelegramIcon from "@mui/icons-material/Telegram";
import AssistantPhotoIcon from "@mui/icons-material/AssistantPhoto";

const Detail = () => {
  return (
    <div className="container-detail">
      <div className="box-img">
        <img src={girl} alt={girl} />
        <div className="detail" id="detail_1">
          <p className="icon">
            <TagFacesIcon />
          </p>
          <div className="detail-title">
            <span>5000+</span>
            <span>Custommers</span>
          </div>
        </div>
        <div className="detail" id="detail_2">
          <p className="icon">
            <TelegramIcon />
          </p>
          <div className="detail-title">
            <span>600+</span>
            <span>Destinations</span>
          </div>
        </div>
        <div className="detail" id="detail_3">
          <p className="icon">
            <AssistantPhotoIcon />
          </p>
          <div className="detail-title">
            <span>100+</span>
            <span>Professtional Tour Guide</span>
          </div>
        </div>
      </div>
      <div className="box-detail">
        <h1>Why Choose Tour.ink</h1>
        <p>
          Tourink has cooperated with country that prrovide more than 600
          beutiful place for you to enjoy and relax your free time from the
          hustle and bustle of this life. Don't be worry, you won't get loss
          because Tourink provide 100+ professtional Tour Guide also. Our 5.k+
          custommers were satisfied with the services we provide. So what are
          you waiting for? Let's plan your holiday with us
        </p>
      </div>
    </div>
  );
};

export default Detail;
