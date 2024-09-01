import React from 'react'
import { Canvas } from '@react-three/fiber';
import { useGLTF, Stage, PresentationControls } from '@react-three/drei';
import Gridback from './Gridback'


function Model(props){
    const { scene } = useGLTF("notfreedom.glb");
    return <primitive object={scene} {...props} />
  }
function Dmodel() {
  return (
    
    <Canvas dpr={[1,2]} shadows camera={{fov: 45}} style={{"position": "relative"}}>
    <color attach="background" args={["#121212"]}/>
    <PresentationControls speed={1.5} global zoom={0.5} polar={[-0.1, Math.PI / 4]} >
      <Stage environment={"lobby"} intensity={0.1}>
        <Model scale={0.01} />
      </Stage>

    </PresentationControls>
    /* Additional lights for better visibility */
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
    </Canvas>
    
    
  )
}

export default Dmodel