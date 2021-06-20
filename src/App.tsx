import React from "react";
import { Landing } from "./sections/landing";
import { About } from "./sections/about";
import { Portfolio } from "./sections/portfolio";

export const App = () => {
  return (
    <div className="box-border">
      <Landing />
      <About />
      <Portfolio />
    </div>
  );
};
