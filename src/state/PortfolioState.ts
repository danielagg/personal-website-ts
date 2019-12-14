import { createContext } from "react";

export type PortfolioItemDetails = {
  id: number;
  name: string;
  homePageDescription: string;
  description: string;
  detailedDescription?: string;
  detailsLink: string;
  githubLink: string;
  deployedAppLink: string;
  technologies: string[];
  keywords?: string[];
};

export interface PortfolioState {
  projects: PortfolioItemDetails[];
}

export const PortfolioContext = createContext<PortfolioState>({ projects: [] });
