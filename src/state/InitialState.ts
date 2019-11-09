import { PortfolioState } from "./PortfolioState";

export const InitialState: PortfolioState = {
  projects: [
    {
      id: 1,
      name: "Company Event Managing Platform",
      description:
        "An app created in the MERN framework to provide event browsing, creating and joining funcionalities. Supports identity management, user roles.",
      detailsLink: "company-event-manager",
      githubLink: "#"
    },
    {
      id: 2,
      name: "Kalodile - Music Gear Rental Service",
      description: "A web application using the MERN framework.",
      detailsLink: "#",
      githubLink: "#"
    },
    {
      id: 3,
      name: "Spotify App",
      description: "A web application consuming Spotify's API.",
      detailsLink: "#",
      githubLink: "#"
    },
    {
      id: 4,
      name: "Personal Website",
      description: "A simple React app; this exact site.",
      detailsLink: "#",
      githubLink: "#"
    },
    {
      id: 5,
      name: "Sertave - Furniture Store",
      description: "A web application using the MERN framework.",
      detailsLink: "#",
      githubLink: "#"
    }
  ]
};
