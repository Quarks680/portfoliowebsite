import React, { useRef, useState, useEffect } from "react";
import TextRevealByWord from "./TextRevealByWord";
import ButtonOrg from "./ButtonOrg";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";

function About() {
  const targetRef = useRef();
  const imageRef = useRef();

  const [showImages, setShowImages] = useState(false);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  useEffect(() => {
    if (imageRef.current) {
      const handleHover = (event) => {
        setShowImages(true);
      };

      const handleMouseLeave = (event) => {
        setShowImages(false);
      };

      imageRef.current.addEventListener("mousemove", handleHover);
      imageRef.current.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        imageRef.current?.removeEventListener("mousemove", handleHover);
        imageRef.current?.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, [imageRef]);

  return (
    <div className=" mt-5 ">
      <div ref={targetRef} className="grid grid-cols-2 h-[200vh] ">
        <TextRevealByWord
          scrollYProgress={scrollYProgress}
          className={`sm:text-sm text-xs font-clashdisplay font-medium`}
          text="Greetings, I'm Anurag Kumar. I'm a dedicated web developer and robotics enthusiast with a strong foundation in development principles, supported by my bachelor's degree in B.Tech Mechatronics. I thrive on crafting exceptional user-centric digital experiences and find joy in creatively overcoming technical challenges. My ongoing pursuit is to enhance web interactions and explore the cutting-edge intersections of robotics and cybersecurity."
        />
        <div className="relative  ">
          {/* <div className=" relative w-full"> */}
          <img
            className="top-0 left-0 sm:mb-20 mb-6 sticky mt-12 rounded-xl "
            src="/images/anurag[1].png"
            alt=""
            ref={imageRef}
          />
          {/* </div> */}
          {/* <div className=" grid grid-cols-3 absolute top-0 left-0 grid-rows-2 z-[100000] w-full h-full ">
            <div className="sticky">
              {["div-1", "div-2", "div-3", "div-4", "div-5", "div-6"].map(
                (d, i) => (
                  <div
                    className={`${d} bg-green-200 border border-black`}
                    key={i}
                  />
                )
              )}
            </div>
          </div> */}
        </div>
      </div>
     
       <ButtonOrg className="mt-18" ine={"hey friends!"} out={"More about me"} about={"/about"} />
     
    </div>
  );
}

export default About;
