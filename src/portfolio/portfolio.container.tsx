import React from "react";

export const Portfolio = () => {
  return (
    <div className="w-full lg:w-3/4 px-6 lg:px-0 mt-12 lg:mt-24">
      <div
        id="portfolio"
        className="text-4xl lg:text-6xl mb-4 lg:mb-12 text-gray-200 font-bold lg:px-4 uppercase"
      >
        Portfolio
      </div>
      <div className="flex flex-wrap">
        <Tile />
        <Tile />
        <Tile />
        <Tile />
      </div>
    </div>
  );
};

const Tile = () => {
  return (
    <div className="w-full lg:w-1/2">
      <div className="my-4 lg:mx-4 px-12 lg:px-32 py-12 lg:py-48 uppercase text-4xl text-gray-300 font-bold bg-gray-200 flex items-center justify-center text-center">
        Coming Soon!
      </div>
    </div>
  );
};
