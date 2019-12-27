import React, { useContext, useState } from "react";
import { PortfolioContext, PortfolioState } from "../../state/PortfolioState";

// Components
import PortfolioItemCard from "./PortfolioItemCard";
import Button, { ButtonVariant } from "../Shared/Button/Button";

const PortfolioItemCardContainer = () => {
  const context = useContext<PortfolioState>(PortfolioContext);

  const loadMoreIncrementBy = 3;

  const [itemsToDisplay, setItemsToDisplay] = useState(
    context.projects.slice(0, loadMoreIncrementBy)
  );
  const [areAllProjectsLoaded, setAreAllProjectsLoaded] = useState(false);

  const onClick = (): void => {
    if (
      context.projects.length >=
      itemsToDisplay.length + loadMoreIncrementBy
    ) {
      setItemsToDisplay(
        context.projects.slice(0, itemsToDisplay.length + loadMoreIncrementBy)
      );
      setAreAllProjectsLoaded(
        itemsToDisplay.length === context.projects.length
      );
    } else {
      setItemsToDisplay(context.projects);
      setAreAllProjectsLoaded(true);
    }
  };

  return (
    <div className="container lg:py-16 lg:px-32 px-8 pt-4 pb-16">
      {itemsToDisplay.map((proj, index) => {
        return <PortfolioItemCard key={index} item={proj} />;
      })}
      {areAllProjectsLoaded === false ? (
        <div className="mb-8 lg:mb-4">
          <Button
            caption="load more &rarr;"
            onClick={onClick}
            variant={ButtonVariant.LightGrayBordered}
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default PortfolioItemCardContainer;
