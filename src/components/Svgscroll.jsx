import { useEffect, useRef } from "react";
import React from 'react'

function Svgscroll() {
    const svgRef = useRef(null);
    const pathRef = useRef(null);

    useEffect(() => {
        const svg = svgRef.current;
        const path = pathRef.current;
        const pathLength = path.getTotalLength();

        // Set up the path's initial state
        path.style.strokeDasharray = pathLength;
        path.style.strokeDashoffset = pathLength;

        const scrollHandler = () => {
            const scrollY = window.scrollY;
            const totalScrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercentage = scrollY / totalScrollableHeight;

            // Update strokeDashoffset to reveal the path based on scroll percentage
            path.style.strokeDashoffset = pathLength - (scrollPercentage * pathLength);
        };

        // Attach scroll event listener
        window.addEventListener("scroll", scrollHandler);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener("scroll", scrollHandler);
        };
    }, []);

  return (
    <div>
        <svg 
         
         ref={svgRef}
        className='absolute w-[100vw] height-[200vh] z-[15] top-0 left-0'
        style={{
            width: "1000",
            height: "2000",
            viewBox: "0 0 1000 2000",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
        }}
        >
            <path
              ref={pathRef}
              d="M -24.5 101 C 285 315 5.86278 448.291 144.223 631.238 C 239.404 757.091 559.515 782.846 608.808 617.456 C 658.101 452.067 497.627 367.073 406.298 426.797 C 314.968 486.521 263.347 612.858 322.909 865.537 C 384.086 1125.06 79.3992 1007.94 100 1261.99 C 144.222 1807.35 819 1325 513 1142.5 C 152.717 927.625 -45 1916.5 1191.5 1852"
              stroke = "#ff4f00"
              stroke-width= "0.5rem"
              stroke-linejoin="round"
              stroke-linecap = "round"
            />

        </svg>
    </div>
  )
}

export default Svgscroll