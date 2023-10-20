import React, { useEffect, useState } from 'react';
import { scroll, motion } from "framer-motion";


const Landing = () => {
  const [isSticky, setIsSticky] = useState(true);
  const scrollThreshold = 3000;
  

  useEffect(() => {
    const video = document.querySelector("video");
    video.pause();
    const handleScroll = () => {
      if (window.scrollY > scrollThreshold) {
        setIsSticky(false);
      } else {
        setIsSticky(true);
      }
    };

    scroll((progress) => {
        if (video.readyState) {
          video.currentTime = video.duration * 2 * progress;
        }
      });

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    
    <div className="relative" style={{height: '400px'}}>
    <div className={`w-full h-screen object-cover ${isSticky ? 'fixed top-0 left-0' : 'relative'}`}>
      <video muted className="w-full h-full object-cover">
        <source src="rocket.mp4" type="video/mp4" />
        
      </video>

      
    </div>
  </div>
  );
};

export default Landing;
