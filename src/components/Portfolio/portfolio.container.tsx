import React, { useContext } from "react";
import { Element } from "react-scroll";
import { PortfolioState, PortfolioContext } from "../../state/PortfolioState";
import PortfolioItem from "./portfolio.component";

const PortfolioContainer = () => {
  const context = useContext<PortfolioState>(PortfolioContext);

  return (
    <Element id="projects" name="projects">
      <div>
        {context.projects.map((project, i) => {
          return <PortfolioItem key={i} project={project} />;
        })}
      </div>
    </Element>
  );
};

export default PortfolioContainer;
