import React, { useRef } from 'react'
import WordPullUp from './WordPulUp'
import Social from './Social'



function Footer() {

  const boxRef = useRef()
  

  return (
    <div  className='mt-8 flex flex-col items-center justify-center'>
       <WordPullUp className={`text-5xl text-white uppercase font-unbounded font-semibold `} words={`Anurag kumar protfolio©️`} />
       <Social/>
    </div>
  )
}

export default Footer