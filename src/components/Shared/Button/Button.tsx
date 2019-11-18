import React from "react";

export enum Variant {
  White,
  Blue,
  WhiteBorderOnly,
  BlueBorderOnly
}

export enum Thickness {
  Normal,
  Wider,
  Widest
}

type ButtonProp = {
  caption: string;
  url: string;
  isNewTab?: boolean;
  isFullWidth?: boolean;
  variant?: Variant;
  thickness?: Thickness;
};

const Button = ({
  caption,
  variant = Variant.White,
  thickness = Thickness.Normal,
  isNewTab = false,
  isFullWidth = false,
  url
}: ButtonProp) => {
  const staticContainerStyle = "inline-block cursor-pointer";
  const whiteVariantStlye = "bg-white text-primaryBlue border-2 border-white";
  const blueVariantStlye =
    "bg-primaryBlue text-white border-2 border-primaryBlue";
  const blueBorderOnlyVariantStlye =
    "bg-white border-2 border-primaryBlue primaryBlue";
  const whiteBorderOnlyVariantStlye =
    "bg-transparent border-2 border-white text-white";

  const whiteVariantHoverStyle =
    "hover:text-black hover:bg-indigo-300 hover:border-indigo-300";
  const blueVariantHoverStyle =
    "hover:text-black hover:bg-indigo-300 hover:border-indigo-300";
  const blueBorderOnlyVariantHoverStyle =
    "hover:text-black hover:bg-indigo-300 hover:border-indigo-300"
  const whiteBorderOnlyVariantHoverStyle =
    "hover:text-black hover:bg-indigo-300 hover:border-indigo-300"

  const getContainerStyle = (): string => {
    return (isFullWidth ? "w-full text-center" : "") +
    " " +
    staticContainerStyle +
    " " +
    getVariantSpecificStyles() +
    " " +
    getThicknessSpecificStyles();
  };

  const getVariantSpecificStyles = (): string => {
    switch (variant) {
      case Variant.White:
        return whiteVariantStlye + " " + whiteVariantHoverStyle;
      case Variant.Blue:
        return blueVariantStlye + " " + blueVariantHoverStyle;
      case Variant.BlueBorderOnly:
        return blueBorderOnlyVariantStlye + " " + blueBorderOnlyVariantHoverStyle;
      case Variant.WhiteBorderOnly:
        return whiteBorderOnlyVariantStlye + " " + whiteBorderOnlyVariantHoverStyle;
      default:
        return "";
    }
  };

  const getThicknessSpecificStyles = (): string => {
    switch (thickness) {
      case Thickness.Normal:
        return "px-4 py-2";

      case Thickness.Wider:
        return "px-8 py-2";

      case Thickness.Widest:
        return "px-12 py-2";

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
