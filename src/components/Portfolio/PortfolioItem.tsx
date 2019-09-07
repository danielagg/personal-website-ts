import React from "react";
import "./style.css";
import { PortfolioItemDetails } from "../../state/PortfolioState";

// Components
import Button, { Variant, Thickness } from "../Shared/Button/Button";

type PortfolioItemProp = {
  item: PortfolioItemDetails;
  height: number;
  width: number;
};

const PortfolioItem = ({ item, height, width }: PortfolioItemProp) => {
  return (
    <div
      className="bg-white p-8 primary-blue"
      style={{ height: `${height}vh`, width: `${width}vw` }}
    >
      <p className="text-xl uppercase font-raleway-bold wide-letter-spacing">
        {item.name}
      </p>
      <p className="mt-2">{item.description}</p>
      <div className="mt-4 flex">
        <Button
          caption="details"
          variant={Variant.Blue}
          thickness={Thickness.Wider}
        />
        <div className="ml-2">
          <Button
            caption="github"
            variant={Variant.BlueBorderOnly}
            thickness={Thickness.Wider}
          />
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;
