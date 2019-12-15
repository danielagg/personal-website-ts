import React from "react";
import { PortfolioItemDetails } from "../../state/PortfolioState";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

// Components
import Button, { ButtonVariant } from "../Shared/Button/Button";

type PortfolioItemCardProp = {
  item: PortfolioItemDetails;
};

const PortfolioItemCard = ({ item }: PortfolioItemCardProp) => {
  return (
    <div className="py-12 moveInFromRightAnimation">
      <h1 className="text-primary lowercase font-robotoMono font-light text-4xl">
        {item.name}
      </h1>
      <a
        href={item.githubLink}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary hover:text-gray-lighter mr-4"
      >
        <span className="pr-2">
          <FontAwesomeIcon icon={faGithub} />
        </span>
        view on GitHub
      </a>
      {item.homePageDescription.split("\n").map(desc => (
        <p className="pt-6 text-gray">{desc}</p>
      ))}
      <div className="mt-4">
        <Button
          caption="read more &rarr;"
          url={`/projects/${item.detailsLink}`}
          variant={ButtonVariant.PlainGray}
        />
      </div>
    </div>
  );
};

export default PortfolioItemCard;
