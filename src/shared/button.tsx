import React from "react";

export const Button = ({
  text,
  className,
  onClick,
  variant,
  short,
}: {
  text: string;
  className?: string;
  onClick?: () => void;
  variant: "filled-pink" | "filled-white" | "outlined-pink" | "outlined-white";
  short?: boolean;
}) => {
  const variantSpecificStyle = () => {
    switch (variant) {
      case "filled-pink":
        return "bg-gradient-to-r from-purple-200 to-purple text-white hover:from-purple-200 hover:to-purple-200 hover:text-white";
      case "outlined-pink":
        return "bg-transparent border-4 border-purple hover:bg-purple hover:text-white text-purple";
      case "filled-white":
        return "bg-white text-purple";
      case "outlined-white":
        return "bg-transparent border-4 border-white text-white";
      default:
        return "";
    }
  };

  return (
    <div
      className={`${className} ${variantSpecificStyle()} ${
        short ? "py-2" : "py-4"
      } rounded cursor-pointer text-center flex justify-center items-center w-full`}
    >
      <p className={`font-bold uppercase text-sm xl:text-base`}>{text}</p>
    </div>
  );
};
