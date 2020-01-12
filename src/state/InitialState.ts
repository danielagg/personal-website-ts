import { PortfolioState } from "./PortfolioState";

export const InitialState: PortfolioState = {
  projects: [
    {
      id: 1,
      name: "Company Event Managing Platform",
      homePageDescription:
        "A React app with an ASP.NET Core backend (w/ Entity Framework Core, GraphQL) to provide event browsing, creating and joining funcionalities. Supports identity management, user roles.\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis nisi a eros suscipit lacinia. Suspendisse eget nibh nec nulla semper semper. Proin interdum eros et nibh vestibulum, id vulputate orci pharetra. Etiam dui erat, ultricies nec porttitor ut, pretium a orci. Maecenas sed pharetra dolor.",
      detailsLink: "company-event-manager",
      githubLink: "https://github.com/danielagg/event-organizer",
      deployedAppLink: "#",
      technologies: [
        "ReactJS",
        "Redux (w/ Saga)",
        "ASP.NET Core",
        "GraphQL",
        "Entity Framework Core",
        "OAuth"
      ],
      detailedDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis nisi a eros suscipit lacinia. Suspendisse eget nibh nec nulla semper semper. Proin interdum eros et nibh vestibulum, id vulputate orci pharetra. Etiam dui erat, ultricies nec porttitor ut, pretium a orci. Maecenas sed pharetra dolor.\nSuspendisse varius suscipit malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean vitae arcu fermentum, finibus purus in, consectetur sem.\nPellentesque finibus vel orci quis varius. Aliquam sed metus risus. Cras auctor augue augue. Maecenas id lacus arcu. Donec lectus lacus, gravida a vulputate a, vehicula a massa. Duis commodo sapien eu nisl cursus, id porta tellus scelerisque. Aliquam ornare id sem non consequat. Suspendisse facilisis elit nec neque vestibulum convallis."
    },
    {
      id: 2,
      name: "Abstract Museum",
      homePageDescription:
        "A web app for a made-up museum, using a React frontend with a NodeJS backend, using GraphQL. The goal of this project was to challenge myself to build a unique, abstract but easy-to-use user interface (break out of the typical Material-esque designs).",
      detailsLink: "museum",
      githubLink: "#",
      deployedAppLink: "#",
      technologies: ["React", "GraphQL", "NodeJS", "Express", "Typescript"],
      detailedDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis nisi a eros suscipit lacinia. Suspendisse eget nibh nec nulla semper semper. Proin interdum eros et nibh vestibulum, id vulputate orci pharetra. Etiam dui erat, ultricies nec porttitor ut, pretium a orci. Maecenas sed pharetra dolor.\nSuspendisse varius suscipit malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean vitae arcu fermentum, finibus purus in, consectetur sem.\nPellentesque finibus vel orci quis varius. Aliquam sed metus risus. Cras auctor augue augue. Maecenas id lacus arcu. Donec lectus lacus, gravida a vulputate a, vehicula a massa. Duis commodo sapien eu nisl cursus, id porta tellus scelerisque. Aliquam ornare id sem non consequat. Suspendisse facilisis elit nec neque vestibulum convallis."
    },
    {
      id: 3,
      name: "Kalodile - Music Gear Rental Service",
      homePageDescription:
        "An application with a VueJS frontend and NodeJS backend.",
      detailsLink: "kalodile",
      githubLink: "https://github.com/danielagg/kalodile-ts-vue",
      deployedAppLink: "#",
      technologies: ["VueJS", "NodeJS", "Express", "Typescript"],
      detailedDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis nisi a eros suscipit lacinia. Suspendisse eget nibh nec nulla semper semper. Proin interdum eros et nibh vestibulum, id vulputate orci pharetra. Etiam dui erat, ultricies nec porttitor ut, pretium a orci. Maecenas sed pharetra dolor.\nSuspendisse varius suscipit malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean vitae arcu fermentum, finibus purus in, consectetur sem.\nPellentesque finibus vel orci quis varius. Aliquam sed metus risus. Cras auctor augue augue. Maecenas id lacus arcu. Donec lectus lacus, gravida a vulputate a, vehicula a massa. Duis commodo sapien eu nisl cursus, id porta tellus scelerisque. Aliquam ornare id sem non consequat. Suspendisse facilisis elit nec neque vestibulum convallis."
    },
    {
      id: 4,
      name: "OData w/ ASP.NET Core reference app",
      homePageDescription:
        "A reference web application for OData usage with .NET Core.",
      detailsLink: "asp-net-core-odata-ref-app",
      githubLink: "#",
      deployedAppLink: "#",
      technologies: ["OData", "ASP.NET Core", "Entity Framework Core"],
      detailedDescription:
        "I found that creating OData supported endpoints in an ASP.NET Core application can be challenging - one has to understand the convention based mechanisms, namings, services, etc.\nThis application is a small ASP.NET Core backend app with Entity Framework Core, which has a few OData endpoints to query playlists, albums, tracks and artists. It supports numerous standard OData features, such as $filter, $select, and has examples for handling complex objects and such. I tried to cover the use cases which I faced during my professional projects."
    },
    {
      id: 5,
      name: "Personal Website",
      homePageDescription:
        "This very site, (currently) a React app. I use this project to try and mess around with various technologies.",
      detailsLink: "personal-site",
      githubLink: "https://github.com/danielagg/personal-website-ts",
      deployedAppLink: "https://danielagg.com",
      technologies: [
        "ReactJS",
        "Context API",
        "Hooks",
        "Tailwind CSS",
        "ZEIT integration"
      ],
      detailedDescription:
        "My ever-changing personal website: I use this project to play around with frontend techs.\nAs of right now, the site is using ReactJS with Typescript (create-react-app --typescript). TailwindCSS is used to design the components (CSS in JS). Since this is small project, I decided to skip using Redux (there is no real need to use middlewares, Sagas). Instead, the application uses React's Context API which actually provides quite a similar developer experience. There is no backend at the moment.\nThe site is deployed to my domain (danielagg.com) after each commit to the master branch, by using Zeit."
    }
  ]
};
