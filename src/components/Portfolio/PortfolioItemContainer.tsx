import React from "react";
import "./style.css";

const PortfolioItemContainer = () => {
  return (
    <div>
      <h2 className="mt-24 text-white text-xl">
        a few projects I've worked on:
      </h2>
      <div className="container">
        <div className="card card-1"></div>
        <div className="card card-2"></div>
        <div className="card card-3"></div>
        <div className="card card-4"></div>
        <div className="card card-5"></div>
      </div>
    </div>
  );
};

export default PortfolioItemContainer;
