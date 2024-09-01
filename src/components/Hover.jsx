import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";


function Hover() {
  return (
    <div className='font-bdogratesk h-full backdrop-blur-sm flex flex-col justify-between relative px-2 py-4 sm:px-6 sm:py-8 '>
        <div>
        <h1 className='sm:text-6xl text-2xl font-bdogratesk font-bold text-white'>Refokus Clone</h1>
        <h3 className='sm:text-xl text-sm font-bold mt-2 sm:mt-5 text-white'>This is the Clone of the Old Refokus Website</h3>
        </div>
        <a href="https://github.com/Quarks680/refokus-clone" target="_blank" rel="noreferrer">
        <div className='sm:w-44 sm:h-16 w-28 h-10 bg-white rounded-full flex items-center justify-center sm:gap-4 gap-1 group'>
            <h1 className='font-bdogratesk font-medium '>GitHub.com</h1>
            <FaArrowRightLong className='font-medium  -rotate-45 transition-transform duration-200 group-hover:rotate-0 '/>
        </div>
        </a>
        
    </div>
  )
}

export default Hover