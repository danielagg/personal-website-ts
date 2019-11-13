import { PortfolioState } from "./PortfolioState";

export const InitialState: PortfolioState = {
  projects: [
    {
      id: 1,
      name: "Company Event Managing Platform",
      description:
        "An app created in the MERN framework to provide event browsing, creating and joining funcionalities. Supports identity management, user roles.",
      detailsLink: "company-event-manager",
      githubLink: "https://github.com/danielagg/event-organizer",
      technologies: ["ReactJS", "Redux (w/ Saga)", "NodeJS", "MongoDB", "Tailwind CSS", "OAuth"],
      keywords: ["ReactJS", "MERN", "Tailwind CSS"],
      detailedDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis nisi a eros suscipit lacinia. Suspendisse eget nibh nec nulla semper semper. Proin interdum eros et nibh vestibulum, id vulputate orci pharetra. Etiam dui erat, ultricies nec porttitor ut, pretium a orci. Maecenas sed pharetra dolor.\nSuspendisse varius suscipit malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean vitae arcu fermentum, finibus purus in, consectetur sem.\nPellentesque finibus vel orci quis varius. Aliquam sed metus risus. Cras auctor augue augue. Maecenas id lacus arcu. Donec lectus lacus, gravida a vulputate a, vehicula a massa. Duis commodo sapien eu nisl cursus, id porta tellus scelerisque. Aliquam ornare id sem non consequat. Suspendisse facilisis elit nec neque vestibulum convallis."
    },
    {
      id: 2,
      name: "Kalodile - Music Gear Rental Service",
      description: "A web application (MERN framework), to be used as a platform to rent out musical equipment.",
      detailsLink: "kalodile",
      githubLink: "https://github.com/danielagg/kalodile-ts",
      technologies: ["ReactJS", ],
      keywords: ["ReactJS", "Docker", "MERN"],
      detailedDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis nisi a eros suscipit lacinia. Suspendisse eget nibh nec nulla semper semper. Proin interdum eros et nibh vestibulum, id vulputate orci pharetra. Etiam dui erat, ultricies nec porttitor ut, pretium a orci. Maecenas sed pharetra dolor.\nSuspendisse varius suscipit malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean vitae arcu fermentum, finibus purus in, consectetur sem.\nPellentesque finibus vel orci quis varius. Aliquam sed metus risus. Cras auctor augue augue. Maecenas id lacus arcu. Donec lectus lacus, gravida a vulputate a, vehicula a massa. Duis commodo sapien eu nisl cursus, id porta tellus scelerisque. Aliquam ornare id sem non consequat. Suspendisse facilisis elit nec neque vestibulum convallis."
    },
    {
      id: 3,
      name: "Spotify App",
      description: "A web application - using VueJS -, consuming Spotify's API.",
      detailsLink: "spotify-app",
      githubLink: "#",
      technologies: ["VueJs", "3rd Party API"],
      keywords: ["VueJS"],
      detailedDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis nisi a eros suscipit lacinia. Suspendisse eget nibh nec nulla semper semper. Proin interdum eros et nibh vestibulum, id vulputate orci pharetra. Etiam dui erat, ultricies nec porttitor ut, pretium a orci. Maecenas sed pharetra dolor.\nSuspendisse varius suscipit malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean vitae arcu fermentum, finibus purus in, consectetur sem.\nPellentesque finibus vel orci quis varius. Aliquam sed metus risus. Cras auctor augue augue. Maecenas id lacus arcu. Donec lectus lacus, gravida a vulputate a, vehicula a massa. Duis commodo sapien eu nisl cursus, id porta tellus scelerisque. Aliquam ornare id sem non consequat. Suspendisse facilisis elit nec neque vestibulum convallis."
    },
    {
      id: 4,
      name: "Personal Website",
      description: "A simple React app; this exact site.",
      detailsLink: "personal-site",
      githubLink: "https://github.com/danielagg/personal-website-ts",
      technologies: ["ReactJS (w/ Context API)", "Tailwind CSS", "ZEIT integration"],
      keywords: [],
      detailedDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis nisi a eros suscipit lacinia. Suspendisse eget nibh nec nulla semper semper. Proin interdum eros et nibh vestibulum, id vulputate orci pharetra. Etiam dui erat, ultricies nec porttitor ut, pretium a orci. Maecenas sed pharetra dolor.\nSuspendisse varius suscipit malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean vitae arcu fermentum, finibus purus in, consectetur sem.\nPellentesque finibus vel orci quis varius. Aliquam sed metus risus. Cras auctor augue augue. Maecenas id lacus arcu. Donec lectus lacus, gravida a vulputate a, vehicula a massa. Duis commodo sapien eu nisl cursus, id porta tellus scelerisque. Aliquam ornare id sem non consequat. Suspendisse facilisis elit nec neque vestibulum convallis."
    },
    {
      id: 5,
      name: "Sertave - Furniture Store",
      description: "A full stack application with an ASP.NET Core backend, and React frontend.",
      detailsLink: "sertave",
      githubLink: "https://github.com/danielagg/sertave-amplifications",
      technologies: ["ASP.NET Core", "Entity Framework Core", "React", "Redux (w/ Saga)", "OAuth"],
      keywords: ["ASP.NET Core", "React"],
      detailedDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis nisi a eros suscipit lacinia. Suspendisse eget nibh nec nulla semper semper. Proin interdum eros et nibh vestibulum, id vulputate orci pharetra. Etiam dui erat, ultricies nec porttitor ut, pretium a orci. Maecenas sed pharetra dolor.\nSuspendisse varius suscipit malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean vitae arcu fermentum, finibus purus in, consectetur sem.\nPellentesque finibus vel orci quis varius. Aliquam sed metus risus. Cras auctor augue augue. Maecenas id lacus arcu. Donec lectus lacus, gravida a vulputate a, vehicula a massa. Duis commodo sapien eu nisl cursus, id porta tellus scelerisque. Aliquam ornare id sem non consequat. Suspendisse facilisis elit nec neque vestibulum convallis."
    }
  ]
};
