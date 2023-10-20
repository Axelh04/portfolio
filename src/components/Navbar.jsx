import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { motion, useAnimation } from 'framer-motion'; // Import useAnimation
import styles from './Navbar.module.css';

const Navbar = () => {
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
    controls.start({ opacity: isSticky ? 1 : 0, y: isSticky ? -2 : -10, scale: isSticky ? 1 : 1 });
  }, [isSticky, controls]);

  const navbarClass = isSticky ? `${styles.navbar} ${styles.sticky}` : 'hidden';

  return (
    <div className={styles['navbar-container']}>
      <motion.nav
        className={navbarClass}
        initial={{ opacity: 0, y: -50 }} // Initial hidden state
        animate={controls} // Animate with controls
        transition={{ duration: .1 }} // Adjust the transition duration
      >
        <ul>
          <li>
            <Link to="aboutme" smooth={true} duration={1000}>
              About Me
            </Link>
          </li>
          <li>
            <Link to="experience" smooth={true} duration={1000}>
              Experience
            </Link>
          </li>
          <li>
            <Link to="portfolio" smooth={true} duration={1000}>
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={1000}>
              Contact
            </Link>
          </li>
        </ul>
    
      </motion.nav>
    </div>
  );
};

export default Navbar;
