import { createContext } from "react";

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

export const PortfolioContext = createContext<PortfolioState>({ projects: [] });
