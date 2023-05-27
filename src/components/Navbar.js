import React from "react";

import "../styles/navbar.css";

import { DiApple } from "react-icons/di";
import { BsBag, BsSearch } from "react-icons/bs";

const navLabels = [
  "Store",
  "Mac",
  "iPad",
  "iPhone",
  "Watch",
  "AirPods",
  "TV & Home",
  "Entertainment",
  "Accessories",
  "Support",
];

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-item">
        <DiApple size="28" />
      </div>

      {navLabels.map((navLabel) => {
        return (
          <div className="navbar-item">
            <span key={navLabel}>{navLabel}</span>
          </div>
        );
      })}
      <div className="navbar-item">
        <BsSearch />
      </div>
      <div className="navbar-item">
        <BsBag />
      </div>
    </div>
  );
};

export default Navbar;
