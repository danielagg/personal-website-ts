import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

// Components
import Button, { ButtonVariant } from "../Shared/Button/Button";

const About = () => {
  return (
    <div className="container lg:py-16 lg:px-32 py-12 text-gray lg:flex">
      <ul className="pt-6 px-8 lg:px-0 lg:pr-12 lg:flex-none lg:flex-grow text-gray-lighter">
        <li>
          <a
            href="https://www.linkedin.com/in/danielagg/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primaryBlue hover:text-primary"
          >
            <span className="pr-2">
              <FontAwesomeIcon icon={faLinkedin} />
            </span>
            LinkedIn
          </a>
        </li>
        <li className="mt-6">
          <a
            href="https://github.com/danielagg/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primaryBlue hover:text-primary"
          >
            <span className="pr-2">
              <FontAwesomeIcon icon={faGithub} />
            </span>
            GitHub
          </a>
        </li>
        <li className="mt-6">
          <span className="pr-2">
            <FontAwesomeIcon icon={faEnvelope} />
          </span>
          daniel.agg@outlook.com
        </li>
        <li className="mt-12">
          <Button
            caption="download cv (pdf)"
            url={process.env.PUBLIC_URL + "/Daniel_Agg_CV.pdf"}
            isNewTab={true}
            variant={ButtonVariant.LightGrayBordered}
          />
        </li>
      </ul>

      <div className="px-8 pt-8 lg:pl-32 lg:pt-0">
        <p className="pt-6">
          I'm a software developer from Hungary with four years of
          professional experience. I've worked primarily on enterprise
          applications’ backends, as well as various front ends, while crafting
          modern web applications as hobby projects, such as this site.
        </p>
        <p className="pt-6">
          I'm mostly familiar with technologies such as React (inc. redux,
          jest), ASP.Net Core (inc. Entity Framework Core) and Microsoft Azure.
          For more detailed information, please refer to my CV.
        </p>
        <p className="pt-6">
          Please note that at the moment, I'm not actively looking for new
          professional opportunities.
        </p>
      </div>
    </div>
  );
};

export default About;
