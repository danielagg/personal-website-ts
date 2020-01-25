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
      new TypeWriter(textElement, ["Daniel Agg.", "...just Dan."], 1500);
    }
  };

  const staticClassesOfShapes = "bg-black w-full absolute";

  const staticStylesOfShapes = {
    height: "100vh",
    bottom: "0",
    right: "0"
  };

  return (
    <div className="bg-primary relative h-screen">
      <div className="h-screen flex ">
        <div className="mx-auto self-center" style={{ maxWidth: "50vw" }}>
          <div style={{ minHeight: "12rem" }}>
            <h1 className="typed-intro relative inline-block text-white text-7xl font-black tracking-tighter">
              Hello
            </h1>
          </div>

          <p className="text-white w-5/6 font-thin text-lg">
            Hello! I'm a Hungarian{" "}
            <span className="font-bold">full stack developer</span>, currently
            employed by Glownexus SA, where I take care of various tasks within
            my team - backend, frontend, devops, it's all depending on the day.
          </p>

          <ul className="mt-12 flex text-white font-thin text-2xl">
            <li>my projects</li>
            <li className="ml-6">about me</li>
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
  );
};

export default Landing;
