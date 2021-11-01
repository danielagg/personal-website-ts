import React from "react";
import { Button } from "../shared/button";

export const Intro = () => {
  return (
    <div className="my-24 lg:my-72 flex items-center justify-center w-full lg:w-3/4 relative">
      <div className="hidden lg:block z-0 absolute top-0 right-0 w-96 h-96 -mt-32 -mr-32 bg-gray-100 rounded-full" />
      <div className="z-10 w-full text-right flex flex-col">
        <div className="font-bold text-4xl lg:text-7xl">Hi, I'm Dan.</div>
        <div className="text-xl lg:text-2xl mt-4">
          I'm a Full Stack Developer, employed by{" "}
          <a href="https://apiumhub.com/" target="_blank" rel="noreferrer">
            <span className="font-bold text-green-500 cursor-pointer hover:text-green-400">
              Apiumhub.
            </span>
          </a>
        </div>
        <div className="mt-10 text-lg w-full lg:w-2/3 pl-0 lg:pl-24 self-end text-gray-500">
          I'm a Hungarian full stack developer, with more than five years of
          experience in building enterprise applications. These days, I'm mostly
          working with Azure, ASP.NET Core and React.
        </div>
        <div className="mt-16 flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:items-center space-x-0 lg:space-x-4 lg:self-end">
          <Button variant="filled" text="Download my CV" />
          <Button variant="outlined" text="Get in Touch" />
        </div>
      </div>
    </div>
  );
};
