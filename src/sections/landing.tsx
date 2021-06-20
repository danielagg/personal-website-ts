import React from "react";
import { Button } from "../shared/button";

export const Landing = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-gradient-to-br from-blue-500 to-purple-500 px-6 pt-24 pb-12 xl:pb-0 xl:min-h-screen text-center xl:text-left">
      <div className="w-full xl:w-1/2 xl:-mt-32">
        <h1 className="font-bold text-5xl xl:text-8xl text-white mb-8">
          Hi, I’m Dan.
        </h1>
        <h2 className="text-2xl xl:text-3xl text-white">
          I’m a{" "}
          <span className="font-bold text-transparent bg-clip-text bg-gradient-to-br from-purple-200 to-purple">
            Full Stack Developer
          </span>
          , employed by{" "}
          <a
            href="https://apiumhub.com"
            target="_blank"
            rel="noopener"
            className="underline font-bold"
          >
            Apiumhub
          </a>
          .
        </h2>
        <p className="text-gray text-sm xl:text-lg leading-relaxed mt-12 xl:mt-12">
          I’m a Full Stack Developer from Hungary with five years of experience
          in building applications for enterprises. These days, I’m working
          primarily with React, ASP.NET Core and Azure.
        </p>
        <div className="w-full flex flex-col xl:flex-row space-y-2 xl:space-y-0 xl:space-x-4 items-center mt-12 xl:mt-16">
          <Button
            variant="filled-pink"
            text="View my Work"
            className="xl:w-1/3"
            href="#portfolio"
          />
          <Button
            variant="outlined-pink"
            text="About me"
            className="xl:w-1/3"
            href="#about"
          />
          <Button
            variant="outlined-pink"
            text="Get in Touch"
            className="xl:hidden"
          />
        </div>
      </div>
    </div>
  );
};
