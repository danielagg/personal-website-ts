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
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis nisi a eros suscipit lacinia. Suspendisse eget nibh nec nulla semper semper. Proin interdum eros et nibh vestibulum, id vulputate orci ph.  amet, consectetur adipiscing elit. Duis mollis nisi a eros suscipit lacinia. Suspendisse",
      longDescription2:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis nisi a eros suscipit lacinia. Suspendisse eget nibh nec nulla semper semper. Proin interdum eros et nibh vestibulum, id vulputate orci pharetra. Etiam dui erat, ultricies nec porttitor ut, pre.",
      shortDescription: "A platform to swap music equipments."
    },
    {
      id: 2,
      name: "Sertave",
      variant: PortfolioItemVariant.Orange,
      appLink: "#",
      githubLink: "#",
      longDescription1:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis nisi a eros suscipit lacinia. Suspendisse eget nibh nec nulla semper semper. Proin interdum eros et nibh vestibulum, id vulputate orci pharetra. Etiam dui erat, ultricies nec porttitor ut, pretium a orci. Maecenas sed pharetra dolor. Suspendisse varius suscipit malesuada.",
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
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis nisi a eros suscipit lacinia. Suspendisse eget nibh nec nulla semper semper. Proin interdum eros et nibh vestibulum, id vulputate orci pharetra. Etiam dui erat, ultricies nec porttitor ut, pretium a orci. Maecenas sed pharetra dolor. Suspendisse varius suscipit malesuada. ",
      longDescription2:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis nisi a eros suscipit lacinia. Suspendisse eget nibh nec nulla semper semper. Proin interdum eros et nibh vestibulum, id vulputate orci pharetra. Etiam dui erat, ultricies nec porttitor ut, pretium a orci. Maecenas sed pharetra dolor. Suspendisse varius suscipit malesuada. Vestibulum ante ipsum primis in.",
      shortDescription: "Made Up Contemporary Museum's site."
    }
  ]
};
