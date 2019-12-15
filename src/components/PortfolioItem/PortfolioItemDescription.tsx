import React from "react";
import { PortfolioItemSubComponentProps } from "./PortfolioItemPageContainer";

const PortfolioItemDescription = ({ item }: PortfolioItemSubComponentProps) => {
  return (
    <div className="container pt-16 pb-24">
      <div className="text-gray">
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
