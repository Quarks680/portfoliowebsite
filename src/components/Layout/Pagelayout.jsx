import React from "react";
import Footer from "../Footer";
import Nav from "../Nav";
import { Outlet } from "react-router-dom";

function Pagelayout() {
  return (
    <div>
      <div className=" font-unbounded w-full bg-[#ff4f00]  p-2">
        <div className="w-full  bg-[#121212]  rounded-xl">
          <div className="p-4 lg:max-w-[1350px] mx-auto">
            <Outlet />
          </div>
        </div>
        <Nav />
        <Footer />
      </div>
    </div>
  );
}

export default Pagelayout;
