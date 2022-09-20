import React from "react";
import Banner from "../components/component/Banner";
import Category from "../components/component/Category";
import Destination from "../components/component/Destination";
import Detail from "../components/component/Detail";
import PopularSearch from "../components/component/PopularSearch";
import "../components/stylesPage/home.scss";

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
    </>
  );
};

export default Home;
