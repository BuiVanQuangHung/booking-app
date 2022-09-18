import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../style/header.scss";

const Header = () => {
  const location = useLocation().pathname;
  return (
    <div className="header">
      <div className="logo">Tour.ing</div>
      <div className="navbar">
        <ul>
          <li>
            <Link to="/" className={location === "/" && "active"}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/bookingform"
              className={location === "/bookingform" && "active"}
            >
              booking form
            </Link>
          </li>
          <li>
            <Link
              to="/category"
              className={location === "/category" && "active"}
            >
              category
            </Link>
          </li>
          <li>
            <Link to="/aboutus" className={location === "/aboutus" && "active"}>
              about us
            </Link>
          </li>
        </ul>
      </div>
      <div className="register">
        <button>login</button>
        <button>sign up</button>
      </div>
    </div>
  );
};

export default Header;
