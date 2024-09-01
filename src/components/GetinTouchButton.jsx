import React from "react";
import { AnimatePresence, motion, MotionConfig, useAnimationControls } from "framer-motion";

function GetinTouchButton() {
  const handleonClick = () =>{
    window.location.href="mailto:anuragkumarkumar03@gmail.com";
  }

  const controls = useAnimationControls();
  
  const handlehover = ()=>{
      controls.start("change");
  }
  const handlereturn = ()=>{
    controls.start("initial");
  }
  
  return (
    <>
    <div onClick={handleonClick} className="flex group  items-center justify-center">
        <div className="absolute z-50 opacity-0 group-hover:opacity-100">
          <div className="absolute z-50 left-1 -top-12">
            <svg xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="10"
              height="10"
              className="fill-white " >
              <path d="M12.9367 3.64886L12.0003 1.15198L11.064 3.64886C9.66542 7.37843 7.3788 9.66506 3.64922 11.0636L1.15234 12L3.64922 12.9363C7.3788 14.3349 9.66542 16.6215 11.064 20.3511L12.0003 22.848L12.9367 20.3511C14.3353 16.6215 16.6219 14.3349 20.3515 12.9363L22.8483 12L20.3515 11.0636C16.6219 9.66506 14.3353 7.37843 12.9367 3.64886Z"/>
            </svg>
          </div>
          <div className="absolute z-50 left-10 -top-9 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="15"
              height="15"
              className="fill-white  " >
              <path d="M12.9367 3.64886L12.0003 1.15198L11.064 3.64886C9.66542 7.37843 7.3788 9.66506 3.64922 11.0636L1.15234 12L3.64922 12.9363C7.3788 14.3349 9.66542 16.6215 11.064 20.3511L12.0003 22.848L12.9367 20.3511C14.3353 16.6215 16.6219 14.3349 20.3515 12.9363L22.8483 12L20.3515 11.0636C16.6219 9.66506 14.3353 7.37843 12.9367 3.64886Z"/>
            </svg>
          </div>
          <div className="absolute z-50 left-14 top-2">
            <svg 
             xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 24 24"
             width="24"
             height="24"
              className="fill-white" >
              <path d="M12.9367 3.64886L12.0003 1.15198L11.064 3.64886C9.66542 7.37843 7.3788 9.66506 3.64922 11.0636L1.15234 12L3.64922 12.9363C7.3788 14.3349 9.66542 16.6215 11.064 20.3511L12.0003 22.848L12.9367 20.3511C14.3353 16.6215 16.6219 14.3349 20.3515 12.9363L22.8483 12L20.3515 11.0636C16.6219 9.66506 14.3353 7.37843 12.9367 3.64886Z"/>
            </svg>
          </div>
            <div className="absolute z-50 -left-16 top-5 ">
             <svg 
             xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 24 24"
             width="14"
             height="14"
              className="fill-white" >
              <path d="M12.9367 3.64886L12.0003 1.15198L11.064 3.64886C9.66542 7.37843 7.3788 9.66506 3.64922 11.0636L1.15234 12L3.64922 12.9363C7.3788 14.3349 9.66542 16.6215 11.064 20.3511L12.0003 22.848L12.9367 20.3511C14.3353 16.6215 16.6219 14.3349 20.3515 12.9363L22.8483 12L20.3515 11.0636C16.6219 9.66506 14.3353 7.37843 12.9367 3.64886Z"/>
            </svg>
           </div>
          <div className="absolute z-50 left-1 top-9">
            <svg 
             xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 24 24"
             width="8"
             height="8"
              className="fill-white" >
              <path d="M12.9367 3.64886L12.0003 1.15198L11.064 3.64886C9.66542 7.37843 7.3788 9.66506 3.64922 11.0636L1.15234 12L3.64922 12.9363C7.3788 14.3349 9.66542 16.6215 11.064 20.3511L12.0003 22.848L12.9367 20.3511C14.3353 16.6215 16.6219 14.3349 20.3515 12.9363L22.8483 12L20.3515 11.0636C16.6219 9.66506 14.3353 7.37843 12.9367 3.64886Z"/>
            </svg>
          </div>
          <div className="absolute z-50 -left-20 -top-8">
            <svg 
             xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 24 24"
             width="9"
             height="9"
              className="fill-white" >
              <path d="M12.9367 3.64886L12.0003 1.15198L11.064 3.64886C9.66542 7.37843 7.3788 9.66506 3.64922 11.0636L1.15234 12L3.64922 12.9363C7.3788 14.3349 9.66542 16.6215 11.064 20.3511L12.0003 22.848L12.9367 20.3511C14.3353 16.6215 16.6219 14.3349 20.3515 12.9363L22.8483 12L20.3515 11.0636C16.6219 9.66506 14.3353 7.37843 12.9367 3.64886Z"/>
            </svg>
          </div>
        </div>
      <motion.div
      className="w-36 h-14 ease-in-out  group-hover:-rotate-3 relative right-0 group-hover:right-2 top-0 group-hover:top-2 border-white border border-solid bg-anu flex items-center justify-center rounded-xl hover: ">
      </motion.div>
     
      <motion.div onHoverStart={handlehover} onHoverEnd={handlereturn} layout className=" ease-in-out duration-75 group-hover:drop-shadow-xl z-30 overflow-hidden  w-36 h-14 group-hover:-rotate-3 absolute  border-white border border-solid  bg-anu flex items-center justify-center rounded-xl hover: ">
       <AnimatePresence mode="sync">
        <motion.div variants={{
          initial: {
            x: -60,
            opacity: 0,
            
          },
          change:{
           
            x: 85,
            opacity: 1,
            
          },
         
        }}
        initial = "initial"
        animate = {controls}
        exit = {{
          x: -60,
          opacity: 0,
        }}
        transition={{
          duration: 0.25,
          ease: "backInOut"
        }}
      
       
        className="absolute z-50  flex gap-1 opacity-0 group-hover:opacity-85 ">
           <div className=" h-16 w-2 -rotate-12 bg-white"></div>
           <div className=" h-16 w-1 -rotate-12 bg-white"></div>
        </motion.div>
      </AnimatePresence>
        <h1 className="text-white">Get in touch</h1>
      </motion.div>
    </div>
    </>
  );
}

export default GetinTouchButton;
