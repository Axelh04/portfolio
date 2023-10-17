import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { motion, useAnimation } from 'framer-motion'; // Import useAnimation
import styles from './Navbarstatic.module.css';

const Navbarstatic = () => {

  return (
    <div className={styles['navbar-container']}>
      <motion.nav
      initial={{ opacity: 0, y: -10 }} // Initial hidden state
      animate={{ opacity: 1, y: 0 }} // Animate with controls
      transition={{ duration: 2 }} // Adjust the transition duration
      >
        <ul>
          <li>
            <Link to="aboutme" smooth={true} duration={500}>
              About Me
            </Link>
          </li>
          <li>
            <Link to="experience" smooth={true} duration={500}>
              Experience
            </Link>
          </li>
          <li>
            <Link to="portfolio" smooth={true} duration={500}>
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </motion.nav>
    </div>
  );
};

export default Navbarstatic;
