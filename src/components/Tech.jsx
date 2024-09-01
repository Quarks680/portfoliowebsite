import React from 'react'
import ThreeDcard from './ThreeDcard'
import MovingIcons from './MovingIcons'

function Tech() {
  return (
    <div className='flex items-center justify-center mt-36 flex-col'>
        <h1 className='font-unbounded text-white text-7xl font-bold'>/Tech Stack_</h1>
        <ThreeDcard/>
        <MovingIcons/>
    </div>
    
  )
}

export default Tech