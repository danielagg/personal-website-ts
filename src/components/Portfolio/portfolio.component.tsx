import React from "react";
import { PortfolioItemDetails } from "../../state/PortfolioState";

interface PortfolioItemCardProp {
  project: PortfolioItemDetails;
}

const PortfolioItem = ({ project }: PortfolioItemCardProp) => {
  return (
    <div>
      <p>{project.name}</p>
    </div>
  );
};

export default PortfolioItem;
