import React from "react";
import { Link } from "react-router-dom";
import "./styles/category.scss";

const CategoryCommon = ({ imgs }) => {
  return (
    <div className="wrapper-category">
      <h2>Famous place you need to visit</h2>
      <div className="wrap-boximg">
        {imgs?.map((item) => {
          return (
            <div className="box-img" key={item.id}>
              <Link to="/category/baiviet">
                <img src={item.img} alt={item.desc} />
              </Link>
              <p>{item.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryCommon;
