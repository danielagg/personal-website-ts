import React, { useContext } from "react";
import { PortfolioContext, PortfolioState } from "../../state/PortfolioState";

// Components
import PortfolioItemCard from "./PortfolioItemCard";

const PortfolioItemCardContainer = () => {
  const context = useContext<PortfolioState>(PortfolioContext);

  return (
    <div className="container py-16">
      {context.projects.map((proj, index) => {
        return <PortfolioItemCard key={index} item={proj} />;
      })}
    </div>
  );
};

export default PortfolioItemCardContainer;
