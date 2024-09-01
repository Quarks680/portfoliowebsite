import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

function Contactbutton() {
  const handleonClick = () => {
    window.location.href = "mailto:anuragkumarkumar03@gmail.com";
  };

  return (
    <div
      onClick={handleonClick}
      className="flex items-center w-40 h-20   group mt-6  ml-48"
    >
      <div className="w-36 relative  z-10 h-14   bg-anu "></div>
      <div className="bg-white flex -mt-4 -ml-3 items-center justify-between group-hover:mt-0 group-hover:ml-0 transition-all duration-500 p-4 border-black border-2 border-solid absolute z-50 h-14 w-36  ">
        <h2 className="font-Karla text-black text-xl font-medium uppercase">
          Contact
        </h2>
        <FaArrowRightLong className="font-medium  -rotate-45    " />
      </div>
    </div>
  );
}

export default Contactbutton;
