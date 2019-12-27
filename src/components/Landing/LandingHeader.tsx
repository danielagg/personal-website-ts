import React, { useEffect } from "react";
import "./style.css";
import TypeWriter from "../../typewriter";

const LandingHeader = () => {
  useEffect(() => {
    initializeWriter();
  }, []);

  const initializeWriter = () => {
    const textElement = document.querySelector(".typed-intro");

    if (textElement !== null) {
      new TypeWriter(
        textElement,
        ["Hi, I'm Dan.", "I'm a full-stack dev."],
        1500
      );
    }
  };

  return (
    <div className="container p-8 lg:py-48 lg:px-32">
      <div style={{ height: "2em" }}>
        <h1 className="typed-intro font-robotoMono font-light text-gray-lighter moveInFromLeftAnimation text-lg lg:text-4xl relative inline-block">
          Daniel Agg
        </h1>
      </div>

      <div className="font-light text-gray-lighter lg:mt-16 mt-4 moveInFromTopAnimation">
        <p>
          I'm Daniel Agg, a Hungarian full stack developer, currently employed
          by Glownexus SA, where I work as a backend-, and devops engineer.
        </p>
      </div>
    </div>
  );
};

export default LandingHeader;
