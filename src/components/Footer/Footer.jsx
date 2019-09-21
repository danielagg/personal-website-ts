import React from "react";

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <div className="mt-24 mb-6 text-center">
      <p className="text-white">&copy; Daniel Agg, {date}.</p>
    </div>
  );
};

export default Footer;
