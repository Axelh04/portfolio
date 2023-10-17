import React from 'react';
import { motion } from 'framer-motion';


const projectsData = [
  
  // {
  //   title: 'Project 1',
  //   description: 'Description of Project 1...',
  //   technologies: 'React, Tailwind CSS',
  //   imageUrl: './public/aero.png',
  // },
  // {
  //   title: 'Automated STL<br />Braille Project',
  //   date: 'July, 2023',
  //   awards: 'In association with the Museum of Science and Industry Accessiblity Effort',
  //   description: 'Created STL Braille Generator, improving accessibility for visually impaired, resulting in cost savings',
  //   technologies: 'C,<br />C#,<br />Terminal,<br /> STL',
  //   imageUrl: './public/aero.png',
  // },

  // {
  //   title: 'SweetDeals<br />Mobile App',
  //   date: 'Oct, 2022',
  //   description: 'A mobile marketplace for trick-or-treaters to trade candy through a social and secure platform',
  //   awards: 'MLH Hackathon Project,<br /> IOS/Android Compatiblity',
  //   technologies: 'Flutter, Dartpad, Heroku, Firebase',
  //   imageUrl: './public/aero.png',
  // },

  {
    title:'Computational<br />Mechanics',
    date: 'Aug, 2022',
    description: 'An interactive tool to animate the aerodynamics of a ball using a open source webbased IDE for teaching faciliation.',
    awards: '1st in Class Trajectory Calculations,<br />Top 20 National Rocketry Club  ',
    technologies: 'Python, VPython, Glowscript, Math',
    imageUrl: './public/aero.png',
  },
  
  
];

const Projects = () => {
  return (
    <>
    <motion.h1 className="text-5xl font-bold text-color text-center mt-40">Portfolio</motion.h1>
    <div className="relative overflow-hidden md:mt-20 md:mb-20 ltr">


       
    <div className="overflow-x-scroll snap-x snap-mandatory p-0 whitespace-nowrap">
    <div className="inline-block w-1/2"></div>
    
      {projectsData.map((project, index) => (
        <motion.div
          key={index}
          className="inline-block w-2/3 mr-20 snap-center snap-always mb-20"
            >
          
          {/* <div className="bg-gray-100 text-black md:py-0 md:w-full md:mx-2 rounded-3xl shadow-inner">
            <img
                  src={project.imageUrl}
                  className='w-1/3 float-right'

              />

          
          </div>
          
          <div className=" bg-gray-100 text-black md:py-10 w-8/12 -mx-2 px-5 rounded-3xl mb-2 shadow-inner whitespace-normal">
            <p className="text-3xl font-bold mt-2">{project.description}</p> 
          </div>

          <div className=" bg-gray-100 float-left -mx-2 w-1/3 rounded-3xl py-10 shadow-inner whitespace-normal ">
          <p className="text-3xl font-bold ">{project.date}</p>
          </div>

          <div className=" bg-gray-100 text-black md:h-80 md:w-1/3 md:-mx-2 rounded-3xl float-right shadow-inner whitespace-normal">
         <p className="text-3xl mx-auto w-3/4 font-bold mt-2" dangerouslySetInnerHTML = {{__html:project.awards}}></p>
          </div>
      
          <div className=" relative backdrop-blur-md overflow-hidden w-1/3 mx-auto  rounded-3xl py-4 border ">
          
                    <h3 className=" text-4xl font-bold text-left text-purple-500 mx-auto" dangerouslySetInnerHTML = {{__html:project.title}}></h3>

        </div>
      
        

          
        <div className="bg-gray-100 text-black md:py-20 md:w-1/3 md:-mx-2 rounded-3xl float-left mt-2 shadow-inner whitespace-normal">
         <p className="text-2xl mt-2">{project.des}</p>
          </div>


          <div className="bg-gray-100 text-black md:py-5 md:w-1/3 md:mx-auto rounded-3xl mt-2 shadow-inner whitespace-normal">
            <p className="text-3xl mx-auto w-1/2 font-bold mt-2">{project.technologies}</p>
           
          </div> */}

          <div className=" bg-gray-100 float-right -mx-2 w-2/3 rounded-3xl py-10 shadow-inner whitespace-normal ">
          <p className="text-3xl font-bold ">{project.date}</p>
          </div>

          <div className=" relative backdrop-blur-md overflow-hidden w-1/3  rounded-3xl py-4  ">    
          <h3 className=" text-4xl font-bold text-left text-purple-500 mx-auto" dangerouslySetInnerHTML = {{__html:project.title}}></h3>
          </div>

          <div className=" w-full">
            <img
                  src={project.imageUrl}
                  className='w-full'
              />    
          </div>
          <div className=" bg-gray-100 text-black md:py-10 w-full mx-auto px-5 rounded-3xl mb-4 shadow-inner whitespace-normal">
            <p className="text-3xl font-bold">{project.description}</p> 
          </div>
          
          <div className="bg-gray-100 text-black md:py-5 md:w-1/2 float-right rounded-3xl shadow-inner whitespace-normal -mx-2">
            <p className="text-3xl mx-auto w-1/2 font-bold" dangerouslySetInnerHTML = {{__html:project.technologies}}></p>
          </div>

          <div className=" bg-gray-100 text-black py-5 md:w-1/2 rounded-3xl shadow-inner whitespace-normal -mx-2 ">
         <p className="text-3xl mx-auto w-3/4 font-bold " dangerouslySetInnerHTML = {{__html:project.awards}}></p>
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
