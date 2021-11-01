import React from "react";

export const Button = ({
  variant,
  text,
  small,
  children,
}: {
  text?: string;
  variant: "filled" | "outlined";
  small?: boolean;
  children?: any;
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
      className={`text-center ${
        small ? "border-2 px-12 py-2 text-sm" : "border-4 px-12 py-4 text-base"
      } border-gray-700 cursor-pointer uppercase font-bold hover:border-indigo-600 ${getStyle()}`}
    >
      {children && children}
      {text && text}
    </div>
  );
};
