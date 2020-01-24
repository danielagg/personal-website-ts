import React from "react";

// Components
import LandingHeader from "./LandingHeader";
import PortfolioItemCardContainer from "../Portfolio/PortfolioItemCardContainer";
import About from "../About/About";

const LandingContainer = () => {
  return (
    <>
      <LandingHeader />
      {/* <PageSeparatorLine
        text={"projects"}
        direction={PageSeparatorDirection.Right}
      />
      <PortfolioItemCardContainer />

      <PageSeparatorLine
        text={"about me"}
        direction={PageSeparatorDirection.Left}
      />

      <About /> */}
    </>
  );
};

export default LandingContainer;
