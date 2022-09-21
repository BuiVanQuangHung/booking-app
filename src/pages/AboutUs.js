import React from "react";
import Banner from "../components/component/AboutUsComponents/Banner";
import GetStart from "../components/component/AboutUsComponents/GetStart";
import Information from "../components/component/AboutUsComponents/Information";
import Detail from "../components/component/HomeComponent/Detail";
import Download from "../components/component/HomeComponent/Download";

const AboutUs = () => {
  return (
    <div>
      <Banner />
      <Information />
      <GetStart />
      <Detail />
      <Download />
    </div>
  );
};

export default AboutUs;
