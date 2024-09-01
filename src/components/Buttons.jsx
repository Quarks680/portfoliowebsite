
import React from 'react'
import Sparkle from './Sparkle';



function Buttons() {
    const data = [{name: "Resume", link: "dsdsd"},
        {name:"Contact", link: "mailto:anuragkumarkumar03@gmail.com"}
    ];
   
    
  return (
    
     
      <div className='flex items-center gap-7 mt-10 '>
        {data.map((items,index) =>
           <a href={items.link}>
            <button  className={`${items.name == "Resume" ? "bg-[#ff4f00]" : "bg-zinc-800" } relative w-24 h-12 p-4 font-satoshi rounded-xl text-white text-base font-semibold flex items-center justify-center hover:scale-90`} key={index}><Sparkle id={items.name}/> {items.name }</button>
           </a>
        )}
        
    </div>
    
  )
}

export default Buttons