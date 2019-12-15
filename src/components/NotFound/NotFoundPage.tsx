import React from "react";
import { NavLink } from "react-router-dom";

// Components
import Button, { ButtonVariant } from "../Shared/Button/Button";

const NotFoundPage = () => {
  return (
    <div className="h-screen flex flex-col lg:justify-center items-center -my-4 lg:pt-0 pt-12">
      <h1 className="font-robotoMono text-gray-lighter font-light text-3xl lg:text-6xl">
        Sorry, that's a <span className="font-raleway-bold">404</span>.
      </h1>
      <p className="text-gray text-xl mt-2">This page does not exist.</p>
      <NavLink to="/" className="mt-4">
        <Button
          caption="&larr; go back"
          url="#"
          variant={ButtonVariant.GrayBordered}
        />
      </NavLink>
    </div>
  );
};

export default NotFoundPage;
