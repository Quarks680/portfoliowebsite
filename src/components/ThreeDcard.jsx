"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "../components";



export function ThreeDcard() {
  const data = [
    { image: "/public/Icons/javascript.svg", name: "Javascript" },
    { image: "/public/Icons/react.svg", name: "React" },
    { image: "/public/Icons/redux.svg", name: "Redux" },
    { image: "/public/Icons/c++.svg", name: "C++" },
  ];
  return (
    <div className="flex items-center justify-center gap-8 mt-20">
      {data.map((items, key) => (
        <CardContainer key={key} className="  ">
          <CardBody className="bg-[#2e2e2e]   hover:bg-[#454545]   relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1]  w-70 h-70 rounded-xl  border">
            <CardItem translateZ={100} className="  ">
              {/* Use the correct Image tag based on your setup */}

              <img
                src={items.image}
                className=" object-cover  h-60 w-60 rounded-xl "
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-center items-center mt-1 mb-3">
              <h1 className="text-slate-300 font-sans text-2xl">
                {items.name}
              </h1>
            </div>
          </CardBody>
        </CardContainer>
      ))}
    </div>
  );
}

export default ThreeDcard;
