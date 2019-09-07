import React, { useContext } from "react";
import "./style.css";
import { PortfolioContext, PortfolioState } from "../../state/PortfolioState";

// Components
import PortfolioItem from "./PortfolioItem";

const PortfolioItemContainer = () => {
  const context = useContext<PortfolioState>(PortfolioContext);

  return (
    <div>
      <h2 className="mt-24 text-white text-xl">projects I've worked on:</h2>
      <div className="container">
        <div className="card-1">
          <PortfolioItem item={context.projects[0]} height={60} width={50} />
        </div>
        <div className="card-2">
          <PortfolioItem item={context.projects[1]} height={40} width={30} />
        </div>
        <div className="card-3">
          <PortfolioItem item={context.projects[2]} height={40} width={25} />
        </div>
        <div className="card-4">
          <PortfolioItem item={context.projects[3]} height={40} width={24} />
        </div>
        <div className="card-5">
          <PortfolioItem item={context.projects[4]} height={60} width={30} />
        </div>
      </div>
    </div>
  );
};

export default PortfolioItemContainer;
