import React from 'react'
import { WobbleCard } from './WobbleCard'

function CardsWobble() {

  return (
    <div className='h-[50vh] grid md:grid-cols-2 gap-4 mt-4 '>
     <WobbleCard >
        <div className='z-10 absolute top-0 left-0 flex items-center justify-center w-full h-full mx-auto'>
          <h1 className='z-70  relative  font-bold font-satosh -top-10 text-white text-[20vw] sm:text-[10vw]'>Ghost</h1>
         <img className='z-20 absolute h-full w-full aspect-auto m-4 object-contain  '  src="/public/images/tutahua.png" alt="" />
        </div>
        
     </WobbleCard>
     <WobbleCard className={`bg-blue-800`}>
       <div className='z-10 absolute top-0 left-0 flex items-center justify-center w-full h-full mx-auto'>
          <h1 className='z-70  relative  font-bold font-satoshi -top-10 text-white text-[18vw] sm:text-[9vw]'>Deadpool</h1>
         <img className='z-20 absolute h-full w-full sm:left-52 left-28  aspect-auto m-4  object-contain  '  src="/public/images/deadpool.png" alt="" />
        </div>

     </WobbleCard>
    </div>
  )
}

export default CardsWobble