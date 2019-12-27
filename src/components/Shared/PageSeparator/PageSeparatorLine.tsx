import React from "react";

export enum PageSeparatorDirection {
  Left,
  Right
}

type PageSeparatorLineProp = {
  text: string;
  direction: PageSeparatorDirection;
};

const PageSeparatorLine = ({ text, direction }: PageSeparatorLineProp) => {
  const floatDirection =
    direction === PageSeparatorDirection.Left ? "left" : "right";

  const textAlignment =
    direction === PageSeparatorDirection.Left ? "right" : "left";

  const fadeInAnimation =
    direction === PageSeparatorDirection.Left
      ? "moveInFromLeftAnimation"
      : "moveInFromRightAnimation";

  return (
    <div className={fadeInAnimation}>
      <div
        className="container lg:px-32 lg:block hidden"
        style={{ textAlign: textAlignment }}
      >
        <p className="uppercase text-gray font-robotoMono text-xl">{text}</p>
      </div>
      <hr
        style={{
          float: floatDirection
        }}
        className="w-full lg:w-3/4 lg:-mt-4 lg:mb-0 mt-8 mb-4 border-0 h-px bg-gray lg:block hidden"
      />
      <p className="block lg:hidden pl-8 uppercase text-gray font-robotoMono text-xl">
        {text}
      </p>
    </div>
  );
};

export default PageSeparatorLine;
