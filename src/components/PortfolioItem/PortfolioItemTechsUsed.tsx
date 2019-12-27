import React from "react";
import { PortfolioItemSubComponentProps } from "./PortfolioItemPageContainer";

const PortfolioItemTechsUsed = ({ item }: PortfolioItemSubComponentProps) => {
  return (
    <div className="container lg:p-32 lg:flex">
      <ul className="pt-6 px-12 lg:px-0 lg:pr-12 lg:flex-none lg:flex-grow text-gray-lighter list-disc lg:list-none">
        {item.technologies.map((tech, index) => {
          return (
            <li key={index} className={`${index !== 0 ? "mt-6" : ""}`}>
              <p>{tech}</p>
            </li>
          );
        })}
      </ul>

      <div className="px-8 pt-8 lg:pl-32 lg:pt-0 text-gray">
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
