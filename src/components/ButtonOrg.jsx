import React from "react";

import { FaFighterJet } from "react-icons/fa";

import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom"

function ButtonOrg({ inner, ine, out, upper,project, about }) {
  return (
    <Link to={project || about}>
    <div className=" sm:h-20 h-12 relative rounded-xl sm:mt-4 mt-2 bg-white flex items-center justify-center overflow-hidden">
      <Marquee direction="right" speed={"100"}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((items, index) => (
          <div className="w-full mx-12">
            <FaFighterJet
              key={index}
              className="relative z-20 text-[#ff4f00]  font-thin sm:text-6xl text-4xl"
            />
          </div>
        ))}{" "}
      </Marquee>
      <div className="absolute z-10 bg-white">
        <h1 className=" font-clashdisplay font-bold text-[#ff4f00] uppercase sm:text-7xl text-3xl   tracking-wider">
          {inner || ine}
        </h1>
      </div>
      <div className="absolute overflow-hidden z-50  group top-0 left-0 w-full h-full grid grid-cols-4">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <div
            key={i}
            className="bg-anu relative rotate-45 scale-y-1000  group-hover:scale-0 transition-all origin-center "
          />
        ))}
        <div className="sm:left-[30%] sm:top-[15%] left-[15%] top-[9.5%] absolute z-40  ">
          <h1 className=" uppercase  transition-all font-bold text-white group-hover:text-transparent group  sm:text-6xl text-3xl  font-clashdisplay">
            {upper || out}
          </h1>
        </div>
      </div>
    </div>
    </Link>
  );
}

export default ButtonOrg;
