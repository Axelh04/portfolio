import React, { useEffect, useState,useRef } from 'react';
import { Link } from 'react-scroll';
import { motion, useAnimation, useDragControls, } from 'framer-motion'; // Import useAnimation

const Navbarstatic = () => {

  const [isSticky, setIsSticky] = useState(false);
  const controls = useAnimation(); // Create animation controls
  const drag = useDragControls()
  const constraintsRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      // Adjust this threshold to control when the Navbar becomes sticky
      const scrollThreshold = 1000; // Change this value as needed

      if (window.scrollY > scrollThreshold) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Animate the Navbar's opacity and y position when it becomes sticky
    controls.start({ opacity: isSticky ? 1 : 0, scale: isSticky ? 1 : 1 , y: isSticky ? 0 : -100});
  }, [isSticky, controls]);


  return (
    <>
    <motion.div 
    ref={constraintsRef}
    className='fixed top-5 left-5 right-auto w-14 h-14 flex z-[10000] justify-center'>
      <motion.nav
      initial={{opacity:0, width: 53}} // Initial hidden state
      animate={controls} // Animate with controls
      transition={{ duration: .3 }}
      whileHover={{x:200, width: 450}}
      className= 'fixed w-auto mx-auto  overflow-hidden rounded-3xl bg-gray-100 shadow-xl sm:visible invisible'
      >
        <motion.ul 
        className='font-base w-[450px] cursor-pointer overflow-hidden flex-column flex justify-between mx-auto py-2'>

          <li className='block ml-2 rounded-xl hover:text-black '>
            <Link to = "home" className='text-3xl'  smooth={true} duration={1000}>
              🚀
            </Link>
          </li>
        <li className='block text-gray-600 py-1 mr-1 rounded-xl hover:text-black '>
            <Link to="aboutme" className=' text-xl' smooth={true} duration={1000}>
              About
            </Link>
          </li>
          <li className='block text-gray-600 p-1 mr-1 rounded-xl hover:text-black'>
            <Link to="experience" className=' text-xl' smooth={true} duration={1000}>
              Experience
            </Link>
          </li>
          <li className='block text-gray-600 p-1 mr-2 rounded-xl hover:text-black'>
            <Link to="portfolio" className=' text-xl' smooth={true} duration={1000}>
              Portfolio
            </Link>
          </li>
          <li className='block text-gray-600  mr-8 p-1 rounded-xl hover:text-black'>
            <Link to="contact" className=' text-xl' smooth={true} duration={1000}>
              Contact
            </Link>
          </li>
        </motion.ul>
      </motion.nav>

      <motion.nav
      animate={controls} // Animate with controls
      initial={{opacity:0, width: 50, height: 50}} // Initial hidden state
      whileHover={{width: 120, x:50, height: 190}}
      transition={{ duration: .3 }}

      className= 'fixed w-auto mx-auto  overflow-hidden rounded-3xl bg-gray-100 shadow-xl sm:invisible'
      >
        <motion.ul 
        className='font-base w-[450px] cursor-pointer overflow-hidden justify-between text-left py-2'>
          <li className='block ml-2 rounded-xl hover:text-black '>
            <p to = "home" className='text-3xl'  smooth={true} duration={1000}>
              🟰
            </p>
          </li>
          <li className='block text-gray-600 ml-3 rounded-xl hover:text-black '>
            <Link to = "home" className='text-xl'  smooth={true} duration={1000}>
              Top
            </Link>
          </li>
        <li className='block text-gray-600 ml-3 rounded-xl hover:text-black '>
            <Link to="aboutme" className=' text-xl' smooth={true} duration={1000}>
              About
            </Link>
          </li>
          <li className='block text-gray-600 ml-3 rounded-xl hover:text-black'>
            <Link to="experience" className=' text-xl' smooth={true} duration={1000}>
              Experience
            </Link>
          </li>
          <li className='block text-gray-600 ml-3 rounded-xl hover:text-black'>
            <Link to="portfolio" className=' text-xl' smooth={true} duration={1000}>
              Portfolio
            </Link>
          </li>
          <li className='block text-gray-600 ml-3 rounded-xl hover:text-black'>
            <Link to="contact" className=' text-xl' smooth={true} duration={1000}>
              Contact
            </Link>
          </li>
        </motion.ul>
      </motion.nav>

    </motion.div>

    </>

  );
};

export default Navbarstatic;
