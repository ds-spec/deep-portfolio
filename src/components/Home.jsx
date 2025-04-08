import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { GrLinkedinOption } from "react-icons/gr";
import { LuGithub } from "react-icons/lu";
import { CiLocationOn } from "react-icons/ci";
import { LuBuilding2 } from "react-icons/lu";
import { TypeAnimation } from "react-type-animation";
import { Cursor, useTypewriter } from "react-simple-typewriter";

const Home = () => {
  const [text] = useTypewriter({
    words: ["innovation", "music (enigma)", "i-use-vite btw"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="flex flex-col justify-center">
      <div className="flex items-center gap-3">
        <p className="text-[#a1a1aa] text-[10px]">say hi!</p>
        <a href="x.com">
          <BsTwitterX size={"0.7em"} color="white" />
        </a>
        <a href="https://www.linkedin.com">
          <GrLinkedinOption size={"0.7em"} color="white" />
        </a>
        <a href="https://www.github.com/ds-spec">
          <LuGithub size={"0.7em"} color="white" />
        </a>
      </div>
      <h1 className="text-4xl text-white font-bold mt-2">deepak sharma</h1>
      <div className="flex justify-center flex-col gap-2">
        <div className="mt-4 flex items-center gap-2">
          {" "}
          <CiLocationOn color="#a1a1aa" />{" "}
          <p className="text-[#a1a1aa] text-xs">surat,india</p>
        </div>
        <div className="flex items-center gap-2">
          {" "}
          <LuBuilding2 color="#a1a1aa" />{" "}
          <p className="text-[#a1a1aa] text-xs">web developer @react</p>
        </div>
      </div>
      <h3 className="text-[#fafafa] text-sm w-[80%] mt-4 leading-5">
        hey, i'm deepak sharma. I'm a web developer who builds web apps and
        experiments with cool side projects. I've spent the last 3 years working
        with startups, shipping fast and solving real problems. If you're
        building something exciting and need a clean, performant web app — let's
        talk.
      </h3>
      <div className="text-white text-xs mt-2">
        i am obsessed with <span className="text-[#70D935] ">{text}</span>
        <Cursor cursorColor="#70D935" />
      </div>
      <div className="flex flex-col justify-center mt-12 leading-8">
        <h1 className="text-white text-2xl">
          <span className="text-[#70D935]">*</span> work
        </h1>
        <div className="flex flex-col justify-center mt-8">
          <h3 className="text-white ">aavrti technologies</h3>
          <h4 className="text-[#a1a1aa] text-xs">
            front-end developer (sept 2021 – present)
          </h4>
          <h5 className="text-[#a1a1aa] text-xs">
            building webapps from scratch
          </h5>
        </div>
      </div>
      <div className="flex flex-col justify-center mt-12 leading-8">
        <h1 className="text-white text-2xl">
          <span className="text-[#70D935]">*</span> projects
        </h1>
        <div className="flex flex-col justify-center mt-8">
          <h3 className="text-white ">task management system</h3>
          <h4 className="text-[#a1a1aa] text-xs">
            front-end developer (sept 2021 – present)
          </h4>
          <h5 className="text-[#a1a1aa] text-xs">
            building webapps from scratch
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Home;
