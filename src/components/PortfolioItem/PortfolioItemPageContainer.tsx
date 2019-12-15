import React, { useEffect, useState, useContext } from "react";
import { RouteComponentProps } from "react-router";
import {
  PortfolioContext,
  PortfolioState,
  PortfolioItemDetails
} from "../../state/PortfolioState";
import Button, { ButtonVariant } from "../Shared/Button/Button";
import { NavLink } from "react-router-dom";

interface PortfolioItemPageContainerProps extends RouteComponentProps {}

const PortfolioItemPageContainer = (props: PortfolioItemPageContainerProps) => {
  const { projectName } = props.match.params as any;
  const context = useContext<PortfolioState>(PortfolioContext);

  const [
    currentProject,
    setCurrentProject
  ] = useState<PortfolioItemDetails | null>(null);

  useEffect(() => {
    const projectFromStore =
      context.projects.filter(function(item) {
        return item.detailsLink === projectName;
      })[0] || null;

    if (projectFromStore !== null) {
      setCurrentProject(projectFromStore);
    } else {
      props.history.push("/404");
    }
  }, []);

  if (currentProject) {
    return (
      <div className="text-primaryDarkBlue lg:mt-8 mb-12">
        <ul>
          {currentProject.keywords &&
            currentProject.keywords.map((item, i) => (
              <li
                className="inline-block text-xs lg:text-base mr-4 my-2 p-2 bg-primaryBlue text-white opacity-25"
                key={i}
              >
                #{item}
              </li>
            ))}
        </ul>
        <h1 className="lg:text-6xl text-2xl font-raleway-bold mt-4 lg:mt-12">
          {currentProject.name}
        </h1>
        <p className="lg:text-xl text-lg mt-4 lg:mt-8">
          {currentProject.description}
        </p>

        <div className="flex flex-col lg:flex-row mt-8 lg:mt-12">
          <div className="lg:mr-3">
            <Button
              caption="visit site"
              isNewTab={true}
              isFullWidth={true}
              url={currentProject.deployedAppLink}
              variant={ButtonVariant.FilledPrimaryColor}
            />
          </div>

          <div className="mt-2 lg:mt-0">
            <Button
              caption="view on GitHub"
              isNewTab={true}
              isFullWidth={true}
              url={currentProject.githubLink}
              variant={ButtonVariant.PrimaryColorBordered}
            />
          </div>
        </div>

        <NavLink
          to="/"
          className="block mt-6 lg:mt-4 text-sm lg:text-base text-black text-primaryBlue hover:text-lightestBlue"
        >
          &larr; or go back to the homepage.
        </NavLink>

        <div className=" flex mt-8 lg:mt-16 flex-col-reverse lg:flex-row">
          <div className="pr-4 lg:pr-24">
            <h1 className="lg:text-5xl opacity-25 text-2xl font-raleway mt-4">
              about the project
            </h1>
            <div className="text-primaryDarkBlue">
              {currentProject.detailedDescription &&
                currentProject.detailedDescription
                  .split("\n")
                  .map((item, i) => {
                    return (
                      <p
                        key={i}
                        className={`${
                          i !== 0 ? "mt-4" : "mt-2"
                        } leading-relaxed text-lg leading-loose opacity-75`}
                      >
                        {item}
                      </p>
                    );
                  })}
            </div>
          </div>
          <div className="lg:hidden flex-grow-0 flex-shrink-0">
            <p className="opacity-25 text-2xl font-raleway mt-4">techs used</p>
            <ul className="list-disc mt-4">
              {currentProject.technologies.map((item, i) => (
                <li className="ml-4 p-1 opacity-75" key={i}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden lg:shadow lg:block lg:bg-white lg:p-10 text-primaryDarkBlue font-raleway-bold flex-shrink-0 self-start mt-24 lg:w-1/3">
            <ul className="mt-4 mb-4">
              {currentProject.technologies.map((item, i) => (
                <li
                  className={`${i !== 0 ? "mt-4" : "mt-0"} text-lg ml-4 p-1`}
                  key={i}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};

export default PortfolioItemPageContainer;
