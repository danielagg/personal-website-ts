import React from "react";

// Components
import Button, { Variant, Thickness } from "../Shared/Button/Button";

const About = () => {
  return (
    <div>
      <h2 className="mt-24 text-white text-xl">about me</h2>
      <div className="mt-6 flex font-raleway text-white">
        <div className="opacity-75 w-3/5 pr-12">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque illo
            veritatis ad dicta asperiores nobis provident in odit nihil sit
            explicabo obcaecati aperiam similique tempore id harum, nulla, rem
            suscipit aliquid nemo quis laudantium? Maiores ipsum totam magni
            voluptas eaque!
          </p>
          <p className="mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga nam
            quasi quod molestiae vel rem dolor sequi expedita aliquid amet omnis
            illum delectus natus, rerum laboriosam ullam modi consectetur
            cumque.
          </p>
        </div>

        <div className="opacity-75 w-2/5">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta nemo
            nisi voluptas illo voluptatibus reiciendis?
          </p>
          <p className="mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus ad minima iusto suscipit ab laudantium.
          </p>
          <div className="mt-4">
            <Button
              caption="download cv (pdf)"
              variant={Variant.BlueBorderOnly}
              thickness={Thickness.Wider}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
