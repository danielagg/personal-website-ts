import { createContext } from "react";

export type PortfolioItemDetails = {
  id: number;
  name: string;
  homePageDescription: string;
  detailedDescription?: string;
  detailsLink: string;
  githubLink: string;
  deployedAppLink: string;
  technologies: string[];
};

export interface PortfolioState {
  projects: PortfolioItemDetails[];
}

export const PortfolioContext = createContext<PortfolioState>({ projects: [] });
