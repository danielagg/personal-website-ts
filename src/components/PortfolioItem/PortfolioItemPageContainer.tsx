import React, { useEffect, useState, useContext } from "react";
import { RouteComponentProps } from "react-router";
import {
  PortfolioContext,
  PortfolioState,
  PortfolioItemDetails
} from "../../state/PortfolioState";
import Button, { Variant, Thickness } from "../Shared/Button/Button";

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
      <div className="text-white">
        <ul>
          {currentProject.keywords && currentProject.keywords.map((item, i) => <li className="inline-block mr-4 my-2 p-2 bg-purple-600 opacity-75" key={i}>#{item}</li> )}
        </ul>
        <h1 className="text-5xl mt-6">{currentProject.name}</h1>
        <p className="text-xl mt-8">{currentProject.description}</p>

        <div className="flex mt-12">
          <div className="mr-2">
            <Button
                  caption="visit site"
                  url="#"
                  variant={Variant.WhiteBorderOnly}
                  thickness={Thickness.Widest}
                />
          </div>
          
          <Button
              caption="view on GitHub"
              url="#"
              variant={Variant.White}
              thickness={Thickness.Wider}
            />
        </div>

        <div className="flex mt-12">
          <div className="flex-grow-0 flex-shrink-0 w-1/4">
            <p className="text-2xl">techs used</p>
            <ul className="list-disc mt-4">
              {currentProject.technologies.map((item, i) => <li className="ml-4 p-1" key={i}>{item}</li> )}
            </ul>
          </div>

          <div>
            {currentProject.detailedDescription && currentProject.detailedDescription.split('\n').map((item, i) => {
              return <p key={i} className={`${i !== 0 ? "mt-4" : "mt-2"} opacity-75 leading-relaxed`}>{item}</p>;
            })}
          </div>
        </div>

      </div>
    );
  } else {
    return <></>;
  }
};

export default PortfolioItemPageContainer;
