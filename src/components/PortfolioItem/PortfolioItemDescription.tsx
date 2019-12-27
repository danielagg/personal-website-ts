import React from "react";
import { PortfolioItemSubComponentProps } from "./PortfolioItemPageContainer";

const PortfolioItemDescription = ({ item }: PortfolioItemSubComponentProps) => {
  return (
    <div className="moveInFromRightAnimation container px-8 lg:pt-24 lg:pb-18 lg:px-32">
      <div className="text-gray mt-12 mb-8 lg:my-0">
        {item.detailedDescription &&
          item.detailedDescription.split("\n").map((line, index) => {
            return (
              <p key={index} className={`${index !== 0 ? "mt-4" : "mt-2"}`}>
                {line}
              </p>
            );
          })}
      </div>
    </div>
  );
};

export default PortfolioItemDescription;
