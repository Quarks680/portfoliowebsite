import React, { useEffect, useRef, useState } from "react";
import Batmanmodel from "../components/Batmanmodel";
import NewBatmanmodel from "../components/NewBatmanmodel";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import Contact from "../components/Contact";
import Contactbutton from "../components/Contactbutton";
import Circularscroll from "../components/Circularscroll";
import Batmansenserity from "../components/Batmansenserity";
import Svgscroll from "../components/Svgscroll";
import Batmanloading from "../components/Batmanloading";
import Cursor from "../components/Cursor";


gsap.registerPlugin(ScrollTrigger);
function Aboutpage() {
  const box = useRef(null);
  useEffect(() => {
    const element = box.current;

    gsap.fromTo(
      element,
      { x: "25%" },
      {
        x: "-25%",
        scrollTrigger: {
          trigger: element,
          start: "top 65%",
          end: "top 20%",
          scrub: 5,
          toggleActions: "play pause resume pause",
          durations: 10,
          markers: false,
        },
      }
    );
  }, []);

  return (
    <>
    <Batmanloading/>
    <div>
      <Cursor/>
      <Svgscroll/>
      <div className="relative z-30">
        <h1 className="relative font-bold text-lg pt-10 text-[#ff4f00] uppercase ">
          Anurag kumar portfolio©️
        </h1>
        <div className="h-[80vh] w-full ">
          <NewBatmanmodel />
        </div>
        <div className="mt-10">
          <div>
            <video
              autoPlay
              loop
              muted
              className="w-56 h-32"
              src="public/video/mojmasti.mp4"
            ></video>
          </div>
          <p className="text-white font-Karla font-medium text-2xl">
            "I'm Anurag kumar, an experienced frontend developer with a <br />{" "}
            passion for crafting engaging user experiences. Welcome to my <br />{" "}
            portfolio!"
          </p>
        </div>
        <div className="flex items-center justify-center ">
          <div className="w-3/12 h-96 mb-36">
            <img
              className="relative z-30 mt-9 "
              src="/images/pfp3black.png"
              alt=""
            />
          </div>

          <div
            ref={box}
            className=" transform -translate-y-[10%] absolute z-40 mix-blend-difference "
          >
            <h1
              className={`uppercase  text-anu text-[10vw]  font-Karla font-bold`}
            >
              about
            </h1>
          </div>
        </div>
        <div className="mt-10 flex items-center justify-center ml-34 ">
          <p className=" text-white font-Karla font-medium text-2xl">
            As a dedicated developer with a strong foundation in web
            development, <br /> I'm skilled in languages like JavaScript, React,
            and CSS. I'm enthusiastic about staying <br /> informed on the
            latest trends and eagerly embrace new technologies and frameworks.
            <br /> I value the importance of cohesive design and strive to
            create solutions that <br /> blend functionality with aesthetics.
          </p>
        </div>
        <Contactbutton />
        <Batmansenserity/>
        <Circularscroll />
        <div className="flex items-center justify-center">
          <p className="text-white font-bdogratesk ">This portfolio is currently in development as I continue to refine my skills and showcase the projects I've been working on in web development, robotics, and cybersecurity. <br /> Stay tuned for updates as I complete this site with my latest work and accomplishments.</p>
        </div>
      </div>
     
    </div>
    </>
  );
}

export default Aboutpage;
