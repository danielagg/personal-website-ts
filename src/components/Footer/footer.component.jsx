import React from "react";

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <div className="lg:mt-24 mt-12 pb-6 text-center">
      <p className="text-gray">&copy; Daniel Agg, {date}.</p>
    </div>
  );
};

export default Footer;
