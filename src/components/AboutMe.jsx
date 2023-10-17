import React, {useEffect} from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const links = [
    { name: 'Resume', href: '#' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/axel-hernandez2026' },
    { name: 'Github', href: '#' },
    { name: 'Medium', href: '#' },
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
    { name4:'TailwindCSS/CSS'},
    { name4:'Heroku'},
    { name4:'Git'},
    { name5:'Dart'},
    { name5:'Flutter'},
    { name5:'Github'},
    { name5:'Adobe Suite'}

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
      <motion.div 
      initial={{ x: 0, y:100, opacity: 0 }}
      animate={{ x: 0, y:-10, opacity: 1 }}
      transition={{ duration: 2 }}
      className="relative lg:ml-5 lg:mr-5 rounded-3xl overflow-hidden sm:py-32 md:mt-40" >
      <div id = "aboutme" className='h-24'>
      <motion.p 
      initial={{ x: 0, y:100, opacity: 0 }}
      animate={{ x: 0, y:-25, opacity: 1 }}
      transition={{ duration: 2.1 }}
      className="grid grid-cols-4 md:w-5/6 md:gap-24 md:mx-auto z-0">
              {links.map((link) => (
                <motion.a key={link.name} href={link.href} target="_blank"
                whileHover={{ y:-10}}
                whileTap={{backgroundColor:'whitesmoke', color:'black'}}
                className="block text-white hover:backdrop-blur-3xl hover:border text-2xl rounded-xl md:w-36">
                  {link.name} <span aria-hidden="true">&rarr;</span>
                </motion.a>
              ))}
        
        </motion.p>

      </div>
        <video
          src="Gradient_Background_Loop.mp4"
          alt="aesthetic"
          className="absolute inset-0 h-full -z-10 w-full object-cover object-right md:object-center"
          autoPlay
          loop
          muted
        />

          <div className="mt-10 md:flex ml-20 lg:float-left md:hidden">
            <div className="md:w-2/3">
              <motion.img
                ref={ref}
                initial="hidden"
                animate={controls}
                exit="hidden" // Use the same exit variant as initial
                variants={fadeInVariants}
                src="/memoji.png" // Replace with your image URL
                alt="Your Image"
                className="h-auto w-full object-cover"
              />
            </div>
            </div>
        
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
             ref={ref}
             initial="hidden"
             animate={controls}
             exit="hidden" // Use the same exit variant as initial
             variants={fadeInVariants}
             className=" overflow-hidden  md:text-4xl font-normal leading-8 text-white text-center py-5">
              I'm a <b>software engineer</b> born in Mexico, raised in Illinois, and currently a <b>sophomore</b> at the Illinois Institute of Technology. <b>From NASA to the Chicago tech scene</b>, I'm driven to make an impact through code. Join me on my journey to shape the future through software.
            </motion.p>
          </div>

          <div className=" mx-auto lg:mx-0 backdrop-blur-xl rounded-3xl">
            <dl className=" md:ml-24 grid gap-4 gap-y-px sm:mt-20 grid-cols-4 grid-row-1 py-5">
              {stats.map((stat,index) => (
                <div key={index} className="flex flex-col-reverse text-left">
                  <dt className="text-base leading-7 text-gray-300">{stat.name}{stat.name2}{stat.name3}{stat.name4}{stat.name5}</dt>
                  <dd className="text-2xl font-bold leading-9 tracking-tight text-white mr-10">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </motion.div>
      </>
    )
  }
  