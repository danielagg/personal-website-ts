import React, { createContext, useReducer } from "react";

export const PortfolioContext = createContext();

const PortfolioProvider = ({ reducer, initialState, children }) => (
  <PortfolioContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </PortfolioContext.Provider>
);
export default PortfolioProvider;
