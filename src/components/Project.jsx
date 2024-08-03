import React from "react";
import EImage from "../assets/e-commerce.png";
import PImage1 from "../assets/p2.png";
import PImage2 from "../assets/meal.png";
import { FaEye } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
const Project = () => {
  return (
    <div className="mb-5 scroll-smooth  sm:p-0 p-[15px]" id="project">
      <div className="">
        <p className=" text-left text-primary text-2xl sm:ml-[250px]">
          Glimpse into My Work
        </p>
       <div className="flex items-center">
       <h4 className=" sm:ml-[250px] text-[50px] font-[800] text-left dark:text-white mt-10 font-serif">
        Projects
        </h4>
        <p className="line bg-primary h-[5px] sm:w-[1000px] sm:ml-[240px] sm:mt-[60px]"></p>
       </div>
      </div>

      <div className=" sm:w-[1170px] mx-auto mt-5 container flex flex-col sm:flex-row justify-center gap-10 ">
        <div className="flex-1 sm:max-w-[auto] md:max-w-[auto] lg:max-w-[auto] xl:max-w-[auto] dark:bg-neutral-700 dark:text-white ">
          <div className="relative overflow-hidden bg-cover bg-no-repeat">
            <img
              className=" h-[300px] border-2 border-black"
              src={EImage}
              alt="Project 1"
            />
          </div>
          <div className=" mt-3 h-[60px]">
            <h6 className="text-xl font-bold text-black dark:text-white">
              E-commerce project with laravel
            </h6>
          </div>
          <div className="flex justify-center mb-5">
            <a
              href="https://kmh.shwemmhost.com/"
              target="_blank"
              rel="noreferrer"
              className=" bg-primary text-white font-serif font-extrabold p-4 rounded-full shadow-md hover:scale-105 duration-150 mx-3 text-sm border-2 border-black dark:border-white"
            >
             <FaEye />
            </a>
            <a
              href="https://github.com/kyawminht/e-commerce"
              rel="noreferrer"
              target="_blank"
              className=" bg-primary text-white font-serif font-extrabold p-4 rounded-full shadow-md hover:scale-105 duration-150 text-sm border-2 border-black dark:border-white"
            >
              <FaGithub />
            </a>
          </div>
        </div>
        <div className="flex-1 sm:max-w-[auto] md:max-w-[auto] lg:max-w-[auto] xl:max-w-[auto] dark:bg-neutral-700 dark:text-white ">
          <div className="relative overflow-hidden bg-cover bg-no-repeat">
            <img
              className=" h-[300px] border-2 border-black"
              src={PImage1}
              alt="Project 1"
            />
          </div>
          <div className=" mt-3 h-[60px]">
            <h6 className="text-xl font-bold">
              Simple Cart Management app with React
            </h6>
          </div>
          <div className="flex justify-center mb-5">
            <a
              href="https://simple-cart-management-vvhz.vercel.app/"
              rel="noreferrer"
              target="_blank"
              className=" bg-primary text-white font-serif font-extrabold p-4 rounded-full shadow-md hover:scale-105 duration-150 mx-3 text-sm border-2 border-black dark:border-white"
              >
               <FaEye />
            </a>
            <a
              href="https://github.com/kyawminht/simple-cart-management/blob/main/README.md"
              rel="noreferrer"
              target="_blank"
              className=" bg-primary text-white font-serif font-extrabold p-4 rounded-full shadow-md hover:scale-105 duration-150 text-sm border-2 border-black dark:border-white"
              >
                <FaGithub />
            </a>
          </div>
        </div>

        <div className="flex-1 sm:max-w-[auto] md:max-w-[auto] lg:max-w-[auto] xl:max-w-[auto] dark:bg-neutral-700 dark:text-white">
          <div className="relative overflow-hidden bg-cover bg-no-repeat">
            <img
              className=" border-2 border-black h-[300px]"
              src={PImage2}
              alt="Project 1"
            />
          </div>
          <div className="mt-3 h-[60px]">
            <h6 className="text-xl font-bold">
              The Meal App
            </h6>
          </div>

          <div className="flex justify-center mb-5">
            <a
              href="https://meal-app-silk-one.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className=" bg-primary text-white font-serif font-extrabold p-4 rounded-full shadow-md hover:scale-105 duration-150 mx-3 text-sm border-2 border-black dark:border-white"
              >
               <FaEye />
            </a>
            <a
              href="https://github.com/kyawminht/Meal-App"
              target="_blank"
              rel="noreferrer"
              className=" bg-primary text-white font-serif font-extrabold p-4 rounded-full shadow-md hover:scale-105 duration-150 text-sm border-2 border-black dark:border-white"
              >
                <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
