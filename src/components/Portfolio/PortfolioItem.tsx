import React from "react";
import "./style.css";
import { PortfolioItemDetails } from "../../state/PortfolioState";

// Components
import Button, { Variant, Thickness } from "../Shared/Button/Button";

type PortfolioItemProp = {
  item: PortfolioItemDetails;
};

const PortfolioItem = ({ item }: PortfolioItemProp) => {
  return (
    <div className="relative bg-white p-6 primary-blue h-full w-full">
      <p className="text-xl uppercase font-raleway-bold wide-letter-spacing">
        {item.name}
      </p>
      <p className="mt-2 mb-16">{item.description}</p>
      <div className="absolute bottom-0 mb-6 flex">
        <Button
          caption="details"
          url={item.detailsLink}
          variant={Variant.Blue}
          thickness={Thickness.Wider}
        />
        <div className="ml-2">
          <Button
            caption="github"
            isNewTab={true}
            url={item.githubLink}
            variant={Variant.BlueBorderOnly}
            thickness={Thickness.Wider}
          />
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;
