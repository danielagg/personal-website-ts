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
    <div className="mt-4 lg:mt-16">
      <div style={{ height: "2em" }}>
        <h1 className="typed-intro moveInFromLeftAnimation relative lg:text-3xl text-lg inline-block font-raleway-black text-white uppercase wide-letter-spacing">
          Daniel Agg
        </h1>
      </div>

      <hr
        className="bg-white w-1/5 border-0 lg:mt-4 mt-2"
        style={{ height: "2px" }}
      />
      <div className="text-white mt-6 opacity-75 moveInFromTopAnimation">
        <p>I'm a full stack developer, employed by Glownexus SA.</p>
        <p className="mt-2 lg:mt-0">
          I have experience with React, .NET Core, NodeJS and Azure.
        </p>
      </div>
    </div>
  );
};

export default LandingHeader;
