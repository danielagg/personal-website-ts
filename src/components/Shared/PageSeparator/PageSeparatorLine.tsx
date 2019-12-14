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
  return (
    <>
      <div className="container" style={{ textAlign: textAlignment }}>
        <p className="uppercase text-gray font-robotoMono text-xl">{text}</p>
      </div>
      <hr
        style={{
          width: "75%",
          float: floatDirection,
          marginTop: "-1rem"
        }}
        className="border-0 h-px bg-gray block"
      />
    </>
  );
};

export default PageSeparatorLine;
