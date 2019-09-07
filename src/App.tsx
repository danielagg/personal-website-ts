import React from "react";
import "./style.css";

// State
import { PortfolioContext, PortfolioState } from "./state/PortfolioState";

// Components
import Landing from "./components/Landing/Landing";
import PortfolioItemContainer from "./components/Portfolio/PortfolioItemContainer";

const App = () => {
  const InitialState: PortfolioState = {
    projects: [
      {
        id: 1,
        name: "Company Event Managing Platform",
        description:
          "An app created in the MERN framework to provide event browsing, creating and joining funcionalities. Support identity management, user roles.",
        detailsLink: "event-organizer",
        githubLink: "https://github.com/danielagg/event-organizer/"
      },
      {
        id: 2,
        name: "Kalodile - Music Gear Rental Service",
        description: "A web application using the MERN framework.",
        detailsLink: "event-organizer",
        githubLink: "https://github.com/danielagg/event-organizer/"
      },
      {
        id: 3,
        name: "Sertave - Furniture Store",
        description: "A web application using the MERN framework.",
        detailsLink: "event-organizer",
        githubLink: "https://github.com/danielagg/event-organizer/"
      },
      {
        id: 4,
        name: "Personal Website",
        description: "A web application using the MERN framework.",
        detailsLink: "event-organizer",
        githubLink: "https://github.com/danielagg/event-organizer/"
      },
      {
        id: 5,
        name: "TBD",
        description: "A web application using the MERN framework.",
        detailsLink: "event-organizer",
        githubLink: "https://github.com/danielagg/event-organizer/"
      }
    ]
  };

  return (
    <PortfolioContext.Provider value={InitialState}>
      <div className="min-h-screen bg-primary-blue-gradient font-raleway tracking-wider">
        <div className="p-4 ml-2 lg:mx-auto lg:w-4/5">
          <Landing />
          <PortfolioItemContainer />
        </div>
      </div>
    </PortfolioContext.Provider>
  );
};

export default App;
