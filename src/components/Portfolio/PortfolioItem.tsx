import React from "react";
import "./style.css";

const PortfolioItem = () => {
  return (
    <div className="bg-white p-8 primary-blue">
      <p className="text-xl uppercase font-raleway-bold wide-letter-spacing">
        Portfolio item
      </p>
      <p>this is the first line of description of the project</p>
      {/* <p>then this is the second line of description of the project, longer</p> */}
    </div>
  );
};

export default PortfolioItem;
