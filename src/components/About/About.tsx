import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

// Components
import Button, { Variant, Thickness } from "../Shared/Button/Button";

const About = () => {
  return (
    <div className="moveInFromBottomAnimation">
      <h2 className="mt-12 lg:mt-24 text-primaryDarkBlue text-xl">about me</h2>
      <div className="mt-6 lg:flex block font-raleway text-primaryDarkBlue">
        <div className="opacity-75 lg:w-3/5 w-full pr-12">
          <p>
            I'm a software developer from Hungary with more than three years of
            professional experience. I've worked primarily on enterprise
            applications’ backends, as well as various front ends, while
            crafting modern web applications as hobby projects, such as this
            site.
          </p>
          <p className="lg:mt-4 mt-8">
            I'm mostly familiar with technologies such as React (inc. redux,
            jest), ASP.Net Core (inc. Entity Framework Core) and Microsoft
            Azure. For more detailed information, please refer to my CV.
          </p>
        </div>

        <div className="lg:w-2/5 w-full mt-8 lg:mt-0">
          <p className="opacity-75">
            Please note that at the moment, I'm not actively looking for new
            professional opportunities.
          </p>
          <ul className="lg:mt-4 mt-8">
            <li>
              <a
                href="https://www.linkedin.com/in/danielagg/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primaryBlue hover:text-primaryDarkBlue"
              >
                <span className="pr-2">
                  <FontAwesomeIcon icon={faLinkedin} />
                </span>
                LinkedIn
              </a>
            </li>
            <li className="mt-2">
              <a
                href="https://github.com/danielagg/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primaryBlue hover:text-primaryDarkBlue"
              >
                <span className="pr-2">
                  <FontAwesomeIcon icon={faGithub} />
                </span>
                GitHub
              </a>
            </li>
            <li className="mt-2 text-primaryBlue">
              <span className="pr-2">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              daniel.agg@outlook.com
            </li>
          </ul>
          <div className="lg:mt-4 mt-8">
            <Button
              caption="download cv (pdf)"
              url="#"
              variant={Variant.Blue}
              thickness={Thickness.Widest}
              isFullWidth={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
