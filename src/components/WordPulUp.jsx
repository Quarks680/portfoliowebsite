"use client";
import { AnimatePresence, motion, useInView } from "framer-motion";

import { useEffect, useRef } from "react";

// Utility function to concatenate class names
// Assuming `cn` is a utility function, if not, replace with any appropriate class handling logic
const cn = (...classes) => classes.filter(Boolean).join(" ");

export default function WordPullUp({
  words,
  wrapperFramerProps = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 1,
      },
    },
  },
  framerProps = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  },
  className,
}) {
 
  const ref = useRef(null);

  
  const isInView = useInView(ref);

  useEffect(() => {
    console.log("is in view -> ", isInView);
  }, [isInView]);

  return (
   <div  ref={ref} >
   <AnimatePresence>
    {isInView &&  <motion.h1
     
      variants={wrapperFramerProps}
      initial="hidden"
      animate={isInView ? "show" : "hidden"} 
      className={cn(
        "font-display text-center text-4xl font-bold leading-[5rem] tracking-[-0.02em] drop-shadow-sm",
        className
      )}
    >
      {words.split(" ").map((word, i) => (
        <motion.span
          key={i}
          variants={framerProps}
          style={{ display: "inline-block", paddingRight: "8px" }}
        >
          {word === "" ? <span>&nbsp;</span> : word}
        </motion.span>
      ))}
    </motion.h1>}
    
  </AnimatePresence>
  </div>
  );
}
