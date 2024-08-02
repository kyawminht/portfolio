import React from "react";
import { TiHtml5 } from "react-icons/ti";
import { FaReact } from "react-icons/fa";
import { IoLogoCss3,IoLogoJavascript  } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import { FaBootstrap,FaPhp,FaLaravel,FaGitSquare } from "react-icons/fa";
import { SiAmazonapigateway,SiMysql } from "react-icons/si";
import { FaDatabase } from "react-icons/fa6";
const Skill = () => {
  return (
    <div className=" my-5 scroll-smooth sm:w-[1170px] mx-auto" id="skill">
      <div className=" ">
        <p className=" text-left text-green-400 text-2xl dark:text-white">Learn About My Skill Diversity</p>
      <div className="flex justify-start items-center">
      <p className="line bg-green-400 h-[5px] sm:w-[250px] sm:ml-[-340px] sm:mt-[60px]"></p>
      <h4 className=" text-left text-[50px] font-[800] dark:text-white mt-10 font-serif sm:ml-[90px]">Skills</h4>
      </div>
      </div>
      <div className=" flex flex-col sm:flex-row container mx-auto text-white gap-10">
        <div className=" flex-1 p-10 flex flex-col items-center bg-black dark:bg-neutral-700">
          <h1 className="text-center text-3xl mb-4 text-green-400">Frontend Development</h1>
          <div className="flex flex-col sm:flex-row">
            <div className="flex-1">
              <div className="flex items-center mb-3 mx-3">
                <TiHtml5 className="text-4xl mr-2 text-green-400" />
                <p className="text-bold text-green-400">HTML</p>
              </div>

              <div className="flex items-center mb-3 mx-3">
                <IoLogoCss3 className="text-4xl mr-2 text-green-400" />
                <p className="text-bold text-green-400">CSS</p>
              </div>
              <div className="flex items-center mb-3 mx-3">
                <IoLogoJavascript  className="text-4xl mr-2 text-green-400" />
                <p className="text-bold text-green-400">JavaScript</p>
              </div>
            
            </div>
            <div className="flex-1">

            <div className="flex items-center mb-3 mx-3">
                <SiTailwindcss  className="text-4xl mr-2 text-green-400" />
                <p className="text-bold text-green-400">Tailwind</p>
              </div>

              <div className="flex items-center mb-3 mx-3">
                <FaBootstrap  className="text-4xl mr-2 text-green-400" />
                <p className="text-bold text-green-400">Bootstrap</p>
              </div>
              <div className="flex items-center mb-3 mx-3">
                <FaReact   className="text-4xl mr-2 text-green-400" />
                <p className="text-bold text-green-400">React</p>
              </div>

            </div>
          </div>
        </div>

        <div className=" flex-1 p-10 flex flex-col items-center bg-black dark:bg-neutral-700">
          <h1 className="text-center text-3xl mb-4 text-green-400">Backend Development</h1>
          <div className="flex flex-col sm:flex-row">
            <div className="flex-1">
              <div className="flex items-center mb-3 mx-3">
                <FaPhp  className="text-4xl mr-2 text-green-400" />
                <p className="text-bold text-green-400">PHP</p>
              </div>

              <div className="flex items-center mb-3 mx-3">
                <FaLaravel className="text-4xl mr-2 text-green-400" />
                <p className="text-bold text-green-400">Laravel</p>
              </div>
              <div className="flex items-center mb-3 mx-3">
                <SiAmazonapigateway  className="text-4xl mr-2 text-green-400" />
                <p className="text-bold text-green-400">API</p>
              </div>
            
            </div>
            <div className="flex-1">

            <div className="flex items-center mb-3 mx-3">
                <SiMysql  className="text-4xl mr-2 text-green-400" />
                <p className="text-bold text-green-400">MySQL</p>
              </div>

              <div className="flex items-center mb-3 mx-3">
                <FaGitSquare  className="text-4xl mr-2 text-green-400" />
                <p className="text-bold text-green-400">Git</p>
              </div>
              <div className="flex items-center mb-3 mx-3">
                <FaDatabase  className="text-4xl mr-0 text-green-400" />
                <p className="text-bold text-green-400">Designing Database</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
