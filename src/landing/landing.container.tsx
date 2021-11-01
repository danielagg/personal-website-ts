import React from "react";
import { Intro } from "./intro";
import { Navbar } from "./navbar";

export const Landing = () => {
  return (
    <div className="w-3/4 mt-12 lg:mt-20 px-4">
      <Navbar />
      <Intro />
    </div>
  );
};
