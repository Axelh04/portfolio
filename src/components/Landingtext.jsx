import React from 'react';
import {Link} from 'react-scroll';
import { motion, useAnimation } from 'framer-motion';

const Introtext = () => {
  return (
    <div  id = "home" className="relative w-full h-screen justify-center">
      <motion.h1 className="md:text-9xl text-black font-semibold w-full mx-auto absolute z-10 text-center md:mt-[250px]">
        Hi, I am Axel.
      </motion.h1>

        
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 2 }}
          
            className=' absolute w-full z-10 md:mt-[700px] '          >
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
