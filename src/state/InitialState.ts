import { PortfolioState, PortfolioItemVariant } from "./PortfolioState";

export const InitialState: PortfolioState = {
  projects: [
    {
      id: 1,
      name: "Kalodile",
      variant: PortfolioItemVariant.Purple,
      appLink: "#",
      githubLink: "#",
      longDescription1:
        "A full stack application, consisting of a ReactJS frontend (with Redux + Saga, Typescript, TailwindCSS), and an ASP.NET Core backend (EF Core, following Jason Taylor's clean architecture template). The application uses Google, Facebook and Twitter OAuth 2.0 account linking.",
      longDescription2:
        "Guest users are able to view posts, however, only logged in users are able to create new ones - and of course, only edit/remove their own posts. The application supports basic pagination, as well as sorting, filtering and searching - for these requirements, OData was used.",
      shortDescription: "A platform to swap music equipments."
    },
    {
      id: 2,
      name: "Sertave",
      variant: PortfolioItemVariant.Orange,
      appLink: "#",
      githubLink: "#",
      longDescription1:
        "Another full stack application, this time, consisting of a VueJS frontend, and a NodeJS backend. In this project, I have used GraphQL with Apollo, and the same way of handling users via Google/Facebook/Twitter's OAuth 2.0.",
      longDescription2:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis nisi a eros suscipit lacinia. Suspendisse eget nibh nec nulla semper semper. Proin interdum eros et nibh vestibulum, id vulputate orci pharetra. Etiam dui erat, ultricies nec porttitor ut, pretium a orci. Maecenas sed pharetra dolor. Suspendisse varius suscipit malesuada. Vestibulum ante ipsum",
      shortDescription: "Run of the mill eCommerce app."
    },
    {
      id: 3,
      name: "M.C.M.",
      variant: PortfolioItemVariant.Green,
      appLink: "#",
      githubLink: "#",
      longDescription1:
        "This is another full stack application with a React frontend (uses the Context API instead of Redux), and ASP.NET Core backend. My goal with this app was to create a unique, modern UI that does not look like 'just another business application'.",
      longDescription2:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis nisi a eros suscipit lacinia. Suspendisse eget nibh nec nulla semper semper. Proin interdum eros et nibh vestibulum, id vulputate orci pharetra. Etiam dui erat, ultricies nec porttitor ut, pretium a orci. Maecenas sed pharetra dolor. Suspendisse varius suscipit malesuada. Vestibulum ante ipsum primis in.",
      shortDescription: "Made Up Contemporary Museum's site."
    }
  ]
};
