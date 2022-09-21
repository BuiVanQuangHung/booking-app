import React from "react";
import "../components/stylesPage/home.scss";
import Banner from "../components/component/HomeComponent/Banner";
import PopularSearch from "../components/component/HomeComponent/PopularSearch";
import Category from "../components/component/HomeComponent/Category";
import Detail from "../components/component/HomeComponent/Detail";
import Destination from "../components/component/HomeComponent/Destination";
import Download from "../components/component/HomeComponent/Download";

const Home = () => {
  return (
    <>
      <div className="banner">
        <Banner />
      </div>
      <PopularSearch />
      <Category />
      <Detail />
      <Destination />
      <Download />
    </>
  );
};

export default Home;
