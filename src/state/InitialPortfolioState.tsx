export type PortfolioItemDetails = {
  id: number;
  name: string;
  description: string;
  detailsLink: string;
  githubLink: string;
};

export interface PortfolioState {
  projects: PortfolioItemDetails[];
}

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

export default InitialState;
