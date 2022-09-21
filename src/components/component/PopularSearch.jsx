import React from "react";
import "../styles/popularSearch.scss";

const PopularSearch = () => {
  //! State
  const country = [
    {
      id: 1,
      place: "Nha Trang",
    },
    {
      id: 2,
      place: "Cà Mau ",
    },
    {
      id: 3,
      place: "Cam Ranh ",
    },
    {
      id: 4,
      place: "Cao Bằng",
    },
    {
      id: 5,
      place: "Nha Trang",
    },
    {
      id: 6,
      place: "Cà Mau ",
    },
    {
      id: 7,
      place: "Cam Ranh ",
    },
    {
      id: 8,
      place: "Cao Bằng",
    },
    {
      id: 1,
      place: "Nha Trang",
    },
    {
      id: 2,
      place: "Cà Mau ",
    },
    {
      id: 3,
      place: "Cam Ranh ",
    },
    {
      id: 4,
      place: "Cao Bằng",
    },
    {
      id: 5,
      place: "Nha Trang",
    },
    {
      id: 6,
      place: "Cà Mau ",
    },
    {
      id: 7,
      place: "Cam Ranh ",
    },
    {
      id: 8,
      place: "Cao Bằng",
    },
  ];
  //! Render
  return (
    <div className="container" data-aos="zoom-in">
      <h1>
        PopularSearch
        <span />
      </h1>
      <div className="city">
        {country.map((city, index) => {
          return <p key={index}>{city.place}</p>;
        })}
      </div>
    </div>
  );
};

export default PopularSearch;
