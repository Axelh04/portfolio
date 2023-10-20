import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { motion, useAnimation } from 'framer-motion'; // Import useAnimation
import styles from './Navbarstatic.module.css';

const Navbarstatic = () => {

  

  return (
    <div className=' relative w-full flex justify-center'>
      <motion.nav
      initial={{scale: 1.2,x:0, width: 55 }} // Initial hidden state
      animate={{scale: 1, x:0, width:480 }} // Animate with controls
      transition={{ duration: 2.5, delay: .5 }} // Adjust the transition duration
     
      className='absolute rounded-3xl mx-auto overflow-hidden z-10 md:mt-[400px] bg-gray-200 shadow-inner'
      >
        <motion.ul 
       
        className='font-medium w-[480px] cursor-pointer overflow-hidden mx-auto py-2 rounded-3xl'>

        <li className='block -mr-2 border'>
            <Link className='text-3xl' to="experience" smooth={true} duration={1000}>
              🚀
            </Link>
          </li>
        <li className='block mr-1 border'>
            <Link to="aboutme" className='align-middle text-xl' smooth={true} duration={1000}>
              About
            </Link>
          </li>
          <li className='block mr-1  border'>
            <Link to="experience" className='align-middle text-xl' smooth={true} duration={1000}>
              Experience
            </Link>
          </li>
          <li className='block mr-2  border'>
            <Link to="portfolio" className='align-middle text-xl' smooth={true} duration={1000}>
              Portfolio
            </Link>
          </li>
          <li className='block mr-10  border'>
            <Link to="contact" className='align-middle text-xl' smooth={true} duration={1000}>
              Contact
            </Link>
          </li>
        </motion.ul>
      </motion.nav>
    </div>
  );
};

export default Navbarstatic;
