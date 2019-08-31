import React, { useContext } from "react";
import "./style.css";
import { PortfolioContext } from "../../state/PortfolioState";
import { PortfolioState } from "../../state/InitialPortfolioState";

// Components
// import PortfolioItem from "./PortfolioItem";

const PortfolioItemContainer = () => {
  const context = useContext<PortfolioState>(PortfolioContext);

  return (
    <div>
      <h2 className="mt-24 text-white text-xl">projects I've worked on:</h2>
      {/* <div className="container">
        <div className="card-1">
          <PortfolioItem item={projects[0]} />
        </div>
        <div className="card-2">
          <PortfolioItem item={projects[1]} />
        </div>
        <div className="card-3">
          <PortfolioItem item={projects[2]} />
        </div>
        <div className="card-4">
          <PortfolioItem item={projects[3]} />
        </div>
        <div className="card-5">
          <PortfolioItem item={projects[4]} />
        </div>
      </div> */}
    </div>
  );
};

export default PortfolioItemContainer;
