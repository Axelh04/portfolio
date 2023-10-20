import React from 'react';
import { motion } from 'framer-motion';


const projectsData = [
  
  // {
  //   title: 'Project 1',
  //   description: 'Description of Project 1...',
  //   technologies: 'React, Tailwind CSS',
  //   imageUrl: './public/aero.png',
  // },
  {
    title: '3D Braille Generator ',
    date: 'July, 2023',
    awards: 'In association with the MSI Accessiblity Effort',
    description: 'Converts user-input text into a 3D .stl file, enabling a 3D printer to produce Braille representations, with the goal of aiding visually impaired guests',
    technologies: 'C,<br />C#,<br />Terminal,<br />STL',
    imageUrl: 'braille.png',
    github: 'https://github.com/Axelh04/brailleSTL_generator',
  },

  {
    title: 'SweetDeals',
    date: 'Oct, 2022',
    description: 'Mobile trick or treating marketplace built with Flutter, and hosted with Heroku. Market compatible with IOS/Android',
    awards: 'MLH DemonHacks Hackathon Project',
    technologies: 'Flutter, Dart, Heroku, Firebase',
    imageUrl: 'sweet1.png',
    live: 'https://devpost.com/software/test-ida1un',
    github: 'https://github.com/Dodhon/DemonHacks2022/tree/Frontend'

  },

  {
    title:'Computational Mechanics',
    date: 'Aug, 2022',
    description: 'An interactive tool to animate the aerodynamics of a ball using a open source webbased IDE for teaching faciliation.',
    awards: '1st place in Class Trajectory Competition',
    technologies: 'Python, VPython, Glowscript, Math',
    imageUrl: 'aero.png',
    github: '',
    live: 'https://glowscript.org/#/user/ahernandez53/folder/MyPrograms/program/website2'
  },
  
  
];

const Projects = () => {
  return (
    <>
      <div id="portfolio" className='h-10'>

      </div>
    <motion.h1  className="text-5xl relative font-bold text-color text-center mt-20 mb-32">Portfolio</motion.h1>
    <div className="relative overflow-hidden md:mt-20 ltr">


       
    <div className="overflow-x-scroll snap-x snap-mandatory p-0 whitespace-nowrap">
    <div className="inline-block w-1/2"></div>
    
      {projectsData.map((project, index) => (
        <motion.div
          key={index}
          className="inline-block w-9/12 mr-36 snap-center snap-always mb-80 "
            >




          <div className='w-7/12 float-left -mx-4'>
          


          <div className=" bg-gray-100 w-full rounded-3xl h-20 py-5 mb-4 shadow-inner whitespace-normal  ">    
          <h3 className=" text-3xl font-bold  mx-auto bg-gradient-to-r from-blue-600 via-purple-500 to-white-900 inline-block text-transparent bg-clip-text " dangerouslySetInnerHTML = {{__html:project.title}}></h3>
          </div>
        
      
    
          
          <div className='h-[301px] bg-gray-100 rounded-3xl shadow-inner overflow-hidden'>
            <img
                  src={project.imageUrl}
                  className='w-11/12 mx-auto my-5'
              /> 
            </div>

          

            </div>   
          
          
          <div className='w-5/12 float-right'>

          <div className=" bg-gray-100  h-20 w-full rounded-3xl py-7 mb-4 shadow-inner whitespace-normal ">
          <p className="text-xl font-semibold ">{project.date}</p>
          </div>

          <div className=" bg-gray-100 text-black py-4 px-7 w-full h-36 rounded-3xl mb-4 shadow-inner whitespace-normal">
            <p className="text-xl text-center font-semibold">{project.description}</p> 
          </div>

          <div className="bg-gray-100 text-black h-36 md:py-4 w-1/2 ml-4 float-right rounded-3xl shadow-inner whitespace-normal  ">
            <p className="text-xl mx-auto w-1/2 font-semibold bg-gradient-to-r from-blue-600 via-black-500 to-white-400 inline-block text-transparent bg-clip-text" dangerouslySetInnerHTML = {{__html:project.technologies}}></p>
          </div>

          <div className=" bg-gray-100 text-black h-36 py-4 w-auto rounded-3xl shadow-inner whitespace-normal overflow-hidden ">
         <p className="text-xl mx-auto w-3/4 font-semibold  " dangerouslySetInnerHTML = {{__html:project.awards}}></p>
          </div>

          

          </div>
          
          <div className='mx-auto  w-2/12'>

          <motion.div 
           whileHover={{ y:-10}}
          className=' w-5/12 mt-20 float-right'>
          <a            
          href={project.live} target="_blank" >
            <img src="export.png" className="w-full" alt="Export" />
            </a>
            </motion.div>
          <motion.div 
          whileHover={{ y:-10}}
          className=" w-5/12 mt-20 float-left ">
        <a href={project.github} target="_blank" >
        <img src="GitHub.png" className="w-full " alt="GitHub" />
        </a>
        </motion.div>

        
              </div>
            


          



        </motion.div>
      ))}
      <div className="inline-block w-1/2"></div>
    </div>
    </div>
    </> 
  );
};

export default Projects;
