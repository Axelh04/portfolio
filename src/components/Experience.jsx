import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    companyName: 'Software Engineer',
    date: 'Jun 2024 - Aug 2024',
    location: 'Internship | Menlo Park, CA',
    description: '• Acquired hands-on expertise in full-stack development by creating and implementing Instagram services<br />• Develop applications for Meta platforms by learning Mixed Reality AR/VR software development<br />• Presented a real-time voice-to-instrument conversion app using machine learning (ML) to Meta Engineers',
    imageUrl: 'smallmetalogo.png', // Replace with your image URL
  },
  {
    companyName: 'Software and Engineering Mentor',
    date: 'Sep 2023 - Present',
    location: 'Mentor | Chicago, IL',
    description: '• Elevated the engineering lab, as a leader of its mentor program through a software engineering focus<br />• Mastery in laser cutting, and 3D printing software for Human Computer Interaction (HCI) development<br />• Mentored groups of at least 20 students weekly in electrical, software, and computer engineering.',
    imageUrl: 'klpng.png', // Replace with your image URL
  },
  {
    companyName: 'Fab-lab Software Developer',
    date: 'May 2023 - Aug-2023',
    location: 'Internship | Chicago, IL',
    description: '• Created 3D printable Braille Generator using C, C#, Terminal, STL; turns text input to Braille STL files<br />• Boosted MSI accessibility by 30% through exhibit involvement in printable Braille<br />• Built the museums largest fabrication camp in history, guided over 120 South Side of Chicago kids',
    imageUrl: 'msipng.png', // Replace with your image URL
  },
  {
    companyName: 'Deputy Project Manager',
    date: 'Jan 2023 - May-2023',
    location: 'Mentorship | Tempe, AZ',
    description: '• Participated in NASA 12-week team-oriented program; the LSPACE Mission Concept Academy<br />• Skillfully located $275,000,000 for Mars Polar Layered Deposits mission with V&V, risk, trade studies<br />• Spearheaded software and system engineering utilizing new technologies for our 100+ page proposal',
    imageUrl: 'nasapng.png', // Replace with your image URL
  },
  {
    companyName: 'Internal Vice President',
    date: 'Sep 2022 - July 2024',
    location: 'Executive Board | Chicago, IL',
    description: '• Cultivated the Hispanic community at IIT with over 160 paid members, and 60+ event attendance<br />• Manage all internal affairs with dean of engineering and computing through adminstration<br />• Served also as recruitment chair hosting weeklong social events that lead to a 50+ recruitment count',
    imageUrl: 'shpe.png', // Replace with your image URL
  },
  // Add more experiences as needed
];

const Experience = () => {
  return (
    <motion.div
    
     id="experience"  className=" bg-gray-100 shadow-inner bg-opacity-50 backdrop-filter-md relative mt-96 z-50 py-32">
     
      <motion.h1 className="text-5xl font-bold text-center mb-32 text-black ">Experience</motion.h1>
      <div 
      style={{ borderRadius: '50px' }}
      className="flex flex-wrap justify-center  sm:w-5/6 w-11/12 mx-auto  overflow-hidden">
        {experiences.map((experience, index) => (
          <div
            key={index}
            className="   bg-white shadow-sm overflow-hidden py-4 mb-1 w-full "
            style={{ borderRadius: '0px' }}
          >
            <div className="md:flex">
              <div className="md:w-1/3">
                <img
                  src={experience.imageUrl}
                  alt={experience.companyName}
                  className=" relative w-3/4 mx-auto sm:top-1/2 sm:-my-8 lg:py-0 py-10"
                />
              </div>
              <div className="p-3 text-left md:w-2/3 sm:ml-0 ml-10 ">  
              <p className="text-base text-gray-600 mb-1">{experience.date}</p>
                <h2 className="text-2xl font-semibold mb-1">{experience.companyName}</h2>               
                 <p className="text-base text-gray-600 mb-2">{experience.location}</p>
                <p className="text-gray-700 text-sm mb-0 mr-10" dangerouslySetInnerHTML = {{__html:experience.description}}></p>
                {/* Additional content */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Experience;
