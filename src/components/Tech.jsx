import Marquee from "react-fast-marquee";
import { technologies } from "../constants";
import { SectionWrapper } from "../hoc";
const Tech = () => {
  return (
    <>
      <div className="flex ">
        <div className="w-[1px] sm:h-80 h-40 bg-gradient-to-t from-teal-200" />
        <Marquee
          autoFill
          speed={100}
          className="overflow-hidden cursor-pointer"
          pauseOnClick
        >
          <div className="flex flex-row flex-wrap justify-around p-1 py-8 gap-4 items-center ">
            {technologies.map((technology) => (
              <div
                className="w-12 h-12 flex flex-col gap-2 mr-10 items-center mb-6"
                key={technology.name}
              >
                <img src={technology.icon} alt={technology.name} />
                <span className="text-teal-600 text-center">
                  {technology.name}
                </span>
              </div>
            ))}
          </div>
        </Marquee>
        <div className="w-[1px] sm:h-80 h-40 bg-gradient-to-b from-teal-200" />
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
