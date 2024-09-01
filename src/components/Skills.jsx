import React from "react";
import SkillsCard from "./SkillsCard";



function Skills() {
  
  
  return (
    <div className="flex relative flex-col items-center mt-36 justify-center overflow-x-hidden ">
      <SkillsCard className=""/>
      <h1 className="uppercase text-[#5e5e5e] pt-32  sm:text-[200] md:text-[160px] lg:text-[288px] font-extrabold z-10 relative  font-unbounded">
        Skills
      </h1>
    </div>
  );
}

export default Skills;
