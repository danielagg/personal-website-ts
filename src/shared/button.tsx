import React from "react";

export const Button = ({
  variant,
  text,
}: {
  text: string;
  variant: "filled" | "outlined";
}) => {
  const getStyle = () => {
    switch (variant) {
      case "filled":
        return "bg-gray-700 text-white hover:bg-indigo-600";
      case "outlined":
        return "text-gray-700 hover:text-indigo-600";
    }
  };
  return (
    <div
      className={`text-center border-4 border-gray-700 cursor-pointer uppercase px-12 py-4 font-bold hover:border-indigo-600 ${getStyle()}`}
    >
      {text}
    </div>
  );
};
