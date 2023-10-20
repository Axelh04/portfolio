import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { motion, useAnimation } from 'framer-motion'; // Import useAnimation

const Navbarstatic = () => {

  

  return (
    <div className=' relative w-full flex justify-center'>
      <motion.nav
      initial={{scale: 1,x:0, width: 50 }} // Initial hidden state
      animate={{scale: 1, x:0, width:450 }} // Animate with controls
      transition={{ duration: 2.5, delay: .5 }} // Adjust the transition duration
     
      className='absolute rounded-3xl mx-auto z-50 overflow-hidden md:mt-[400px] bg-gray-100 shadow-lg'
      >
        <motion.ul 
       
        className='font-base w-[450px] cursor-pointer overflow-hidden flex-column flex justify-between mx-auto py-2 rounded-3xl'>

        <li className='block ml-2 '>
            <Link to = "home" className='text-3xl'  smooth={true} duration={1000}>
              🚀
            </Link>
          </li>
        <li className='block text-gray-500 mt-1 mb-1  mr-1 '>
            <Link to="aboutme" className=' text-xl' smooth={true} duration={1000}>
              About
            </Link>
          </li>
          <li className='block text-gray-500 mt-1 mb-1 mr-1 '>
            <Link to="experience" className=' text-xl' smooth={true} duration={1000}>
              Experience
            </Link>
          </li>
          <li className='block text-gray-500 mt-1 mb-1 mr-2 '>
            <Link to="portfolio" className=' text-xl' smooth={true} duration={1000}>
              Portfolio
            </Link>
          </li>
          <li className='block text-gray-500 mb-1 mr-8 mt-1'>
            <Link to="contact" className=' text-xl' smooth={true} duration={1000}>
              Contact
            </Link>
          </li>
        </motion.ul>
      </motion.nav>
    </div>
  );
};

export default Navbarstatic;
