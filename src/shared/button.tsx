import React from "react";

export const Button = ({
  text,
  className,
  onClick,
  href,
  variant,
  round,
  short,
  disabled,
}: {
  text: string;
  className?: string;
  onClick?: () => void;
  href?: string;
  variant: "filled-pink" | "filled-white" | "outlined-pink" | "outlined-white";
  round?: boolean;
  short?: boolean;
  disabled?: boolean;
}) => {
  const variantSpecificStyle = () => {
    switch (variant) {
      case "filled-pink":
        return `${
          disabled
            ? "bg-gray-500 text-gray opacity-25"
            : "bg-gradient-to-r from-purple-200 to-purple hover:from-purple-200 hover:to-purple-200 hover:text-white"
        } text-white border-t-4 border-b-4 border-r-0 border-l-0 border-transparent`;
      case "outlined-pink":
        return "bg-transparent border-4 border-purple hover:bg-purple hover:text-white text-purple";
      case "filled-white":
        return "bg-white text-purple border-t-4 border-b-4 border-r-0 border-l-0 border-transparent";
      case "outlined-white":
        return "bg-transparent border-4 border-white text-white";
      default:
        return "";
    }
  };

  return (
    <a
      href={href}
      className={`${className} ${variantSpecificStyle()} ${
        short ? "py-2" : "py-4"
      } ${!disabled && "cursor-pointer"} ${
        round ? "rounded-full w-auto" : "rounded w-full"
      } text-center flex justify-center items-center space-x-2`}
    >
      <p className={`font-bold uppercase text-sm xl:text-base`}>{text} </p>
    </a>
  );
};
