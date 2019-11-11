import React from "react";
import { NavLink } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <>
      <h1 className="text-white text-5xl">Sorry, that's a 404.</h1>
      <p className="text-white text-2xl">This page does not exist.</p>
      <NavLink to="/" className="text-white text-xl">
        &larr; Go back
      </NavLink>
    </>
  );
};

export default NotFoundPage;
