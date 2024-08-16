import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { FaStar, FaRegStar } from 'react-icons/fa';
import EduclaasLogo from '../assets/educlass_logo.png';

const Education = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, 
      easing: 'ease-in-out', 
      once: false, 
    });
  }, []);

  const educationData = [
    {
      degree: "Level 3 Foundation Diploma in Computing",
      institution: "Lithan Educlaas",
      duration: "2022 - 2023",
      details: "Focused on foundational computing skills and programming principles.",
      stars: 4,
      logo: EduclaasLogo,
    },
    {
      degree: "Level 4 HND Diploma in Computing",
      institution: "Lithan Educlaas",
      duration: "2023 - 2024",
      details: "Specialized in software development, web technologies, and database management.",
      stars: 4,
      logo: EduclaasLogo,
    },
    {
      degree: "Level 5 HND Diploma in Computing",
      institution: "Lithan Educlaas",
      duration: "2024 - Present",
      details: "Specialized in software development, web technologies, and database management.",
      stars: 5,
      logo: EduclaasLogo,
    },
  ];

  return (
    <section id="education" className="py-16 text-white sm:w-[1170px] mx-auto">
      <div className="container mx-auto px-6">
        <div className="">
          <div className="flex justify-start items-center">
            <p className="line line bg-primary h-[5px] sm:w-[250px] sm:ml-[-340px] sm:mt-[60px]"></p>
            <h4 className="text-left text-[50px] font-[800] text-black dark:text-white mt-10 font-serif sm:ml-[90px] typing" data-aos="fade-up">
              Education
            </h4>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="flex flex-col p-6 rounded-lg border border-black hover:shadow-lg transition-shadow"
              data-aos="fade-up"
              data-aos-delay={`${index * 200}`}
            >
              <div className="flex space-x-2 items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="text-primary">
                    {i < edu.stars ? (
                      <FaStar className="text-2xl" />
                    ) : (
                      <FaRegStar className="text-2xl" />
                    )}
                  </div>
                ))}
              </div>

              <div className="text h-[160px]">
                <h3 className="text-2xl font-semibold text-primary text-left">
                  {edu.degree}
                </h3>
                <p className="text-sm text-black dark:text-white text-left mt-3">{edu.duration}</p>
                <p className="mt-4 text-black dark:text-white text-left">{edu.details}</p>
              </div>
              <div className="flex flex-col items-start justify-start">
                <p className="text-lg text-black dark:text-white text-left">{edu.institution}</p>
                <img src={edu.logo} alt={`${edu.institution} Logo`} className="w-[100px] h-[100px] ml-[-15px]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
