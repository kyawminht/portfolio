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
    <div className=" mb-5 scroll-smooth" id="skill">
      <div className="grid justify-center m-10">
        <span className=" text-red-500 dark:text-white text-2xl">Learn About My Skill Diversity</span>
        <h4 className="text-3xl font-bold  font dark:text-white mt-10 font-serif">Skills</h4>
      </div>
      <div className=" flex flex-col sm:flex-row container mx-auto text-white gap-10">
        <div className=" flex-1 shadow-lg rounded-lg border-black p-10 flex flex-col items-center bg-indigo-400 hover:scale-105 duration-150 dark:bg-neutral-700">
          <h1 className="text-center text-3xl mb-4">Frontend Development</h1>
          <div className="flex flex-col sm:flex-row">
            <div className="flex-1">
              <div className="flex items-center mb-3 mx-3">
                <TiHtml5 className="text-4xl mr-2" />
                <p className="text-bold">HTML</p>
              </div>

              <div className="flex items-center mb-3 mx-3">
                <IoLogoCss3 className="text-4xl mr-2 " />
                <p className="text-bold">CSS</p>
              </div>
              <div className="flex items-center mb-3 mx-3">
                <IoLogoJavascript  className="text-4xl mr-2" />
                <p className="text-bold">JavaScript</p>
              </div>
            
            </div>
            <div className="flex-1">

            <div className="flex items-center mb-3 mx-3">
                <SiTailwindcss  className="text-4xl mr-2" />
                <p className="text-bold">Tailwind</p>
              </div>

              <div className="flex items-center mb-3 mx-3">
                <FaBootstrap  className="text-4xl mr-2 " />
                <p className="text-bold">Bootstrap</p>
              </div>
              <div className="flex items-center mb-3 mx-3">
                <FaReact   className="text-4xl mr-2" />
                <p className="text-bold">React</p>
              </div>

            </div>
          </div>
        </div>

        <div className=" flex-1 shadow-lg rounded-lg border-black p-10 flex flex-col items-center bg-indigo-400 hover:scale-105 duration-150 dark:bg-neutral-700">
          <h1 className="text-center text-3xl mb-4">Backend Development</h1>
          <div className="flex flex-col sm:flex-row">
            <div className="flex-1">
              <div className="flex items-center mb-3 mx-3">
                <FaPhp  className="text-4xl mr-2" />
                <p className="text-bold">PHP</p>
              </div>

              <div className="flex items-center mb-3 mx-3">
                <FaLaravel className="text-4xl mr-2 " />
                <p className="text-bold">Laravel</p>
              </div>
              <div className="flex items-center mb-3 mx-3">
                <SiAmazonapigateway  className="text-4xl mr-2" />
                <p className="text-bold">API</p>
              </div>
            
            </div>
            <div className="flex-1">

            <div className="flex items-center mb-3 mx-3">
                <SiMysql  className="text-4xl mr-2" />
                <p className="text-bold">MySQL</p>
              </div>

              <div className="flex items-center mb-3 mx-3">
                <FaGitSquare  className="text-4xl mr-2 " />
                <p className="text-bold">Git</p>
              </div>
              <div className="flex items-center mb-3 mx-3">
                <FaDatabase  className="text-4xl mr-2" />
                <p className="text-bold">Designing Database</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
