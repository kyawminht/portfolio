import React from "react";
import 'animate.css';
import { TiHtml5 } from "react-icons/ti";
import { FaReact, FaBootstrap, FaPhp, FaLaravel, FaGithub, FaVuejs } from "react-icons/fa";
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss, SiAmazonapigateway, SiMysql } from "react-icons/si";

const Skill = () => {
  return (
    <div className="sm:p-0 p-[15px] mt-[100px] mb-[160px] scroll-smooth sm:w-[1170px] mx-auto md:p-[30px]" id="skill">
      <div className="animate__animated animate__fadeIn">
        <p className="text-left text-primary text-2xl dark:text-white">Learn About My Skill Diversity</p>
        <div className="flex justify-start items-center">
          <p className="line bg-primary h-[5px] sm:w-[250px] sm:ml-[-340px] sm:mt-[60px]"></p>
          <h4 className="typing text-left text-[50px] font-[800] dark:text-white mt-10 font-serif sm:ml-[90px]">Skills</h4>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row container mx-auto text-white gap-10">
        <div className="flex-1 p-10 flex flex-col items-center bg-black dark:bg-neutral-700">
          <h1 className="text-center text-3xl mb-4 text-primary animate__animated animate__fadeIn">Frontend Development</h1>
          <div className="flex flex-col sm:flex-row">
            <div className="flex-1">
              <div className="flex items-center mb-3 mx-3 animate__animated animate__fadeIn animate__delay-1s">
                <TiHtml5 className="text-4xl mr-2 text-primary" />
                <p className="text-bold text-primary">HTML</p>
              </div>
              <div className="flex items-center mb-3 mx-3 animate__animated animate__fadeIn animate__delay-2s">
                <IoLogoCss3 className="text-4xl mr-2 text-primary" />
                <p className="text-bold text-primary">CSS</p>
              </div>
              <div className="flex items-center mb-3 mx-3 animate__animated animate__fadeIn animate__delay-3s">
                <IoLogoJavascript className="text-4xl mr-2 text-primary" />
                <p className="text-bold text-primary">JavaScript</p>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center mb-3 mx-3 animate__animated animate__fadeIn animate__delay-4s">
                <SiTailwindcss className="text-4xl mr-2 text-primary" />
                <p className="text-bold text-primary">Tailwind</p>
              </div>
              <div className="flex items-center mb-3 mx-3 animate__animated animate__fadeIn animate__delay-5s">
                <FaBootstrap className="text-4xl mr-2 text-primary" />
                <p className="text-bold text-primary">Bootstrap</p>
              </div>
              <div className="flex items-center mb-3 mx-3 animate__animated animate__fadeIn animate__delay-6s">
                <FaReact className="text-4xl mr-2 text-primary" />
                <p className="text-bold text-primary">React</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 p-10 flex flex-col items-center bg-black dark:bg-neutral-700">
          <h1 className="text-center text-3xl mb-4 text-primary animate__animated animate__fadeIn">Backend Development</h1>
          <div className="flex flex-col sm:flex-row">
            <div className="flex-1">
              <div className="flex items-center mb-3 mx-3 animate__animated animate__fadeIn animate__delay-1s">
                <FaPhp className="text-4xl mr-2 text-primary" />
                <p className="text-bold text-primary">PHP</p>
              </div>
              <div className="flex items-center mb-3 mx-3 animate__animated animate__fadeIn animate__delay-2s">
                <FaLaravel className="text-4xl mr-2 text-primary" />
                <p className="text-bold text-primary">Laravel</p>
              </div>
              <div className="flex items-center mb-3 mx-3 animate__animated animate__fadeIn animate__delay-3s">
                <SiAmazonapigateway className="text-4xl mr-2 text-primary" />
                <p className="text-bold text-primary">API</p>
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center mb-3 mx-3 animate__animated animate__fadeIn animate__delay-4s">
                <SiMysql className="text-4xl mr-2 text-primary" />
                <p className="text-bold text-primary">MySQL</p>
              </div>
              <div className="flex items-center mb-3 mx-3 animate__animated animate__fadeIn animate__delay-5s">
                <FaGithub className="text-4xl mr-2 text-primary" />
                <p className="text-bold text-primary">GitHub</p>
              </div>
              <div className="flex items-center mb-3 mx-3 animate__animated animate__fadeIn animate__delay-6s">
                <FaVuejs className="text-4xl mr-2 text-primary" />
                <p className="text-bold text-primary">Vue JS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
