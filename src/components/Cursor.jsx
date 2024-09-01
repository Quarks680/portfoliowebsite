import React, { useEffect,useRef, useState } from 'react'
import gsap from 'gsap'

function Cursor() {
    const cursorRef = useRef(null);
    const cursor1Ref = useRef(null);
    const cursor2Ref = useRef(null);
  const mouseX = useRef(0);
  const mouseY = useRef(0);

  useEffect(() => {
    const handleMouseMove = (event) => {
      mouseX.current = event.clientX;
      mouseY.current = event.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animation = gsap.to({}, {
      duration: 0.016,
      repeat: -1,
      onRepeat: () => {
        gsap.set(cursorRef.current, {
          left: mouseX.current,
          top: mouseY.current,
         
         
        });
        gsap.to(cursor1Ref.current,{
            left: mouseX.current,
            top: mouseY.current,
            duration: 0.3,
            ease: "power2.out"
        });
        gsap.to(cursor2Ref.current,{
            left: mouseX.current,
            top: mouseY.current,
            duration: 0.6,
            ease: "power2.out"
        });
      },
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      animation.kill(); // Clean up GSAP animation
    };
  }, []);
  /* const cursorRef = useRef(null);
    const cursor1Ref = useRef(null);
    const cursor2Ref = useRef(null);

    useState(() =>{
        const handleMouseMove = (event) => {
            gsap.to(cursorRef.current,{
                x: event.clientX,
                y: event.clientY,
                duration: 0.03,
                ease: "power2.out"
            });
            gsap.to(cursor1Ref.current,{
                x: event.clientX,
                y: event.clientY,
                duration: 0.33,
                ease: "power2.out"

            });
            gsap.to(cursor2Ref.current,{
                x: event.clientX,
                y: event.clientY,
                duration: 0.63,
                ease: "power2.out"

            })
        };

        window.addEventListener("mousemove",handleMouseMove);

        return () => window.removeEventListener("mousemove",handleMouseMove)
    },[]); 
    */
  return (
    <div>
       <div ref={cursorRef} className='transfrom -translate-x-[50%] -translate-y-[50%] h-5 w-5 rounded-full bg-anu fixed z-[20] pointer-events-none'>

      </div>
      <div ref={cursor1Ref} className='w-10 h-10 bg-gray-800 opacity-60 rounded-full transfrom -translate-x-[50%] -translate-y-[50%] fixed z-[19]'>
      </div>
      <div ref={cursor2Ref} className='w-14 h-14 fixed z-[18] transform -translate-x-[50%] -translate-y-[50%] opacity-85 rounded-full bg-slate-500'></div>
    </div>
    
  )
}

export default Cursor