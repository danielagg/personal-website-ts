import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

// Components
import Button, { Variant, Thickness } from "../Shared/Button/Button";

const About = () => {
  return (
    <div>
      <h2 className="mt-24 text-white text-xl">about me</h2>
      <div className="mt-6 lg:flex block font-raleway text-white">
        <div className="opacity-75 lg:w-3/5 w-full pr-12">
          <p>
            I'm a software developer from Hungary with more than three years of
            professional experience. I've worked primarily on enterprise
            applications’ backends, as well as various front ends, while
            crafting modern web applications as hobby pet projects, such as this
            site.
          </p>
          <p className="lg:mt-4 mt-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga nam
            quasi quod molestiae vel rem dolor sequi expedita aliquid amet omnis
            illum delectus natus, rerum laboriosam ullam modi consectetur
            cumque.
          </p>
        </div>

        <div className="opacity-75 lg:w-2/5 w-full mt-8 lg:mt-0">
          <p>
            Please note that at the moment, I'm not actively looking for new
            professional opportunities.
          </p>
          <ul className="lg:mt-4 mt-8">
            <li>
              <a
                href="https://www.linkedin.com/in/danielagg/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-400"
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
                className="hover:text-purple-400"
              >
                <span className="pr-2">
                  <FontAwesomeIcon icon={faGithub} />
                </span>
                GitHub
              </a>
            </li>
            <li className="mt-2">
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
              variant={Variant.White}
              thickness={Thickness.Widest}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
