import React from "react";
import "./style.css";

// Components
import PortfolioItem from "./PortfolioItem";

const PortfolioItemContainer = () => {
  return (
    <div>
      <h2 className="mt-24 text-white text-xl">projects I've worked on:</h2>
      <div className="container">
        <div className="card-1">
          <PortfolioItem />
        </div>
        <div className="card-2">
          <PortfolioItem />
        </div>
        <div className="card-3">
          <PortfolioItem />
        </div>
        <div className="card-4">
          <PortfolioItem />
        </div>
        <div className="card-5">
          <PortfolioItem />
        </div>
      </div>
    </div>
  );
};

export default PortfolioItemContainer;
