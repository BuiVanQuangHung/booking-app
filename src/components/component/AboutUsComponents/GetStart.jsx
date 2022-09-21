import React from "react";
import "./styles/getstart.scss";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import WhereToVoteIcon from "@mui/icons-material/WhereToVote";
import FavoriteIcon from "@mui/icons-material/Favorite";

const GetStart = () => {
  return (
    <>
      <h1 className="getstart-h1" data-aos="flip-left">
        How to get started?
      </h1>
      <div className="getstart">
        <div className="box" data-aos="fade-right">
          <p>
            <PersonAddAltIcon fontSize="large" color="secondary" />
          </p>
          <h3>Create your account</h3>
          <p>Complete your account with some basic information</p>
        </div>
        <div className="box" data-aos="fade-right">
          <p>
            <TravelExploreIcon fontSize="large" color="secondary" />
          </p>
          <h3>Plan your journey</h3>
          <p>
            Planing your journey like: where you want to go and how many money
            do you want to pay for
          </p>
        </div>
        <div className="box" data-aos="fade-left">
          <p>
            <WhereToVoteIcon fontSize="large" color="secondary" />
          </p>
          <h3>Choose your tour</h3>
          <p>Open our website and select place you want to choose</p>
        </div>
        <div className="box" data-aos="fade-left">
          <p>
            <FavoriteIcon fontSize="large" color="secondary" />
          </p>
          <h3>Enjoy your journey</h3>
          <p>Enjoy your journey and please vote 5 start for our service</p>
        </div>
      </div>
    </>
  );
};

export default GetStart;
