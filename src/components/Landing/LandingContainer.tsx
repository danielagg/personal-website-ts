import React from "react";

// Components
import LandingHeader from "./LandingHeader";
import PortfolioItemCardContainer from "../Portfolio/PortfolioItemCardContainer";
import About from "../About/About";
import Footer from "../Footer/Footer";

const LandingContainer = () => {
  return (
    <>
      <LandingHeader />
      <PortfolioItemCardContainer />
      <About />
      <Footer />
    </>
  );
};

export default LandingContainer;
