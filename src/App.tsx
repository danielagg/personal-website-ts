import React from "react";
import "./style.css";

// State
import PortfolioProvider from "./state/PortfolioState";
import InitialState, { PortfolioState } from "./state/InitialPortfolioState";

// Components
import Landing from "./components/Landing/Landing";
import PortfolioItemContainer from "./components/Portfolio/PortfolioItemContainer";

const App = () => {
  const portfolioReducer = (state: PortfolioState, action: any) => {
    return state;
  };

  return (
    <PortfolioProvider initialState={InitialState} reducer={portfolioReducer}>
      <div className="min-h-screen bg-primary-blue-gradient font-raleway tracking-wider">
        <div className="p-4 ml-2 lg:mx-auto lg:w-4/5">
          <Landing />
          <PortfolioItemContainer />
        </div>
      </div>
    </PortfolioProvider>
  );
};

export default App;
