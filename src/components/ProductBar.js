import React, { useState } from "react";

import iphoneIcon from "../assets/icons8-iphone-14-50.png";

import "../styles/productbar.css";

const icons = [iphoneIcon, iphoneIcon, iphoneIcon, iphoneIcon, iphoneIcon];

const ProductBar = () => {
  const [selectedId, setSelectedId] = useState(null);
  return (
    <div className="productbar-container">
      {icons.map((icon, index) => {
        return (
          <ProductBarItem
            key={index}
            icon={icon}
            description="iPhone 14"
            selected={selectedId === index}
            onClick={() => {
              setSelectedId(index);
            }}
          />
        );
      })}
    </div>
  );
};

const ProductBarItem = ({ icon, description, selected, onClick }) => {
  return (
    <div
      className={`productbar-item ${
        selected ? "productbar-item--selected" : ""
      }`}
      onClick={onClick}
    >
      <img
        className={`productbar-icon ${
          selected ? "productbar-icon--selected" : ""
        }`}
        src={icon}
        alt="icon"
      />
      <span>{description}</span>
    </div>
  );
};

export default ProductBar;
