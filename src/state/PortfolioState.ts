import { createContext } from "react";

export type PortfolioItemDetails = {
  id: number;
  variant: PortfolioItemVariant;
  name: string;
  shortDescription: string;
  longDescription1: string;
  longDescription2: string;
  appLink: string;
  githubLink: string;
};

export enum PortfolioItemVariant {
  Purple,
  Orange,
  Green
}

export interface PortfolioState {
  projects: PortfolioItemDetails[];
}

export const PortfolioContext = createContext<PortfolioState>({ projects: [] });
