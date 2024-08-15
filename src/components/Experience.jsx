import React from 'react';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      role: "Junior Full-stack Developer",
      company: "Revelio",
      duration: "June 2024 – Present",
      details: [
        "Promoted to Junior Developer following a successful internship.",
        "Developing a learning platform for a local client using Laravel and Nuxt.js.",
        "Maintaining the Dimuto project, which operates globally.",
        "Engaging in weekly discussions with clients every Saturday to review project requirements and progress.",
        "Making pull requests in GitHub for each new feature developed.",
        "Refined skills in full-stack development, project management, and client communication.",
      ],
    },
    {
      role: "Internship Full-stack Web Developer",
      company: "Revelio",
      duration: "March 2024 – May 2024",
      details: [
        "Contributed to the development of a property app similar to booking.com at Revelio.",
        "Developed user interfaces that adhered to UI/UX design principles.",
        "Collaborated with senior developers to design and optimize the database.",
        "Created robust backend APIs using Laravel.",
        "Worked extensively on the Vue.js frontend to build dynamic and interactive components.",
        "Ensured a seamless user experience by implementing best practices in frontend development.",
        "Enhanced skills in full-stack development and gained practical experience in building comprehensive web applications.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-16 text-white sm:w-[1170px] mx-auto">
  <div className="container mx-auto px-6">
    <div className="flex justify-start items-center">
      <p className="line bg-primary h-[5px] sm:w-[250px] sm:ml-[-340px] sm:mt-[60px]"></p>
      <h4 className="text-left text-[50px] font-[800] text-black dark:text-white mt-10 font-serif sm:ml-[90px] typing">Experience</h4>
    </div>

    <div className="space-y-8 mt-5">
      {experiences.map((exp, index) => (
        <div key={index} className="flex flex-col md:flex-row items-center bg-gray-900 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
          <div className="w-full md:w-1/4 mb-4 md:mb-0 text-center md:text-left">
            <FaBriefcase className="text-[#2AD87F] text-4xl mb-2 mx-auto md:mx-0" />
            <h3 className="text-2xl font-semibold">{exp.role}</h3>
            <p className="text-lg text-gray-300">Company Name: {exp.company}</p>
          </div>
          <div className="w-full md:w-3/4 md:pl-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div className="flex items-center mb-2 md:mb-0">
                <FaCalendarAlt className="text-[#2AD87F] mr-2" />
                <span className="text-gray-400">{exp.duration}</span>
              </div>
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-[#2AD87F] mr-2" />
                <span className="text-gray-400">Myamar {exp.location}</span>
              </div>
            </div>
            <ul className="list-disc list-inside text-gray-400 text-left space-y-2">
              {exp.details.map((detail, idx) => (
                <li key={idx} className="flex items-center text-sm">
                  <FaCheckCircle className="text-[#2AD87F] mr-2" />
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

  );
};

export default Experience;
