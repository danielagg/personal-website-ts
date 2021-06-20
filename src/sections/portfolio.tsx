import React, { useState } from "react";
import { Button } from "../shared/button";

interface PortfolioProject {
  id: number;
  name: string;
  techs: string[];
  desc: string;
  appUri: string;
  githubRepoUri: string;
  isComingSoon?: boolean;
}

export const Portfolio = () => {
  const [projects] = useState<PortfolioProject[]>([
    {
      id: 1,
      name: "8VALUES - HU",
      techs: ["Vue 3", "Vuex", "Typescript", "SCSS"],
      desc: "Political quiz app, with a little bit of description coming here.  Really, just a few sentences to get the attention.",
      appUri: "#",
      githubRepoUri: "#",
      isComingSoon: true,
    },
    {
      id: 2,
      name: "Coming soon!",
      techs: [],
      desc: "",
      appUri: "#",
      githubRepoUri: "#",
      isComingSoon: true,
    },
    {
      id: 3,
      name: "Coming soon!",
      techs: [],
      desc: "",
      appUri: "#",
      githubRepoUri: "#",
      isComingSoon: true,
    },
    {
      id: 4,
      name: "Coming soon!",
      techs: [],
      desc: "",
      appUri: "#",
      githubRepoUri: "#",
      isComingSoon: true,
    },
    {
      id: 5,
      name: "Coming soon!",
      techs: [],
      desc: "",
      appUri: "#",
      githubRepoUri: "#",
      isComingSoon: true,
    },
    {
      id: 6,
      name: "Coming soon!",
      techs: [],
      desc: "",
      appUri: "#",
      githubRepoUri: "#",
      isComingSoon: true,
    },
  ]);

  return (
    <div className="bg-purple-500 px-6 py-12 xl:min-h-screen flex items-center justify-center">
      <div className="w-full xl:w-2/3">
        <h1 className="text-center text-2xl xl:text-6xl font-bold uppercase text-white">
          Portfolio
        </h1>
        <div className="my-12 xl:my-24 flex flex-col xl:grid xl:grid-cols-3 xl:gap-4 space-y-4 xl:space-y-0">
          {projects.map((item) => {
            return <PortfolioCard key={item.id} data={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

const PortfolioCard = ({ data }: { data: PortfolioProject }) => {
  const [showFullDetails, setShowFullDetail] = useState(false);
  return (
    <div
      key={data.id}
      className={`${
        showFullDetails
          ? "bg-purple text-white xl:h-72"
          : "bg-indigo text-indigo-200 xl:h-44"
      } p-4 rounded-xl flex flex-col items-center space-y-2`}
    >
      <div
        onClick={() => setShowFullDetail(!showFullDetails)}
        className="text-center cursor-pointer flex flex-col justify-center items-center h-full"
      >
        <h1 className="text-xl xl:text-3xl font-bold">{data.name}</h1>
        <p className="text-sm xl:text-lg">{data.techs.join(", ")}</p>
        {showFullDetails && (
          <div className="w-full text-white">
            <p
              className="text-center text-xs xl:text-sm pt-3 xl:pt-8 text-white cursor-pointer"
              onClick={() => setShowFullDetail(!showFullDetails)}
            >
              {data.desc}
            </p>
            {!data.isComingSoon && (
              <div className="flex justify-between space-x-2 pt-6 xl:pt-6">
                <Button
                  short
                  variant="filled-white"
                  text="View App"
                  className="w-1/2 inline-block"
                />
                <Button
                  short
                  variant="outlined-white"
                  text="Github"
                  className="w-1/2 inline-block"
                />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
