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
  variant?: Variant;
  thickness?: Thickness;
};

const Button = ({
  caption,
  variant = Variant.White,
  thickness = Thickness.Normal
}: ButtonProp) => {
  const staticContainerStyle = "inline-block cursor-pointer";
  const whiteVariantStlye = "bg-white primary-blue";
  const blueVariantStlye = "bg-primary-blue text-white";
  const blueBorderOnlyVariantStlye =
    "bg-white border-2 border-primary-blue primary-blue";
  const whiteBorderOnlyVariantStlye =
    "bg-transparent border-2 border-white text-white";

  const getContainerStyle = (): string => {
    return (
      staticContainerStyle +
      " " +
      getVariantSpecificStyles() +
      " " +
      getThicknessSpecificStyles()
    );
  };

  const getVariantSpecificStyles = (): string => {
    switch (variant) {
      case Variant.White:
        return whiteVariantStlye;
      case Variant.Blue:
        return blueVariantStlye;
      case Variant.BlueBorderOnly:
        return blueBorderOnlyVariantStlye;
      case Variant.WhiteBorderOnly:
        return whiteBorderOnlyVariantStlye;
      default:
        return "";
    }
  };

  const getThicknessSpecificStyles = (): string => {
    switch (thickness) {
      case Thickness.Normal:
        return "p-2";

      case Thickness.Wider:
        return "px-6 py-2";

      case Thickness.Widest:
        return "px-8 py-2";

      default:
        return "";
    }
  };

  return (
    <div className={getContainerStyle()}>
      <p>{caption}</p>
    </div>
  );
};

export default Button;
