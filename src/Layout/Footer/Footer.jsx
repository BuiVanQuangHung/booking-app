import React from "react";
import { Link } from "react-router-dom";
import "../style/footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-detail">
        <div className="logo">Tour.ing</div>
        <div className="infor-detail">
          <ul className="wrap-title">
            <li className="title">
              <p>Menu</p>
              <ul className="title-detail">
                <li>
                  <Link to="/">home</Link>
                </li>
                <li>
                  <Link to="/">about us</Link>
                </li>
              </ul>
            </li>
            <li className="title">
              <p>Booking plan</p>
              <ul className="title-detail">
                <li>
                  <Link to="/">personal trip</Link>
                </li>
                <li>
                  <Link to="/">group trip</Link>
                </li>
              </ul>
            </li>
            <li className="title">
              <p>further information</p>
              <ul className="title-detail">
                <li>
                  <Link to="/">termms & conditions</Link>
                </li>
                <li>
                  <Link to="/">ptivacy policy</Link>
                </li>
              </ul>
            </li>
            <li className="title">
              <p>get app</p>
              <ul className="title-detail">
                <li>
                  <Link to="/">app store</Link>
                </li>
                <li>
                  <Link to="/">google play store</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <p className="footer-bottom">
        Tour.ing 2022,You only live once, but if you do it right, once is enough
      </p>
    </div>
  );
};

export default Footer;
