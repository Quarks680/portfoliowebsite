import { data } from 'autoprefixer'
import React from 'react'
import Marquee from 'react-fast-marquee'

function MovingIcons() {
    const data = [{image: "/public/Icons/css3.svg"},
        {image: "/public/Icons/git.svg"},
        {image: "/public/Icons/npm.svg"},
        {image: "/public/Icons/vscode.svg"},
        {image: "/public/Icons/python.svg"},
        {image: "/public/Icons/github.svg"},
        {image: "/public/Icons/Matlab_Logo.png"},
    ]
  return (
    <Marquee direction='left' loop={0} gradient="true" gradientColor='#121212' className='mt-16 mb-14'>
         {data.map((items,key)=>
        <div className=' flex ml-36'>
            <img className='h-20 w-20' src={items.image} alt="" />
        </div>
     )} 
    </Marquee>
    
  )
}

export default MovingIcons