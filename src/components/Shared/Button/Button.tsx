import React from "react";

export enum ButtonVariant {
  Plain,
  LightGrayBordered,
  GrayBordered,
  DarkGrayBordered,
  PrimaryColorBordered,
  FilledPrimaryColor
}

type ButtonProp = {
  caption: string;
  url: string;
  isNewTab?: boolean;
  isFullWidth?: boolean;
  variant?: ButtonVariant;
};

const Button = ({
  caption,
  variant = ButtonVariant.GrayBordered,
  isNewTab = false,
  isFullWidth = false,
  url
}: ButtonProp) => {
  const plainStyle = "";

  const lightGrayBorderedStyle =
    "inline-block cursor-pointer px-6 py-2 bg-transparent border-2 border-gray-lighter text-gray-lighter hover:text-black hover:bg-primary hover:border-primary";

  const grayBorderedStyle =
    "inline-block cursor-pointer px-6 py-2 bg-transparent border-2 border-gray text-gray hover:text-black hover:bg-primary hover:border-primary";

  const darkGrayBorderedStyle =
    "inline-block cursor-pointer px-6 py-2 bg-transparent border-2 border-gray-dark text-gray-dark hover:text-black hover:bg-primary hover:border-primary";

  const primaryColorBorderedStyle =
    "inline-block cursor-pointer px-6 py-2 bg-transparent border-2 border-primary text-primary hover:text-gray-lighter hover:bg-gray hover:border-gray-lighter";

  const filledPrimaryColorStyle =
    "inline-block cursor-pointer px-6 py-2 bg-transparent border-2 border-primary bg-primary text-black hover:text-black hover:bg-gray-lighter hover:border-gray-lighter";

  const getContainerStyle = (): string => {
    return (
      (isFullWidth ? "w-full text-center " : "") + getVariantSpecificStyles()
    );
  };

  const getVariantSpecificStyles = (): string => {
    switch (variant) {
      case ButtonVariant.Plain:
        return plainStyle;
      case ButtonVariant.LightGrayBordered:
        return lightGrayBorderedStyle;
      case ButtonVariant.GrayBordered:
        return grayBorderedStyle;
      case ButtonVariant.DarkGrayBordered:
        return darkGrayBorderedStyle;
      case ButtonVariant.PrimaryColorBordered:
        return primaryColorBorderedStyle;
      case ButtonVariant.FilledPrimaryColor:
        return filledPrimaryColorStyle;
      default:
        return "";
    }
  };

  return (
    <a
      href={url}
      target={isNewTab ? "_blank" : "_self"}
      rel="noopener noreferrer"
    >
      <div className={getContainerStyle()}>
        <p>{caption}</p>
      </div>
    </a>
  );
};

export default Button;
