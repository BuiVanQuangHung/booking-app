import { Button } from "@mui/material";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../style/header.scss";

const Header = () => {
  const location = useLocation().pathname;
  return (
    <div className="header">
      <div className="logo">tour.ing</div>
      <div className="navbar">
        <ul>
          <li>
            <Link to="/" className={location === "/" ? "underline" : ""}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/bookingform"
              className={location === "/bookingform" ? "underline" : ""}
            >
              booking form
            </Link>
          </li>
          <li>
            <Link
              to="/category"
              className={location === "/category" ? "underline" : ""}
            >
              category
            </Link>
          </li>
          <li>
            <Link
              to="/aboutus"
              className={location === "/aboutus" ? "underline" : ""}
            >
              about us
            </Link>
          </li>
        </ul>
      </div>
      <div className="register">
        <Button>login</Button>
        <Button color="secondary" variant="contained">
          sign up
        </Button>
      </div>
    </div>
  );
};

export default Header;
