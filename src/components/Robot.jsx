import React, { useEffect, useState } from "react";
import { TextRevealCard } from "./TextRevealCard";
import { motion, AnimatePresence } from "framer-motion";

import MinecraftDynamicClay from "../../public/minecraft/minecraft-dynamic-clay.png";
import MinecraftDynamicColor from "../../public/minecraft/minecraft-dynamic-color.png";
import MinecraftDynamicGradient from "../../public/minecraft/minecraft-dynamic-gradient.png";
import MinecraftDynamicPremium from "../../public/minecraft/minecraft-dynamic-premium.png";
function Robot() {
  const data = [
    { img: "/public/minecraft/minecraft-dynamic-clay.png" },
    { img: "/public/minecraft/minecraft-dynamic-color.png" },
    { img: "/public/minecraft/minecraft-dynamic-gradient.png" },
    { img: "/public/minecraft/minecraft-dynamic-premium.png" },
  ];

  const [images, Setimages] = useState([]);

  const [currentindex, Setcurrentindex] = useState(0);
  useEffect(() => {
    const minecraft = [
      MinecraftDynamicClay,
      MinecraftDynamicColor,
      MinecraftDynamicGradient,
      MinecraftDynamicPremium,
    ].map((items) => {
        console.log(items.src);
        const image = new Image()
        image.src = items
        image.onload = () => {
            console.log(images)
          Setimages((prevImages) => [...prevImages, image.src]);
        };
    });

  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      Setcurrentindex((prevIndex) => (prevIndex + 1) % data.length);
    }, 2000);

    return () => clearInterval(timer);
  }, [data.length]);
  return (
    <div className="sm:mt-24 mt-14 flex flex-col items-center justify-center gap-2">
      {images.map(
        (items, index) =>
          index == currentindex && (
            <img
              key={index}
              className="sm:h-44 sm:w-44 h-20 w-20 ease-in-out "
              src={items}
              alt=""
            />
          )
      )}

      <TextRevealCard
        className={`flex items-center justify-center font-timenewroman font-semibold   text-white text-8xl`}
        text="Making Good Shit"
        revealText="Hiding Bad Shit"
      ></TextRevealCard>
    </div>
  );
}

export default Robot;
