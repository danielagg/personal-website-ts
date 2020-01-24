import React, { useEffect, useState, useContext } from "react";
import { RouteComponentProps } from "react-router";
import {
  PortfolioContext,
  PortfolioState,
  PortfolioItemDetails
} from "../../state/PortfolioState";

import PortfolioItemHeader from "./PortfolioItemHeader";
import PortfolioItemDescription from "./PortfolioItemDescription";
import PortfolioItemTechsUsed from "./PortfolioItemTechsUsed";

interface PortfolioItemPageContainerProps extends RouteComponentProps {}

export type PortfolioItemSubComponentProps = {
  item: PortfolioItemDetails;
};

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
  }, [context.projects, projectName, props.history]);

  if (currentProject) {
    return (
      <>
        <PortfolioItemHeader item={currentProject} />
        <PortfolioItemDescription item={currentProject} />
        <PortfolioItemTechsUsed item={currentProject} />
      </>
    );
  } else {
    return <></>;
  }
};

export default PortfolioItemPageContainer;
