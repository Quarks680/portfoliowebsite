import React, { useRef, useEffect } from 'react'
import Hover from './Hover';



function CardsProject({  }) {

    const videoRef = useRef(null);

    useEffect(() => {
      const video = videoRef.current;
  
      const handlePlay = (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play();
          } else {
            video.pause();
          }
        });
      };
  
      const observer = new IntersectionObserver(handlePlay, {
        threshold: 0.5,
      });
  
      observer.observe(video);
  
      return () => {
        if (video) {
          observer.unobserve(video);
        }
      };
    }, []);

  return (
    <div className={` group max-w-8xl  flex items-center relative overflow-hidden  bg-blue-600 rounded-xl sm:flex-col sm:items-center  `} >
        <video className='rounded-xl  ' ref={videoRef}  src={`public/video/refokus.mp4`}></video>
        <div className='hidden z-50 w-full h-full absolute group-hover:block'>
          <Hover/>
        </div>
    </div>
  )
}

export default CardsProject