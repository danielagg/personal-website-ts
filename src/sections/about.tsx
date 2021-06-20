import React, { useState } from "react";
import { Button } from "../shared/button";
import profilePic from "../assets/profile.jpeg";
import { SocialIcon } from "react-social-icons";

export const About = () => {
  const [employments] = useState([
    {
      id: 1,
      posiiton: "Full Stack Developer",
      employerName: "Apiumhub",
      employerUrl: "https://apiumhub.com",
      from: "2021",
      to: "Now",
      desc: "",
    },
    {
      id: 2,
      posiiton: "Full Stack Developer",
      employerName: "Glownexus",
      employerUrl: "https://glownexus.com",
      from: "2018",
      to: "2021",
      desc: "I was employed as a full stack developer, working on a React front-, and an ASP.NET Core Web API backend. I also participated in DevOps duties and general infrastructure development with Azure.",
    },
    {
      id: 3,
      posiiton: ".NET Developer",
      employerName: "Atos Consulting",
      employerUrl: "https://atos.net/en-hu/hungary/atos-consulting",
      from: "2016",
      to: "2018",
      desc: "I acted as the deputy to the Technical Team Lead of a team of ~7 developers, working on UWP applications.",
    },
  ]);

  return (
    <div
      id="about"
      className="bg-blue-500 px-6 py-12 xl:min-h-screen flex items-center justify-center"
    >
      <div className="w-full xl:w-3/4">
        <div className="block xl:flex xl:space-x-24 xl:items-center xl:justify-between">
          <div className="xl:w-1/2">
            <div className="flex justify-center items-center">
              <div
                className="h-28 w-28 lg:h-40 lg:w-40 rounded-full bg-cover border-4 border-gray"
                style={{ backgroundImage: `url(${profilePic})` }}
              />
            </div>

            <p className="text-gray text-center xl:text-justify leading-relaxed text-sm xl:text-xl mt-12">
              I'm Daniel Agg, a 25 year old Full Stack Developer from Budapest,
              Hungary.
            </p>
            <p className="text-gray text-center xl:text-justify leading-relaxed text-sm xl:text-base mt-8">
              I've started my career as a .NET developer, working almost
              exclusively on ASP.NET Core backends, before deciding to immerse
              myself in the world of modern frontend development, aiming to
              become a competent full-stack engineer.
            </p>

            <p className="hidden xl:block text-gray text-center xl:text-justify leading-relaxed text-sm xl:text-base mt-8">
              As of today, on my day-to-day work I switch between developing a
              React frontend (using Typescript, TailwindCSS and react-query), an
              ASP.NET Core backend (following Domain Driven Design principals)
              and general infrastructure development on Azure, with Terraform.
            </p>

            <p className="hidden xl:block text-gray text-center xl:text-justify leading-relaxed text-sm xl:text-base mt-8">
              I hold an Azure Developer Associate (AZ-203) certification until
              the end of this year.
            </p>
          </div>

          <div className="text-white xl:w-1/2">
            <h2 className="text-center xl:text-left text-lg xl:text-4xl font-bold uppercase py-8">
              Experience
            </h2>
            <div className="flex flex-col space-y-4">
              {employments.map((e) => {
                return (
                  <div key={e.id} className="flex justify-between items-center">
                    <div>
                      <p className="text-sm xl:text-xl font-bold">
                        {e.posiiton}
                      </p>
                      <p className="text-gray text-xs xl:text-base">
                        @{" "}
                        <span className="underline">
                          <a
                            href={e.employerUrl}
                            target="_blank"
                            rel="noopener"
                          >
                            {e.employerName}
                          </a>
                        </span>
                      </p>
                      <p className="hidden xl:block leading-relaxed text-gray text-sm py-2 pr-12 xl:py-4">
                        {e.desc}
                      </p>
                    </div>
                    <p className="text-xs xl:text-base text-gray min-w-max xl:self-start xl:pt-4">
                      {e.from} - {e.to}
                    </p>
                  </div>
                );
              })}
            </div>
            <div className="mt-12 w-full flex items-center space-x-8">
              <SocialIcon
                url="https://linkedin.com/in/danielagg"
                bgColor="#CE1068"
                fgColor="#fff"
                target="_blank"
                rel="noopener noreferrer"
              />
              <SocialIcon
                url="https://twitter.com/a13dan"
                target="_blank"
                rel="noopener noreferrer"
              />
              <Button
                variant="filled-pink"
                round
                disabled
                text="Download CV"
                className="px-6 py-2 xl:py-3"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
