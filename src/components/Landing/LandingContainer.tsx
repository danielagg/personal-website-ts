import React from "react";

// Components
import LandingHeader from "./LandingHeader";
import PortfolioItemCardContainer from "../Portfolio/PortfolioItemCardContainer";
import About from "../About/About";
import Footer from "../Footer/Footer";

const LandingContainer = () => {
  return (
    <div className="min-h-screen bg-primary-blue-gradient font-raleway tracking-wider">
      <div className="p-4 ml-2 lg:mx-auto lg:w-4/5">
        <LandingHeader />
        <PortfolioItemCardContainer />
        <About />
        <Footer />
      </div>
    </div>
  );
};

export default LandingContainer;
