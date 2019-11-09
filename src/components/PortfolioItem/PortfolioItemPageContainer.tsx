import React, { useContext } from "react";
import { RouteComponentProps } from "react-router";
import { PortfolioContext, PortfolioState } from "../../state/PortfolioState";

interface PortfolioItemPageContainerProps extends RouteComponentProps {}

const PortfolioItemPageContainer = (props: PortfolioItemPageContainerProps) => {
  const { projectName } = props.match.params as any;
  const context = useContext<PortfolioState>(PortfolioContext);
  const currentProject =
    context.projects.filter(function(item) {
      return item.detailsLink === projectName;
    })[0] || null;

  return (
    <div>
      <h1>{currentProject.name}</h1>
      <p>{currentProject.description}</p>
    </div>
  );
};

export default PortfolioItemPageContainer;
