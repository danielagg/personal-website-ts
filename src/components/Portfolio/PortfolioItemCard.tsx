import React from "react";
import { PortfolioItemDetails } from "../../state/PortfolioState";

// Components
import Button, { Variant, Thickness } from "../Shared/Button/Button";

type PortfolioItemCardProp = {
  item: PortfolioItemDetails;
};

const PortfolioItemCard = ({ item }: PortfolioItemCardProp) => {
  return (
    <div className="py-12">
      <h1 className="text-primary lowercase font-robotoMono font-light text-4xl">
        {item.name}
      </h1>
      <div className="text-gray">
        {item.homePageDescription.split("\n").map(desc => (
          <p className="pt-6">{desc}</p>
        ))}
      </div>
    </div>
    // <div className="relative bg-white p-6 h-full w-full shadow">
    //   <p className="text-xl text-primaryDarkBlue uppercase font-raleway-bold wide-letter-spacing">
    //     {item.name}
    //   </p>
    //   <p className="mt-2 mb-16 text-primaryBlue">{item.description}</p>
    //   <div className="absolute bottom-0 mb-6 flex">
    //     <Button
    //       caption="details"
    //       url={`/projects/${item.detailsLink}`}
    //       variant={Variant.Blue}
    //       thickness={Thickness.Wider}
    //     />
    //     <div className="ml-2">
    //       <Button
    //         caption="github"
    //         isNewTab={true}
    //         url={item.githubLink}
    //         variant={Variant.BlueBorderOnly}
    //         thickness={Thickness.Wider}
    //       />
    //     </div>
    //   </div>
    // </div>
  );
};

export default PortfolioItemCard;
