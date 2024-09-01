import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";


function Batmanloading() {
  const box = useRef(null);
  const test = useRef(null);

  const [show, setshow] = useState(true);

  useEffect(() => {
    gsap.fromTo(box.current, { width: "0%" }, { width: "75%", duration: 4 });
    gsap.fromTo(
      test.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 4,
        onComplete: () => {
          setshow(false);
          console.log("sexy");
        },
      }
    );
  }, []);

  return (
    <>
      {show && (
        
          <div className="flex flex-col fixed z-[99999] top-0 left-0 bg-[#121212] items-center justify-center w-[100vw] h-[100vh]">
            <div ref={test} className="">
              <h1 className="text-7xl font-clashdisplay font-medium text-white">
                I'm Batman ;)
              </h1>
            </div>

            <div ref={box} className="h-2 bg-anu mt-8  "></div>
          </div>
        
      )}
    </>
  );
}

export default Batmanloading;
