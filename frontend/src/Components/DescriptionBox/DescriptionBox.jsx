import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionBox">
      <div className="descriptionBox-navigator">
        <div className="descriptionBox-nav-box">Description</div>
        <div className="descriptionBox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionBox-description">
        <p>
          Discover fashion for the whole family on our e-commerce platform! From
          trendy men's and women's clothing to adorable kids' outfits, find your
          perfect style with ease. Shop confidently with secure payments and
          fast delivery. Your fashion journey starts here!
        </p>
        <p>
          Browse our curated selection of stylish apparel for men, women, and
          kids. With a diverse range of options and convenient shopping
          features, finding your next favorite outfit is effortless. Elevate
          your wardrobe today!
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
