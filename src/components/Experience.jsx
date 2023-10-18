import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    companyName: 'Software and Engineering Mentor',
    date: 'Sep 2023 - Present',
    location: 'Mentor | Chicago, IL',
    description: '-Led the rebranding effort of the institutes engineering lab, elevating its significant for students<br />-Mastery in laser cutting, and 3D printing software for Human Computer Interaction (HCI) development<br />-Mentored groups of at least 20 students weekly in electrical, software, and computer engineering.',
    imageUrl: 'klpng.png', // Replace with your image URL
  },
  {
    companyName: 'Fab-lab Software Developer',
    date: 'May 2023 - Aug-2023',
    location: 'Internship | Chicago, IL',
    description: '-Created 3D printable Braille Generator using C, C#, Terminal, STL; turns text input to Braille STL files<br />-Boosted MSI accessibility by 30% through exhibit involvement in printable Braille<br />-Built the museums largest fabrication camp in history, guided over 120 South Side of Chicago kids',
    imageUrl: 'msipng.png', // Replace with your image URL
  },
  {
    companyName: 'Deputy Project Manager',
    date: 'Jan 2023 - May-2023',
    location: 'Mentorship | Tempe, AZ',
    description: '-Participated in NASA 12-week team-oriented program; the LSPACE Mission Concept Academy<br />-Skillfully located $275,000,000 for Mars Polar Layered Deposits mission with V&V, risk, trade studies<br />-Spearheaded software and system engineering utilizing new technologies for our 100+ page proposal',
    imageUrl: 'nasapng.png', // Replace with your image URL
  },
  {
    companyName: 'Internal Vice President',
    date: 'Sep 2022 - Present',
    location: 'Executive Board | Chicago, IL',
    description: '-Cultivated the Hispanic community at IIT with over 160 paid members, and 60+ event attendance<br />-Manage all internal affairs with dean of engineering and computing through adminstration<br />-Served also as recruitment chair hosting weeklong social events that lead to a 50+ recruitment count',
    imageUrl: 'shpe.png', // Replace with your image URL
  },
  // Add more experiences as needed
];

const Experience = () => {
  return (
    <div  className="mt-0 mb-0">
      <div id="experience" className='h-10'>

      </div>
      <motion.h1 className="text-5xl font-bold text-center mt-20 mb-32">Experience</motion.h1>
      <div className="flex flex-wrap justify-center">
        {experiences.map((experience, index) => (
          <div
            key={index}
            className="bg-gray-100  shadow-inner overflow-hidden w-11/12 py-4 mb-4 "
            style={{ borderRadius: '50px' }}
          >
            <div className="md:flex">
              <div className="md:w-1/3">
                <img
                  src={experience.imageUrl}
                  alt={experience.companyName}
                  className=" w-3/4 mx-auto my-10 mt-14"
                />
              </div>
              <div className="p-3 text-left md:w-2/3">  
              <p className="text-base text-gray-600 mb-1">{experience.date}</p>
                <h2 className="text-2xl font-semibold mb-1">{experience.companyName}</h2>               
                 <p className="text-base text-gray-600 mb-2">{experience.location}</p>
                <p className="text-gray-700 text-base mb-0 mr-10" dangerouslySetInnerHTML = {{__html:experience.description}}></p>
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
