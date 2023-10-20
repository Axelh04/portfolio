import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { motion, useAnimation } from 'framer-motion'; // Import useAnimation

const Navbarstatic = () => {

  const [isSticky, setIsSticky] = useState(false);
  const controls = useAnimation(); // Create animation controls

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
    controls.start({ opacity: isSticky ? 1 : 0, y: isSticky ? 0 : -10, scale: isSticky ? 1 : 1 });
  }, [isSticky, controls]);


  return (
    <motion.div 
    className='fixed top-0 w-full flex z-[10000] justify-center'>
      <motion.nav
      initial={{opacity:0, y:-50}} // Initial hidden state
      animate={controls} // Animate with controls
      transition={{ duration: .1 }} // Adjust the transition duration
     
      className= 'fixed w-full mx-auto  overflow-hidden  backdrop-blur-3xl'
      >
        <motion.ul 
       
        className='font-light w-full cursor-pointer flex flex-column overflow-hidden justify-between mx-auto py-1 rounded-3xl'>

            <li className='block ml-36 mr-96 mr-1 mt-1 '>
            <Link to = "home" className='text-3xl mr-4'  smooth={true} duration={1000}>
              🚀
            </Link>
            <p className='text-xl text-black float-right font-light text-left leading-4'>
              Axel<br /> Hernandez
            </p>
          </li>


        <li className='block mt-1 mb-1 mr-1 text-black  '>
            <Link to="aboutme" className=' align-middle text-xl' smooth={true} duration={1000}>
              About
            </Link>
          </li>
          <li className='block  mt-1 mb-1 mr-1 text-black'>
            <Link to="experience" className='align-middle text-xl' smooth={true} duration={1000}>
              Experience
            </Link>
          </li>
          <li className='block mt-1 mb-1 mr-1 black'>
            <Link to="portfolio" className='align-middle text-xl' smooth={true} duration={1000}>
              Portfolio
            </Link>
          </li>
          <li className='block mb-1 mr-36 mt-1 black'>
            <Link to="contact" className=' align-middle text-xl' smooth={true} duration={1000}>
              Contact
            </Link>
          </li>
        </motion.ul>

        <div className='w-full relative h-1 bg-black'>

        </div>
      </motion.nav>
    </motion.div>
  );
};

export default Navbarstatic;
