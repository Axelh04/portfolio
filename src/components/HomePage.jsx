// src/components/HomePage.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
//import { useDarkMode } from '../Darkmode/DarkModeContext';



const links = [
  { name: 'Resume', href: '#' },
  { name: 'LinkedIn', href: '#' },
  { name: 'Github', href: '#' },
  { name: 'Medium', href: '#' },
]

const fontStyles = [
  { fontFamily: 'Font1, Helvetica', fontStyle:'italic', fontWeight:'light'},
  { fontFamily: 'Font2, Didot', fontStyle:'normal'},
  { fontFamily: 'Font3, Times', fontStyle: 'italic' },
  { fontFamily: 'Font3, Cambria', fontStyle: 'normal' },
  // Add more font styles as needed
];

const HomePage = () => {
  
  const [currentFontIndex, setCurrentFontIndex] = useState(0);

  useEffect(() => {
    // Create an interval to cycle through the font styles
    const interval = setInterval(() => {
      setCurrentFontIndex((prevIndex) =>
        prevIndex === fontStyles.length - 1 ? 0 : prevIndex + 1
      );
    }, 600); // Change the interval duration as needed

    return () => {
      clearInterval(interval); // Clear the interval on component unmount
    };
  }, []);

  const currentFontStyle = fontStyles[currentFontIndex];

  
  return (
    <div>
      <div className='h-10'>

      </div>
      <div className="w-full md:h-40">
      <motion.h1
        initial={{ x: 0, y: -100, opacity: 0 }}
        animate={{ x: 0, y: 20, opacity: 1 }}
        transition={{ duration: 2 }}
        className={`whitespace-nowrap md:mt-40 md:mx-auto md:my-10 text-9xl font-semibold text-center`}>
        Hi, I am{' '}
        <motion.p className='text-11xl' style={{ ...currentFontStyle,
          fontStyle: currentFontStyle.fontStyle,
          fontWeight: currentFontStyle.fontWeight, 
          display: 'inline' }}>Axel</motion.p>...
        </motion.h1>
        </div>

    </div>
  );
};

export default HomePage;
