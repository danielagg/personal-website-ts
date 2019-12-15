import React from "react";
import { PortfolioItemSubComponentProps } from "./PortfolioItemPageContainer";

const PortfolioItemTechsUsed = ({ item }: PortfolioItemSubComponentProps) => {
  return (
    <div className="container pt-16 pb-2 flex">
      <ul className="pt-6 pr-12 flex-none text-gray-lighter flex-grow">
        {item.technologies.map((tech, index) => {
          return (
            <li key={index} className={`${index !== 0 ? "mt-6" : ""}`}>
              <p>{tech}</p>
            </li>
          );
        })}
      </ul>

      <div className="pl-32 text-gray">
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

export default PortfolioItemTechsUsed;
