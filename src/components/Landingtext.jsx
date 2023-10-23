import React from 'react';
import {Link} from 'react-scroll';
import { motion, useAnimation } from 'framer-motion';

const Introtext = () => {
  return (
    <div  id = "home" className="relative w-full h-screen justify-center">
      <motion.h1 className="md:text-9xl text-7xl text-black font-semibold w-full bottom-1/2 mx-auto absolute z-10 text-center mb-2">
        Hi, I am Axel.
      </motion.h1>
      
      <motion.nav
      initial={{scale: 1,x:0, width: 50 }} // Initial hidden state
      animate={{scale: 1, x:0, width: "80%" }} // Animate with controls
      transition={{ duration: 2.5, delay: .5 }} // Adjust the transition duration
     
      className='relative top-1/2 rounded-3xl mx-auto z-50 overflow-hidden bg-gray-100 shadow-lg max-w-[450px]'
      >
        <motion.ul 
       
        className='font-base md:w-[450px] cursor-pointer overflow-hidden flex-column flex justify-between mx-auto md:py-2 py-1 rounded-3xl'>

        <li className='block ml-2 rounded-xl hover:text-black'>
            <Link to = "home" className='md:text-3xl text-xl'  smooth={true} duration={1000}>
              🚀
            </Link>
          </li>
        <li className='block text-gray-500 py-1  mr-1 rounded-xl hover:text-black'>
            <Link to="aboutme" className='md:text-xl text-md' smooth={true} duration={1000}>
              About
            </Link>
          </li>
          <li className='block text-gray-500 py-1 mr-1 rounded-xl hover:text-black'>
            <Link to="experience" className='md:text-xl text-md' smooth={true} duration={1000}>
              Experience
            </Link>
          </li>
          <li className='block text-gray-500 py-1 mr-2 rounded-xl hover:text-black'>
            <Link to="portfolio" className='md:text-xl text-md' smooth={true} duration={1000}>
              Portfolio
            </Link>
          </li>
          <li className='block text-gray-500 py-1 mr-8  rounded-xl hover:text-black mb-3'>
            <Link to="contact" className='md:text-xl text-md' smooth={true} duration={1000}>
              Contact
            </Link>
          </li>
        </motion.ul>
      </motion.nav>

      <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 2 }}
          
            className=' relative w-full z-50 top-3/4 '          >
            <span className='text-4xl text-gray-500 bg-gray-100 cursor-pointer rounded-3xl py-1 px-3 shadow-lg'>
              <Link
                to="aboutme"
                smooth={true}
                duration={1000}
                spy={true}
              >
                ↓
              </Link>
            </span>
          </motion.div>

        

      
      
    </div>
  );
};

export default Introtext;
