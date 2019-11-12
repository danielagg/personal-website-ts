import React from "react";
import { NavLink } from "react-router-dom";

// Components
import Button, { Variant, Thickness } from "../Shared/Button/Button";

const NotFoundPage = () => {
  return (
      <div className="h-screen flex flex-col justify-center items-center -my-4">
        <h1 className="text-white text-6xl">Sorry, that's a <span className="font-raleway-bold" >404</span>.</h1>
        <p className="text-white text-2xl mt-6">This page does not exist.</p>
        <NavLink to="/" className="mt-4">
          <Button
              caption="&larr; go back"
              url="#"
              variant={Variant.White}
              thickness={Thickness.Widest}
            />          
        </NavLink>     
      </div>  
  );
};

export default NotFoundPage;
