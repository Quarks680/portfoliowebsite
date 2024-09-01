import React from "react";
import GetinTouchButton from "./GetinTouchButton";

function Contact() {
  
  return (
    <div className="flex items-center justify-center mt-24 mb-16">
      <div className="bg-[#1a1a1a] flex h-96 w-11/12 overflow-hidden  ml-4 mr-4 rounded-3xl border-solid border-2 border-zinc-800">
      
        <img
          className="ml-8 scale-110 relative brightness-70 drop-shadow-2xl contrast-100 saturate-100 "
          src="/images/femojiboy.png"
          alt=""
        />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent blur-3xl" ></div>
        <div flex flex-col>
           <h1 className="text-white text-4xl font-unbounded font-bold flex flex-wrap justify-start ml-2 mt-28">Let's Create <br/> Magic Together.</h1>
           <p className="ml-16 mt-6 text-md font-sans text-zinc-400">If you appreciate my work or would like to connect,<br/> feel free to reach out to me anytime.</p>
        </div>
        <div className="flex items-center justify-center ml-24">
          <GetinTouchButton />
        </div>
      </div>
    </div>
  );
}

export default Contact;
