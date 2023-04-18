import { useState } from "react";
import SectionTitle from "./SectionTitle";
import { Work1 } from "./works/Work1";
import { Work2 } from "./works/Work2";
import { Work3 } from "./works/Work3";
import { Work4 } from "./works/Work4";
import { Work5 } from "./works/Work5";

export const Services = () => {
  const [workOne, setWorkOne] = useState(true);
  const [workTwo, setWorkTwo] = useState(false);
  const [workThree, setWorkThree] = useState(false);
  const [workFour, setWorkFour] = useState(false);
  const [workFive, setWorkFive] = useState(false);

  const handleWorkOne = () => {
    setWorkOne(true);
    setWorkTwo(false);
    setWorkThree(false);
    setWorkFour(false);
    setWorkFive(false);
  };

  const handleWorkTwo = () => {
    setWorkOne(false);
    setWorkTwo(true);
    setWorkThree(false);
    setWorkFour(false);
    setWorkFive(false);
  };

  const handleWorkThree = () => {
    setWorkOne(false);
    setWorkTwo(false);
    setWorkThree(true);
    setWorkFour(false);
    setWorkFive(false);
  };

  const handleWorkFour = () => {
    setWorkOne(false);
    setWorkTwo(false);
    setWorkThree(false);
    setWorkFour(true);
    setWorkFive(false);
  };

  const handleWorkFive = () => {
    setWorkOne(false);
    setWorkTwo(false);
    setWorkThree(false);
    setWorkFour(false);
    setWorkFive(true);
  };

  return (
    <section
      id="services"
      className="max-w-containerxs mx-auto py-10 lgl:py-24 px-4"
    >
      <SectionTitle title="Our Services" />
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul className="md:w-36 flex flex-col">
          <li
            onClick={handleWorkOne}
            className={`${
              workOne
                ? "border-l-textGreen text-textGreen"
                : "text-textDark text-textDark"
            } border-l-2 bg-transparent hover:bg-[#404040] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
          >
            Service1
          </li>
          <li
            onClick={handleWorkTwo}
            className={`${
              workTwo
                ? "border-l-textGreen text-textGreen"
                : "text-textDark text-textDark"
            } border-l-2 bg-transparent hover:bg-[#404040] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
          >
            Service2
          </li>
          <li
            onClick={handleWorkThree}
            className={`${
              workThree
                ? "border-l-textGreen text-textGreen"
                : "text-textDark text-textDark"
            } border-l-2 bg-transparent hover:bg-[#404040] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
          >
            Service3
          </li>
          <li
            onClick={handleWorkFour}
            className={`${
              workFour
                ? "border-l-textGreen text-textGreen"
                : "text-textDark text-textDark"
            } border-l-2 bg-transparent hover:bg-[#404040] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
          >
            Service4
          </li>
          <li
            onClick={handleWorkFive}
            className={`${
              workFive
                ? "border-l-textGreen text-textGreen"
                : "text-textDark text-textDark"
            } border-l-2 bg-transparent hover:bg-[#404040] py-3 text-sm cursor-pointer duration-300 px-8 font-medium`}
          >
            Service5
          </li>
        </ul>
        {workOne && <Work1 />}
        {workTwo && <Work2 />}
        {workThree && <Work3 />}
        {workFour && <Work4 />}
        {workFive && <Work5 />}
      </div>
    </section>
  );
};
