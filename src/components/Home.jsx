import React from 'react'
import Homeleft from './Homeleft'
import Righthome from './Righthome'
import CardsProject from './CardsProject'



function Home() {
  return (
    <div className='p-4 lg:max-w-[1450px] mx-auto'>
       <div className='grid  md:grid-cols-2'>
        <Homeleft />
        <Righthome/>
       </div>
    </div>
   
  )
}

export default Home