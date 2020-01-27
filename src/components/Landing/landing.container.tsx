import React from "react";
import PortfolioContainer from "../Portfolio/portfolio.container";
import Landing from "./landing.component";
import About from "../About/about.component";

const LandingContainer = () => {
  return (
    <>
      <Landing />
      <PortfolioContainer />
      {/*<About /> */}
    </>
  );
};

export default LandingContainer;
