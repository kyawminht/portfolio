import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaMapMarkerAlt, FaCalendarAlt, FaBriefcase } from 'react-icons/fa';

const experiences = [
  {
    title: "Junior Full-stack Developer",
    company: "Revelio",
    location: "Revelio, Myanmar",
    date: "June 2024 – Present",
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
    title: "Internship Full-stack Web Developer",
    company: "Revelio",
    location: "Revelio, Myanmar",
    date: "March 2024 – May 2024",
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

const ExperienceSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: 'ease-in-out',
      once: false,
    });
  }, []);

  return (
    <section className="py-8 sm:w-[1170px] mx-auto" id="experience">
      <div className="container mx-auto px-4">
        <div className="flex justify-start items-center">
          <p className="line line bg-primary h-[5px] sm:w-[250px] sm:ml-[-340px] sm:mt-[60px]"></p>
          <h4 
            className="text-left text-[50px] font-[800] text-black dark:text-white mt-10 font-serif sm:ml-[90px] typing"
            data-aos="zoom-in"
          >
            Experience
          </h4>
        </div>
        <div className="space-y-8 mt-7">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="bg-white text-black p-10 shadow-md rounded-md border-b-8 border-primary"
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
            >
              <div className="w-full">
                <div className="mb-4">
                  <div className="w-full flex items-center mb-4 md:mb-0 md:pr-8">
                    <FaBriefcase className="text-primary text-md mr-2" />
                    <div>
                      <h3
                        className="text-xl font-semibold text-primary"
                        data-aos="fade-right"
                        data-aos-delay={`${index * 150}`}
                      >
                        {experience.title}
                      </h3>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 text-green-400 mb-2 md:mb-0">
                    <FaCalendarAlt />
                    <span data-aos="fade-left" data-aos-delay={`${index * 200}`}>{experience.date}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-green-400">
                    <FaMapMarkerAlt />
                    <span data-aos="fade-left" data-aos-delay={`${index * 250}`}>{experience.location}</span>
                  </div>
                </div>
                <ul className="list-disc pl-5 space-y-2 text-gray-300">
                  {experience.details.map((detail, idx) => (
                    <li 
                      key={idx} 
                      className="text-left text-black"
                      data-aos="fade-in"
                      data-aos-delay={`${index * 300 + idx * 50}`}
                    >
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

export default ExperienceSection;
