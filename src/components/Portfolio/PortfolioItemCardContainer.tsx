import React, { useContext } from "react";
import "./style.css";
import { PortfolioContext, PortfolioState } from "../../state/PortfolioState";

// Components
import PortfolioItem from "./PortfolioItem";

const PortfolioItemCardContainer = () => {
  const context = useContext<PortfolioState>(PortfolioContext);

  return (
    <div>
      <h2 className="mt-24 text-white text-xl">projects I've worked on</h2>
      <div className="container">
        <div className="card-1">
          <PortfolioItem item={context.projects[0]} />
        </div>
        <div className="card-2">
          <PortfolioItem item={context.projects[1]} />
        </div>
        <div className="card-3">
          <PortfolioItem item={context.projects[2]} />
        </div>
        <div className="card-4">
          <PortfolioItem item={context.projects[3]} />
        </div>
        <div className="card-5">
          <PortfolioItem item={context.projects[4]} />
        </div>
      </div>
    </div>
  );
};

export default PortfolioItemCardContainer;
