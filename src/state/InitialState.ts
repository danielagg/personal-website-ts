import { PortfolioState } from "./PortfolioState";

export const InitialState: PortfolioState = {
  projects: [
    {
      id: 1,
      name: "Company Event Managing Platform",
      description:
        "An app created in the MERN framework to provide event browsing, creating and joining funcionalities. Supports identity management, user roles.",
      detailsLink: "company-event-manager",
      githubLink: "#",
      technologies: ["ReactJS", "Redux (w/ Saga)", "NodeJS", "MongoDB", "Tailwind CSS"],
      keywords: ["ReactJS", "Context API", "Tailwind CSS"],
      detailedDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis nisi a eros suscipit lacinia. Suspendisse eget nibh nec nulla semper semper. Proin interdum eros et nibh vestibulum, id vulputate orci pharetra. Etiam dui erat, ultricies nec porttitor ut, pretium a orci. Maecenas sed pharetra dolor.\nSuspendisse varius suscipit malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean vitae arcu fermentum, finibus purus in, consectetur sem.\nPellentesque finibus vel orci quis varius. Aliquam sed metus risus. Cras auctor augue augue. Maecenas id lacus arcu. Donec lectus lacus, gravida a vulputate a, vehicula a massa. Duis commodo sapien eu nisl cursus, id porta tellus scelerisque. Aliquam ornare id sem non consequat. Suspendisse facilisis elit nec neque vestibulum convallis."
    },
    {
      id: 2,
      name: "Kalodile - Music Gear Rental Service",
      description: "A web application using the MERN framework.",
      detailsLink: "#",
      githubLink: "#",
      technologies: ["ReactJS"]
    },
    {
      id: 3,
      name: "Spotify App",
      description: "A web application consuming Spotify's API.",
      detailsLink: "#",
      githubLink: "#",
      technologies: ["ReactJS"]
    },
    {
      id: 4,
      name: "Personal Website",
      description: "A simple React app; this exact site.",
      detailsLink: "#",
      githubLink: "#",
      technologies: ["ReactJS (w/ Context API)", "Tailwind CSS", "ZEIT integration"]
    },
    {
      id: 5,
      name: "Sertave - Furniture Store",
      description: "A web application using the MERN framework.",
      detailsLink: "#",
      githubLink: "#",
      technologies: []
    }
  ]
};
