import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-12 h-12 flex flex-col gap-2 mr-2 items-center mb-6' key={technology.name}>
          <img src={technology.icon} alt={technology.name} />
          <span className="text-teal-600 text-center">{technology.name}</span>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");