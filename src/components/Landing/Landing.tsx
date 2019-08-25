import React, { useEffect } from "react";
import "./style.css";
import TypeWriter from "../../typewriter";

const Landing = () => {
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
      <h1 className="typed-intro relative text-xl inline-block font-raleway-black text-white uppercase wide-letter-spacing">
        Daniel Agg
      </h1>
      <hr className="bg-white w-1/5 border-0 mt-2" style={{ height: "2px" }} />
      <div className="text-white mt-6 opacity-75">
        <p>full stack developer, employed by Glownexus SA</p>
        <p className="mt-2 lg:mt-0">
          this is a second line of text to add, add and maybe a bit longer
        </p>
      </div>
    </div>
  );
};

export default Landing;
