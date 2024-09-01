import React, { useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import { pointsInner, pointsOuter } from "../utils/utils";
import gsap from "gsap";

const ParticleRing = () => {
  const circleRef = useRef(null);
  const containerRef = useRef(null);
  const moveupRef = useRef(null);
  const buttonRef = useRef(null);

  const [show, setShow] = useState(true);

  function handleLoadingDisapper() {
    setShow(false);
  }

  useEffect(() => {
    const circle = circleRef.current;
    const container = containerRef.current;
    const moveup = moveupRef.current;
    const button = buttonRef.current;
    const length = circle.getTotalLength();

    gsap.set(circle, {
      strokeDasharray: length,
      strokeDashoffset: length,
    });

    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(container, { opacity: 0, duration: 1 });

        gsap.to(moveup, { top: "30%" });

        gsap.to(button, { top: "30%", opacity: "100%" });
      },
    });

    tl.to(circle, {
      strokeDashoffset: 0,
      duration: 5,
      ease: "power2.inOut",
    }).to(circle, {
      strokeDashoffset: -length,
      duration: 1.5,
      ease: "power2.inOut",
    });
  }, []);

  return (
    <>
      {show && (
        <>
          <div className="fixed top-0 left-0 w-full h-full  bg-[#121212] z-[99999]">
            <div className="w-full z-[999999999999999] relative h-screen">
              <Canvas
                camera={{
                  position: [10, -7.5, -5],
                }}
                style={{ height: "100vh" }}
                className="#121212"
              >
                <OrbitControls maxDistance={20} minDistance={10} />
                <directionalLight />
                <pointLight position={[-30, 0, -30]} power={10.0} />
                <PointCircle />
              </Canvas>
              <div className="absolute top-[50%] left-[50%] -translate-x-[50%]  -translate-y-[50%] text-slate-200 font-medium text-2xl md:text-5xl">
                <div
                  className="relative"
                  ref={containerRef}
                  // style={{ "--po": 829, "--opacity": 2 }}
                >
                  <svg
                    id="page-loading_circle"
                    width="270"
                    height="270"
                    viewBox="0 0 270 270"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ opacity: 1 }}
                  >
                    <circle
                      ref={circleRef}
                      cx="136"
                      cy="136"
                      r="132"
                      stroke="#B7AB98"
                      strokeLinecap="round"
                      strokeWidth="2"
                      style={{
                        transformOrigin: "center",
                        transform: "rotate(-90deg)",
                        backgroundColor: "white",
                      }}
                    ></circle>
                  </svg>
                </div>
                <div
                  ref={moveupRef}
                  className="flex items-center justify-center absolute left-1/3 top-1/3 "
                >
                  <img
                    src="public/Video/dilse.gif"
                    className="w-20 h-20 rounded-full"
                    alt=""
                  />
                </div>
                <div
                  ref={buttonRef}
                  onClick={handleLoadingDisapper}
                  className="group transform translate-x-[22%] opacity-0 relative "
                >
                  <div className="rounded-l-full rounded-r-full h-12 w-36 flex items-center justify-center border-2 border-solid border-white  group-hover:border-transparent group-hover:bg-white">
                    <p className="text-xl text-white  font-avantGarde tracking-widest uppercase group-hover:text-black">
                      Start
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

const PointCircle = () => {
  const ref = useRef(null);

  useFrame(({ clock }) => {
    if (ref.current?.rotation) {
      ref.current.rotation.z = clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <group ref={ref}>
      {pointsInner.map((point) => (
        <Point key={point.idx} position={point.position} color={point.color} />
      ))}
      {pointsOuter.map((point) => (
        <Point key={point.idx} position={point.position} color={point.color} />
      ))}
    </group>
  );
};

const Point = ({ position, color }) => {
  return (
    <Sphere position={position} args={[0.1, 10, 10]}>
      <meshStandardMaterial
        emissive={color}
        emissiveIntensity={0.5}
        roughness={0.5}
        color={color}
      />
    </Sphere>
  );
};

export default ParticleRing;
