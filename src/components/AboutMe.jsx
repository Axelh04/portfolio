import React, {useEffect} from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const links = [
    { name: 'Resume', href: 'https://drive.google.com/file/d/1436oidLHzrxtD-jTrdOEpxoBfHw2mnIe/view?usp=sharing' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/axel-hernandez2026' },
    { name: 'Github', href: 'https://github.com/Axelh04' },
  ] 
  const stats = [
    { name: 'Java', value: 'Languages' },
    { name: 'React', value: 'Frameworks' },
    { name: 'MongoDB', value: 'Technologies' },
    { name: 'VSCode', value: 'Devtools' },
    { name2:'Python'},
    { name2:'Angular.js'},
    { name2:'AWS'},
    { name2:'Pycharm'},
    { name3:'JavaScript'},
    { name3:'Node.js'},
    { name3:'Firebase'},
    { name3:'Vite'},
    { name4:'C/C++'},
    { name4:'TailwindCSS'},
    { name4:'Heroku'},
    { name4:'Git'},
    { name5:'Dart'},
    { name5:'Flutter'},
    { name5:'Github'},
    { name5:'Adobe'}

  ]

  
  export default function AboutMe() {
    
    const { ref, inView } = useInView({
      triggerOnce: true, // Trigger the animation only once
      threshold: .9,
    });
  
    const controls = useAnimation();

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1, // Adjust the duration as needed
      },
    },
  };

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

    return (
      <>
      <div  
      id = "aboutme"
 className='h-16'>

      </div>
      <motion.div
      className="relative md:max-w-max sm:w-5/6 w-11/12 backdrop-blur-xl backdrop-brightness-[.85] mx-auto rounded-3xl overflow-hidden py-16" >
      <div className='h-16'>
      <motion.p 
      initial={{ x: 0, y:100, opacity: 0 }}
      animate={{ x: 0, y:-25, opacity: 1 }}
      transition={{ duration: 2.1 }}
      className=" relative grid grid-cols-3 w-5/6 lg:gap-24 gap-4 mx-auto z-0">
              {links.map((link) => (
                <motion.a key={link.name} href={link.href} target="_blank"
                whileHover={{ y:-10}}
                whileTap={{backgroundColor:'whitesmoke', color:'black'}}
                className="block text-white hover:backdrop-blur-3xl hover:border md:text-2xl text-lg rounded-xl md:w-36 mx-auto">
                  {link.name} <span aria-hidden="true">&rarr;</span>
                </motion.a>
              ))}
        
        </motion.p>

      </div>
    
        {/* <video
          src="aestheticb.mp4"
          alt="aesthetic"
          className="absolute inset-0 h-full blur-none -z-10 w-full object-cover object-right md:object-center"
          autoPlay
          loop
          muted
        /> */}
      
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8 lg:ml-200  float-center mt-0 ">
        
          <div className="mx-auto max-w-6xl">
            {/* <motion.h2
            ref={ref}
            initial="hidden"
            animate={controls}
            exit="hidden" // Use the same exit variant as initial
            variants={fadeInVariants} 
            className="text-4xl font-200 tracking-tight text-white sm:text-6xl text-center">
              About Me
              </motion.h2> */}
            <motion.p 
             className=" overflow-hidden  md:text-4xl text-2xl font-normal leading-7 text-white text-center py-8">
              I'm a <b>software engineer</b> born in Mexico, raised in Illinois, and currently a <b>sophomore</b> at the Illinois Institute of Technology. <b>From NASA to the Chicago tech scene</b>, I'm driven to make an impact through code. Join me on my journey to shape the future through software.
            </motion.p>
          </div>

          <div className=" rounded-3xl mt-8 md:w-5/6 w-full mx-auto ">
            <dl className="  grid lg:gap-x-44 sm:gap-x-10 gap-x-5 gap-y-px grid-cols- grid-cols-4 grid-row-1">
              {stats.map((stat,index) => (
                <div key={index} className="flex flex-col-reverse sm:text-left text-center">
                  <dt className="md:text-base text-sm md:leading-7 leading-1 text-white">{stat.name}{stat.name2}{stat.name3}{stat.name4}{stat.name5}</dt>
                  <dd className="md:text-2xl text-sm font-bold sm:leading-9 tracking-tight text-white ">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </motion.div>
      </>
    )
  }
  