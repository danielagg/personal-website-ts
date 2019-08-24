import React, { useEffect } from "react";
import "./style.css";
import TypeWriter from "../typewriter";

const Landing = () => {
  useEffect(() => {
    initializeWriter();
  }, []);

  const initializeWriter = () => {
    const textElement = document.querySelector(".typed-intro");

    if (textElement != undefined) {
      new TypeWriter(
        textElement,
        ["Hi, I'm Dan.", "I'm a full-stack dev."],
        1500
      );
    }
  };

  return (
    <div>
      <h1 className="typed-intro relative text-xl inline-block font-raleway-bold text-white uppercase wide-letter-spacing"></h1>
      <hr className="bg-white w-1/5 border-0 mt-2" style={{ height: "2px" }} />
      <p>
        full stack developer, employed by Glownexus SA this is a second line of
        text to add, add and maybe a bit longer
      </p>
    </div>
  );
};

export default Landing;
