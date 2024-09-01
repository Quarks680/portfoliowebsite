import React from "react";
import Meteors from "./Meteors";
import ShimmerButton from "./ShimmerButton";
import { FlipWords } from "./FlipWords";
import Buttons from "./Buttons";

function Homeleft({ left }) {
  return (
    <div className={`h-max w-full  `}>
      <div className={`h-max relative overflow-hidden  `}>
        <Meteors />
        <h1 className="relative font-bold text-lg pt-10 text-[#ff4f00] uppercase ">
          Anurag kumar portfolio©️
        </h1>
        <div className="flex gap-10 mt-20">
          <div className="flex items-center">
            <img
              className="h-24 w-24 rounded-full "
              src="../public/images/pfp.jpg"
              alt=""
            />
          </div>
          <div className="flex items-center font-sans">
            <ShimmerButton
              className="z-50  flex items-center justify-center  "
              shimmerColor="#ff00ff"
              shimmerDuration="2s"
            >
              Available for work
            </ShimmerButton>
          </div>
        </div>
        <Meteors />
        <div className="flex flex-col gap-3 mt-12">
          <h1 className="font-unbounded font-bold text-white text-6xl ">
            More than just
          </h1>
          <div className="flex items-center gap-1 ">
            <h1 className="font-unbounded font-bold text-white text-6xl">
              the
            </h1>
            <FlipWords
              words={["Engineer.", "Coder."]}
              duration={3000}
              className="text-6xl  font-semibold text-[#ff4f00]"
            />
          </div>
        </div>
        <h4 className="mt-10 text-gray-500 ">
          Mastering the Art of Creative Disruption
        </h4>
        <Buttons />
      </div>
    </div>
  );
}

export default Homeleft;
