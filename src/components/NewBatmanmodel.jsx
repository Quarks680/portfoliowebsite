import React from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, Stage, PresentationControls } from '@react-three/drei';

function Model(props) {
  const { scene } = useGLTF("scene.gltf");
  return <primitive object={scene} {...props} />;
}

function NewBatmanmodel() {
  return (
    <div className="relative w-full h-screen flex flex-col">
     
      <div className="absolute inset-0 flex flex-col items-center justify-center uppercase text-6xl md:text-8xl text-white font-LoRes font-bold z-10 pointer-events-none">
        <div>
          <h1>Anurag</h1>
        </div>
        <div>
          <h1>Kumar</h1>
        </div>
      </div>

    
      <div className="absolute inset-0 z-20">
        <Canvas dpr={[1, 2]} shadows camera={{ fov: 45 }} className="w-full h-full">
         
          <PresentationControls
            speed={1.5}
            global
            zoom={0.5}
            polar={[-Math.PI / 6, Math.PI / 6]} 
            azimuth={[-Math.PI / 3, Math.PI / 3]} 
          >
            <Stage environment="lobby" intensity={0.1}>
              <Model scale={[2, 2, 2]} />
            </Stage>
          </PresentationControls>
         
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
        </Canvas>
      </div>
    </div>
  );
}

export default NewBatmanmodel;
