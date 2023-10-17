import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    companyName: 'Software and Engineering Mentor',
    date: 'Sep 2023 - Present',
    location: 'Mentor | Chicago, IL',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br /> Nullam eget tincidunt ipsum.',
    imageUrl: 'public/klpng.png', // Replace with your image URL
  },
  {
    companyName: 'Fab-lab Software Developer',
    date: 'May 2023 - Aug-2023',
    location: 'Internship | Chicago, IL',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br /> Nullam eget tincidunt ipsum.red',
    imageUrl: 'public/msipng.png', // Replace with your image URL
  },
  {
    companyName: 'Deputy Project Manager',
    date: 'Jan 2023 - May-2023',
    location: 'Mentorship | Tempe, AZ',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br /> Nullam eget tincidunt ipsum.',
    imageUrl: 'public/nasapng.png', // Replace with your image URL
  },
  {
    companyName: 'Internal Vice President',
    date: 'Sep 2022 - Present',
    location: 'Executive Board | Chicago, IL',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br /> Nullam eget tincidunt ipsum.',
    imageUrl: 'public/shpe.png', // Replace with your image URL
  },
  // Add more experiences as needed
];

const Experience = () => {
  return (
    <div  className="mt-0 mb-0">
      <div id="experience" className='h-10'>

      </div>
      <motion.h1 className="text-5xl font-bold text-center mt-20 mb-20">Experience</motion.h1>
      <div className="flex flex-wrap justify-center">
        {experiences.map((experience, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-lg shadow-inner overflow-hidden  w-2/3 md:w-1/2 lg:w-3/4 m-4"
            style={{ borderRadius: '50px' }}
          >
            <div className="md:flex">
              <div className="md:w-1/3">
                <img
                  src={experience.imageUrl}
                  alt={experience.companyName}
                  className=" w-3/4 mx-auto my-12 mt-14"
                />
              </div>
              <div className="p-3 text-left md:w-2/3">  
              <p className="text-sm text-gray-600 mb-1">{experience.date}</p>
                <h2 className="text-xl font-semibold mb-1">{experience.companyName}</h2>               
                 <p className="text-sm text-gray-600 mb-2">{experience.location}</p>
                <p className="text-gray-700 text-sm mb-4" dangerouslySetInnerHTML = {{__html:experience.description}}></p>
                {/* Additional content */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
