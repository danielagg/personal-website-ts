import React from "react";
import "./style.css";

// State
import { PortfolioContext } from "./state/PortfolioState";
import { InitialState } from "./state/InitialState";

// Components
import Landing from "./components/Landing/Landing";
import PortfolioItemContainer from "./components/Portfolio/PortfolioItemContainer";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <PortfolioContext.Provider value={InitialState}>
      <div className="min-h-screen bg-primary-blue-gradient font-raleway tracking-wider">
        <div className="p-4 ml-2 lg:mx-auto lg:w-4/5">
          <Landing />
          <PortfolioItemContainer />
          <About />
          <Footer />
        </div>
      </div>
    </PortfolioContext.Provider>
  );
};

export default App;
