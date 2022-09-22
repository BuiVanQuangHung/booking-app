import React from "react";
import "../components/stylesPage/home.scss";
import Banner from "../components/component/HomeComponent/Banner";
import PopularSearch from "../components/component/HomeComponent/PopularSearch";
import Category from "../components/component/HomeComponent/Category";
import Destination from "../components/component/HomeComponent/Destination";
import Download from "../components/component/HomeComponent/Download";
import AutocompleteComponent from "../components/component/HomeComponent/Autocomplete";

const Home = () => {
  return (
    <>
      <div className="banner">
        <Banner />
      </div>
      <AutocompleteComponent />
      <PopularSearch />
      <Category />
      <Destination />
      <Download />
    </>
  );
};

export default Home;
