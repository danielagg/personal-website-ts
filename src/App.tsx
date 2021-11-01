import React from "react";
import { About } from "./about/about.container";
import { Landing } from "./landing/landing.container";
import { Portfolio } from "./portfolio/portfolio.container";

export const App = () => {
  return (
    <div className="w-full font-heebo relative text-gray-700">
      <div className="z-10 flex flex-col items-center justify-center">
        <Landing />
        <Portfolio />
        <About />
      </div>
    </div>
  );
};
