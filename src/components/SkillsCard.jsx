import React,  { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)


function SkillsCard() {
  const cardRef  = useRef(null);
  useEffect(()=> {
    const card = cardRef.current;
    gsap.fromTo(card, { x: '200%'}, {x: '-200%', duration: 500, scrollTrigger: {
      trigger: card,
      start: "top 55%",
      //end: "top 20%",
      end: () => `+=${cardRef.current.offsetWidth} bottom`,
      scrub: true,
      toggleActions: "play pause resume pause"
    }})
  },[])

  const tata = [{image: "/images/web-development.webp", heading: "Web-Dev", para: "Enhancing website performance with cutting-edge optimization techniques."},
    {image: "/images/cyber.jpg", heading: "CyberSecurity", para: "Passionate about cybersecurity, I'm driven to protect digital spaces from threats."},
    {image: "/images/roboti.webp", heading: "Robotices", para: "I'm passionate about building robots that transform the way we live."}
  ];
  return (
    <div className="flex gap-36 z-20 absolute bottom-48" ref={cardRef}>
    {tata.map((items, key) => (
    <div key={key} className="w-80 h-96 bg-[#2e2e2e] rounded-md flex flex-col font-clashdisplay p-8">
      <h1 className="text-white text-4xl font-clashdisplay font-regular">
        {items.heading}
      </h1>
      <p className="mt-5 text-md font-clashdisplay font-regular text-gray-300 ">
        {items.para}
      </p>
      <img
        className="bg-slate-50 p-2 w-full h-40 mt-6"
        src={items.image}
        alt=""
      />
    </div>))}
    </div>
  );
}

export default SkillsCard;
