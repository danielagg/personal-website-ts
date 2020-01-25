import React from "react";
import "./style.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

// State
import { PortfolioContext } from "./state/PortfolioState";
import { InitialState } from "./state/InitialState";

// Components
import Landing from "./components/Landing/landing.component";
import NotFoundPage from "./components/NotFound/notfound.component";
import Footer from "./components/Footer/footer.component";

const App = () => {
  return (
    <div className="bg-black leading-tight font-yantramanav">
      <Router>
        <PortfolioContext.Provider value={InitialState}>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/404" component={NotFoundPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </PortfolioContext.Provider>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
