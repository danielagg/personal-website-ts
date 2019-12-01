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
    <div className="lg:py-16 py-2 lg:mt-16 mt-2 lg:mx-16">
      <div style={{ height: "2em" }}>
        <h1 className="typed-intro moveInFromLeftAnimation relative lg:text-5xl text-xl inline-block font-raleway-black text-primaryDarkBlue uppercase wide-letter-spacing">
          Daniel Agg
        </h1>
      </div>

      <div className="text-primaryDarkBlue lg:mt-16 mt-4 opacity-75 moveInFromTopAnimation">
        <p className="lg:text-xl">
          I'm a full stack developer, employed by Glownexus SA.
        </p>
        <p className="mt-2 lg:mt-0 lg:text-xl">
          I have experience with React, .NET Core, NodeJS and Azure.
        </p>
      </div>
    </div>
  );
};

export default LandingHeader;
