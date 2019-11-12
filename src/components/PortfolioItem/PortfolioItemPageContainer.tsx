import React, { useEffect, useState, useContext } from "react";
import { RouteComponentProps } from "react-router";
import {
  PortfolioContext,
  PortfolioState,
  PortfolioItemDetails
} from "../../state/PortfolioState";

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
        <h1 className="text-4xl">{currentProject.name}</h1>
        <p>{currentProject.description}</p>

        <p>Technologies used:</p>
        <ul>
          {currentProject.technologies.map(t => <li key={t}>{t}</li> )}
        </ul>
      </div>
    );
  } else {
    return <></>;
  }
};

export default PortfolioItemPageContainer;
