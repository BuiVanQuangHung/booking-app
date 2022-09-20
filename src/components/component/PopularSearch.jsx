import React from "react";
import "../styles/popularSearch.scss";

const PopularSearch = () => {
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
  return (
    <div className="container">
      <h1>
        PopularSearch
        <span />
      </h1>
      <div className="city">
        {country.map((city) => {
          return <p key={city.id}>{city.place}</p>;
        })}
      </div>
    </div>
  );
};

export default PopularSearch;
