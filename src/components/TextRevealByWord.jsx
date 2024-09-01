"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import { cn } from "../utils/cn";

export const TextRevealByWord = ({ text, className, scrollYProgress }) => {
  // const targetRef = useRef(null)

  // const { scrollYProgress } = useScroll({
  //   target: targetRef
  // })
  const words = text.split(" ");

  return (
    <div  className={cn(" z-0", className)}>
      <div
        className={
          "sticky top-0 mx-auto flex h-[50%] max-w-4xl items-center bg-transparent px-[1rem] py-[5rem]"
        }
      >
        <p
          // ref={targetRef}
          className={
            "flex flex-wrap p-5 text-xs  text-white/50 dark:text-white/20 md:p-8 md:text-3xl lg:p-10 lg:text-xl xl:text-3xl"
          }
        >
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </p>
      </div>
    </div>
  );
};

const Word = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="xl:lg-3 relative mx-1 lg:mx-2.5">
      <span className={"absolute opacity-30"}>{children}</span>
      <motion.span
        style={{ opacity: opacity }}
        className={"text-white dark:text-white"}
      >
        {children}
      </motion.span>
    </span>
  );
};

export default TextRevealByWord;
