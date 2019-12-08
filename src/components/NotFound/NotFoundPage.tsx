import React from "react";
import { NavLink } from "react-router-dom";

// Components
import Button, { Variant, Thickness } from "../Shared/Button/Button";

const NotFoundPage = () => {
  return (
    <div className="h-screen flex flex-col lg:justify-center items-center -my-4 lg:pt-0 pt-12">
      <h1 className="text-primaryBlue text-3xl lg:text-6xl">
        Sorry, that's a <span className="font-raleway-bold">404</span>.
      </h1>
      <p className="text-primaryBlue text-xl mt-2">This page does not exist.</p>
      <NavLink to="/" className="mt-4">
        <Button
          caption="&larr; go back"
          url="#"
          variant={Variant.Blue}
          thickness={Thickness.Widest}
        />
      </NavLink>
    </div>
  );
};

export default NotFoundPage;
