import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { TfiHtml5 } from 'react-icons/tfi';
import { FaBootstrap, FaPhp, FaLaravel, FaGithub, FaVuejs, FaReact } from 'react-icons/fa';
import { IoLogoCss3, IoLogoJavascript } from 'react-icons/io5';
import { SiTailwindcss, SiAmazonapigateway, SiMysql } from 'react-icons/si';
import SkillCard from './SkillCard';

const frontendSkills = [
  { icon: <TfiHtml5 />, name: "HTML", level: "90%" },
  { icon: <IoLogoCss3 />, name: "CSS", level: "85%" },
  { icon: <IoLogoJavascript />, name: "JavaScript", level: "80%" },
  { icon: <SiTailwindcss />, name: "Tailwind", level: "75%" },
  { icon: <FaBootstrap />, name: "Bootstrap", level: "70%" },
  { icon: <FaReact />, name: "React", level: "80%" },
  { icon: <FaVuejs />, name: "Vue JS", level: "80%" },
];

const backendSkills = [
  { icon: <FaPhp />, name: "PHP", level: "80%" },
  { icon: <FaLaravel />, name: "Laravel", level: "80%" },
  { icon: <SiAmazonapigateway />, name: "API", level: "75%" },
  { icon: <SiMysql />, name: "MySQL", level: "70%" },
  { icon: <FaGithub />, name: "GitHub", level: "90%" },
];

const SkillsSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, 
      easing: 'ease-in-out', 
      once: false, 
    });
  }, []);

  return (
    <div className="py-8 scroll-smooth sm:p-0 p-[15px] sm:w-[1170px] mx-auto md:p-[30px]" id="skill">
      <div>
        <p className="text-left text-primary text-2xl">Discover My Skillset</p>
        <div className="flex justify-start items-center">
          <p className="line bg-primary h-[5px] sm:w-[250px] sm:ml-[-340px] sm:mt-[60px]"></p>
          <h4 className="typing text-left text-[50px] font-[800] dark:text-white mt-10 font-serif sm:ml-[90px]">
            Skills
          </h4>
        </div>
      </div>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-left mb-8">Frontend Skills</h2>
        <div className="flex flex-wrap justify-center">
          {frontendSkills.map((skill, index) => (
            <SkillCard key={index} skill={skill} data-aos="fade-up" />
          ))}
        </div>
      </div>
      <div className="container mx-auto px-4 mt-10">
        <h2 className="text-3xl font-bold text-left mb-8">Backend Skills</h2>
        <div className="flex flex-wrap justify-center">
          {backendSkills.map((skill, index) => (
            <SkillCard key={index} skill={skill} data-aos="fade-up" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
