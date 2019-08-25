import React, { useState } from "react";
import "./style.css";

// Components
import PortfolioItem from "./PortfolioItem";

export type PortfolioItemDetails = {
  id: number;
  name: string;
  description: string;
  detailsLink: string;
  githubLink: string;
};

const PortfolioItemContainer = () => {
  const [projects, setProjects] = useState<PortfolioItemDetails[]>([
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
  ]);

  return (
    <div>
      <h2 className="mt-24 text-white text-xl">projects I've worked on:</h2>
      <div className="container">
        <div className="card-1">
          <PortfolioItem item={projects[0]} />
        </div>
        <div className="card-2">
          <PortfolioItem item={projects[1]} />
        </div>
        <div className="card-3">
          <PortfolioItem item={projects[2]} />
        </div>
        <div className="card-4">
          <PortfolioItem item={projects[3]} />
        </div>
        <div className="card-5">
          <PortfolioItem item={projects[4]} />
        </div>
      </div>
    </div>
  );
};

export default PortfolioItemContainer;
