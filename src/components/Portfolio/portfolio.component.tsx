import React from "react";
import {
  PortfolioItemDetails,
  PortfolioItemVariant
} from "../../state/PortfolioState";

interface PortfolioItemCardProp {
  project: PortfolioItemDetails;
}

const PortfolioItem = ({ project }: PortfolioItemCardProp) => {
  const getVariantColor = () => {
    switch (project.variant) {
      case PortfolioItemVariant.Purple:
        return "#8109C6";
      case PortfolioItemVariant.Orange:
        return "#FC6E00";
      case PortfolioItemVariant.Green:
        return "#30921B";
      default:
        return "black";
    }
  };

  return (
    <div
      className={"border-l-9 min-h-screen"}
      style={{ borderColor: `${getVariantColor()}` }}
    >
      <div className={"container py-24 px-12"}>
        <h1 className={"text-white text-7xl font-black tracking-tighter"}>
          {project.name}
        </h1>
        <h2 className={"text-white text-2xl"}>{project.shortDescription}</h2>
        <ul
          className={"flex mt-2 text-xl"}
          style={{ color: `${getVariantColor()}` }}
        >
          <li>View App</li>
          <li className={"ml-6"}>View Source</li>
        </ul>

        <div className={"w-4/6 mt-16 flex text-gray space-between"}>
          <p className={""}>{project.longDescription1}</p>
          <p className={"ml-16"}>{project.longDescription2}</p>
        </div>
      </div>
      {/* <h1>{project.id}</h1> */}
    </div>
  );
};

export default PortfolioItem;
