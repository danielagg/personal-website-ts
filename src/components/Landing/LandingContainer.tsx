import React from "react";

// Components
import LandingHeader from "./LandingHeader";
import PortfolioItemCardContainer from "../Portfolio/PortfolioItemCardContainer";
import About from "../About/About";

const LandingContainer = () => {
  return (
    <>
      <LandingHeader />
      <PortfolioItemCardContainer />
      <About />
    </>
  );
};

export default LandingContainer;
