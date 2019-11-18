import React from "react";
import "./style.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

// State
import { PortfolioContext } from "./state/PortfolioState";
import { InitialState } from "./state/InitialState";

// Components
import LandingContainer from "./components/Landing/LandingContainer";
import PortfolioItemPageContainer from "./components/PortfolioItem/PortfolioItemPageContainer";
import NotFoundPage from "./components/NotFound/NotFoundPage";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="min-h-screen bg-primary-blue-gradient font-raleway tracking-wider">
      <div className="p-4 lg:mx-auto lg:w-4/5">
        <Router>
          <PortfolioContext.Provider value={InitialState}>
            <Switch>
              <Route exact path="/" component={LandingContainer} />
              <Route
                path="/projects/:projectName"
                component={PortfolioItemPageContainer}
              />
              <Route exact path="/404" component={NotFoundPage} />
              <Route component={NotFoundPage} />
            </Switch>
          </PortfolioContext.Provider>
        </Router>
        <Footer />
      </div>
    </div>
  );
};

export default App;
