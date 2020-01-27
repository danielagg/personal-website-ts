import React from "react";
import { Element } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFile } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  const staticClassesOfShapes = "bg-black w-full absolute";

  const staticStylesOfShapes = {
    height: "100vh",
    bottom: "0",
    right: "0"
  };

  return (
    <Element id="about-me" name="about-me">
      <div className="relative h-screen" style={{ background: "#7B155D" }}>
        <div className="h-screen flex justify-center">
          <div
            className="self-center text-white text-xl text-right"
            style={{ width: "50%" }}
          >
            <div className="w-2/3 pr-12" style={{ marginLeft: "auto" }}>
              <p>
                I'm a software developer from Hungary with four years of
                professional experience. I've worked primarily on enterprise
                applications’ backends, as well as various front ends, while
                crafting modern web applications as hobby projects, such as this
                site.
              </p>
              <p className="pt-12">
                I'm mostly familiar with technologies such as React (inc. redux,
                jest), VueJS, ASP.Net Core (inc. Entity Framework Core) and
                Microsoft Azure. For more detailed information, please refer to
                my CV.
              </p>
            </div>
          </div>
          <div className="self-center pl-12" style={{ width: "50%" }}>
            <h1
              className="text-white text-8xl font-black tracking-tighter"
              style={{ marginRight: "auto" }}
            >
              Who?
            </h1>
            <ul className={"text-white text-xl mt-12"}>
              <li className="text-pink-300 hover:text-pink-500">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <span className="inline-block" style={{ minWidth: "32px" }}>
                    <FontAwesomeIcon icon={faLinkedin} />
                  </span>
                  LinkedIn
                </a>
              </li>
              <li className={"mt-2 text-pink-300 hover:text-pink-500"}>
                <a
                  href="https://www.linkedin.com/in/danielagg/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="inline-block" style={{ minWidth: "32px" }}>
                    <FontAwesomeIcon icon={faFile} />
                  </span>
                  Resumé
                </a>
              </li>
              <li className={"mt-2"}>
                <span className="inline-block" style={{ minWidth: "32px" }}>
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
                daniel.agg@outlook.com
              </li>
            </ul>
          </div>
        </div>

        <div
          className={staticClassesOfShapes}
          style={{
            ...staticStylesOfShapes,
            clipPath: "polygon(100% 81%, 53% 100%, 100% 100%)",
            opacity: 0.2
          }}
        />
        <div
          className={staticClassesOfShapes}
          style={{
            ...staticStylesOfShapes,
            clipPath: "polygon(94% 29%, 100% 39%, 100% 100%, 78% 100%)",
            opacity: 0.2
          }}
        />
        <div
          className={staticClassesOfShapes}
          style={{
            ...staticStylesOfShapes,
            clipPath: "polygon(65% 83%, 86% 100%, 66% 100%)",
            opacity: 0.2
          }}
        />
        <div
          className={staticClassesOfShapes}
          style={{
            ...staticStylesOfShapes,
            clipPath: "polygon(73% 54%, 100% 68%, 100% 100%, 75% 100%)",
            opacity: 0.2
          }}
        />
      </div>
    </Element>
  );
};

export default About;
