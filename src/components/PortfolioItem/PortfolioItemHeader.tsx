import React from "react";
import Button, { ButtonVariant } from "../Shared/Button/Button";
import { PortfolioItemSubComponentProps } from "./PortfolioItemPageContainer";

const PortfolioItemHeader = ({ item }: PortfolioItemSubComponentProps) => {
  return (
    <div className="container px-8 py-8 lg:pt-24 lg:px-32">
      <h1 className="moveInFromLeftAnimation text-primary lowercase font-robotoMono font-light text-4xl">
        {item.name}
      </h1>
      <p className="moveInFromTopAnimation text-gray-lighter mt-4 lg:mt-16">
        {item.homePageDescription}
      </p>

      <div className="moveInFromLeftAnimation">
        <div className="flex flex-col lg:flex-row mt-8 lg:mt-16">
          <div className="lg:mr-3">
            <Button
              caption="visit site"
              isNewTab={true}
              isFullWidth={true}
              url={item.deployedAppLink}
              variant={ButtonVariant.FilledPrimaryColor}
            />
          </div>

          <div className="mt-8 lg:mt-0">
            <Button
              caption="view on GitHub"
              isNewTab={true}
              isFullWidth={true}
              url={item.githubLink}
              variant={ButtonVariant.PrimaryColorBordered}
            />
          </div>
        </div>

        <div className="mt-8">
          <Button
            caption="&larr; back to homepage"
            url={`/`}
            variant={ButtonVariant.PlainPrimary}
          />
        </div>
      </div>
    </div>
  );
};

export default PortfolioItemHeader;
