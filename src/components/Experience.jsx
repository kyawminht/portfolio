import React from 'react';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      role: "Junior Full-stack Developer",
      company: "Myanmar",
      duration: "June 2024 – Present",
      details: "Following a successful internship, I was promoted to Junior Developer. In this role, I am developing a learning platform for a local client using Laravel and Nuxt.js. Additionally, I maintain the Dimuto project, which operates globally. My responsibilities include discussing project requirements and progress with clients every Saturday and making pull requests in GitHub for each new feature. This position further refined my full-stack development, project management, and client communication skills.",
    },
    {
      role: "Internship Full-stack Web Developer",
      company: "Myanmar",
      duration: "March 2024 – May 2024",
      details: "As an intern at Revelio, I contributed to the development of a property app similar to booking.com. My responsibilities included developing user interfaces that adhered to UI/UX design principles, collaborating with senior developers to design and optimize the database, and creating robust backend APIs using Laravel. I worked extensively on the Vue.js frontend to build dynamic and interactive components, ensuring a seamless user experience. This role allowed me to enhance my skills in full stack development and gain practical experience in building comprehensive web applications.",
    },
  ];

  return (
    <section id="experience" className="py-16 text-white sm:w-[1170px] mx-auto">
      <div className="container mx-auto px-6">
      <div className="">
      <div className="flex justify-start items-center">
      <p className="line bg-primary h-[5px] sm:w-[250px] sm:ml-[-340px] sm:mt-[60px]"></p>
      <h4 className=" text-left text-[50px] font-[800] text-black dark:text-white mt-10 font-serif sm:ml-[90px]">Experience</h4>
      </div>
      </div>
        <div className="space-y-8 mt-5">
          {experiences.map((exp, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center bg-gray-900 p-6 rounded-lg shadow-md">
              <div className="w-full md:w-1/4 mb-4 md:mb-0 text-center md:text-left">
                <FaBriefcase className="text-[#2AD87F] text-4xl mb-2 mx-auto md:mx-0" />
                <h3 className="text-2xl font-semibold">{exp.role}</h3>
                <p className="text-lg text-gray-300">{exp.company}</p>
              </div>
              <div className="w-full md:w-3/4 md:pl-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex items-center mb-2 md:mb-0">
                    <FaCalendarAlt className="text-[#2AD87F] mr-2" />
                    <span className="text-gray-400">{exp.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <FaMapMarkerAlt className="text-[#2AD87F] mr-2" />
                    <span className="text-gray-400">{exp.company}</span>
                  </div>
                </div>
                <p className="mt-4 text-gray-400 text-left">{exp.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
