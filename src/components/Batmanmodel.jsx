import React from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, Stage, PresentationControls } from '@react-three/drei';



function Model(props) {
  const { scene } = useGLTF("scene.gltf");
  return <primitive object={scene} {...props} />;
}

function Batmanmodel() {
  return (
    <>
    <Canvas dpr={[1, 2]} shadows camera={{ fov: 45 }} style={{ position: 'relative' }}>
      <color attach="background" args={["#121212"]} />
      <PresentationControls
        speed={1.5}
        global
        zoom={0.5}
        polar={[-Math.PI / 6, Math.PI / 6]} // Allows slight up and down rotation
        azimuth={[-Math.PI / 3, Math.PI / 3]} // Allows slight left and right rotation
      >
        <Stage environment="lobby" intensity={0.1}>
          <Model scale={[2, 2, 2]} />
        </Stage>
      </PresentationControls>
      {/* Additional lights for better visibility */}
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
    </Canvas>
    
    </>
  );
}

export default Batmanmodel;
