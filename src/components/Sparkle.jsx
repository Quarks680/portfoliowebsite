import React from 'react'
import { SparklesCore } from './SparklesCore';


function Sparkle({id}) {
  return (
    <div className="w-full absolute inset-0 h-full">
       
        <SparklesCore
          id= {id+"tsparticlesfullpage"}
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
       
    </div>
  )
}

export default Sparkle