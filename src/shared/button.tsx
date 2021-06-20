import React from "react";

export const Button = ({
  text,
  className,
  onClick,
  href,
  variant,
  short,
}: {
  text: string;
  className?: string;
  onClick?: () => void;
  href?: string;
  variant:
    | "filled-pink"
    | "filled-white"
    | "outlined-pink"
    | "outlined-white"
    | "disabled";
  short?: boolean;
}) => {
  const variantSpecificStyle = () => {
    switch (variant) {
      case "filled-pink":
        return "bg-gradient-to-r from-purple-200 to-purple text-white border-t-4 border-b-4 border-r-0 border-l-0 border-transparent hover:from-purple-200 hover:to-purple-200 hover:text-white";
      case "outlined-pink":
        return "bg-transparent border-4 border-purple hover:bg-purple hover:text-white text-purple";
      case "filled-white":
        return "bg-white text-purple border-t-4 border-b-4 border-r-0 border-l-0 border-transparent";
      case "outlined-white":
        return "bg-transparent border-4 border-white text-white";
      case "disabled":
        return "bg-gray-500 text-gray opacity-25 border-t-4 border-b-4 border-r-0 border-l-0 border-transparent";
      default:
        return "";
    }
  };

  return (
    <a
      href={href}
      className={`${className} ${variantSpecificStyle()} ${
        short ? "py-2" : "py-4"
      } ${
        variant !== "disabled" && "cursor-pointer"
      } rounded text-center flex justify-center items-center space-x-2 w-full`}
    >
      {variant === "disabled" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
          />
        </svg>
      )}

      <p className={`font-bold uppercase text-sm xl:text-base`}>{text} </p>
    </a>
  );
};
