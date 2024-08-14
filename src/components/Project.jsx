import React from "react";
import EImage from "../assets/pokemon.png";
import PImage1 from "../assets/p2.png";
import PImage2 from "../assets/meal.png";
import UsedCar from "../assets/used_car.png";

import { FaEye, FaGithub } from "react-icons/fa6";

const projects = [
  {
    id:1,
    "title": "Used Car Sale Portal",
    "detail": "A comprehensive full-stack application built with Laravel and Vue.js. Users can list their cars for sale, place bids, and track their transactions. Admins have full control to manage users, car listings, and bid pricing, making it easy to oversee and manage the entire platform.",
    "techStacks": [
      "Laravel",
      "Vue.js",
      "Tailwind CSS",
      "MySQL"
    ],
    "image": UsedCar, 
    "liveLink": "https://used-car-sale-portal-frontend.vercel.app/",
    "githubLink": "https://github.com/kyawminht/used-car-sale-portal_frontend"
  },
  {
    id:2,
    "title": "Pokemon API Documentation",
    "detail": "An educational project designed to provide detailed documentation of a Pokemon API. This resource is ideal for students and developers looking to learn about API calls and endpoints, with clear examples and explanations for each endpoint.",
    "techStacks": [
      "Laravel",
      "React.js",
      "Tailwind CSS"
    ],
    "image": EImage, 
    "liveLink": "https://pokemon-api-docs.vercel.app/",
    "githubLink": "https://github.com/kyawminht/pokemon_api"
  },
  {
    id:3,
    "title": "Simple Cart Management App",
    "detail": "A straightforward e-commerce application where users can view products, add them to a cart, and manage their purchases. It uses the Fakestore API for real-time product data, making it a practical tool for understanding basic cart management functionalities.",
    "techStacks": [
      "React.js",
      "Tailwind CSS",
      "Fakestore API"
    ],
    "image": PImage1, 
    "liveLink": "https://simple-cart-management-vvhz.vercel.app/",
    "githubLink": "https://github.com/kyawminht/simple-cart-management/blob/main/README.md"
  },
  {
    id:4,
    "title": "The Meal App",
    "detail": "Application that allows users to search for meals by name, ingredient, or category. It integrates with The Meal API to provide comprehensive meal data and includes features like viewing instructional videos on YouTube.",
    "techStacks": [
      "Vue.js",
      "Tailwind CSS",
      "The Meal API"
    ],
    "image": PImage2, 
    "liveLink": "https://meal-app-silk-one.vercel.app/",
    "githubLink": "https://github.com/kyawminht/Meal-App"
  }
];

const Project = () => {
  return (
    <div
      className="mb-5 scroll-smooth sm:p-0 p-[15px] sm:w-[1170px] mx-auto md:p-[30px]"
      id="project"
    >
      <div className="">
        <p className="text-left text-primary text-2xl">Glimpse into My Work</p>
        <div className="flex justify-start items-center">
          <p className="line bg-primary h-[5px] sm:w-[250px] sm:ml-[-340px] sm:mt-[60px]"></p>
          <h4 className="text-left text-[50px] font-[800] dark:text-white mt-10 font-serif sm:ml-[90px]">
            Projects
          </h4>
        </div>
      </div>

      <div className="sm:w-[1170px] mx-auto mt-5 container flex flex-col sm:flex-row justify-center gap-10 ">
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex-1 sm:max-w-[auto] md:max-w-[auto] lg:max-w-[auto] xl:max-w-[auto] dark:bg-neutral-700 dark:text-white shadow-md rounded-md p-5 bg-black"
          >
           <div className="relative overflow-hidden bg-cover bg-no-repeat group">
              <img
                className="h-[300px] border-2 border-black group-hover:blur-sm transition-all duration-300"
                src={project.image}
                alt={`Project ${project.id}`}
              />
              
              {/* Buttons container */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex justify-center mb-5 space-x-3">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-primary text-white font-serif font-extrabold p-4 rounded-full shadow-md hover:scale-105 duration-150 text-sm border-2 dark:border-white"
                  >
                    <FaEye />
                  </a>
                  <a
                    href={project.githubLink}
                    rel="noreferrer"
                    target="_blank"
                    className="bg-primary text-white font-serif font-extrabold p-4 rounded-full shadow-md hover:scale-105 duration-150 text-sm border-2 dark:border-white"
                  >
                    <FaGithub />
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-3">
              <h6 className="text-xl font-bold text-primary dark:text-white h-[60px]">
                {project.title}
              </h6>
              <p className=" text-balck text-left font-semibold text-white">{project.detail}</p>
            </div>
            {/* <div className="flex justify-center mb-5">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noreferrer"
                className="bg-primary text-white font-serif font-extrabold p-4 rounded-full shadow-md hover:scale-105 duration-150 mx-3 text-sm border-2 border-black dark:border-white"
              >
                <FaEye />
              </a>
              <a
                href={project.githubLink}
                rel="noreferrer"
                target="_blank"
                className="bg-primary text-white font-serif font-extrabold p-4 rounded-full shadow-md hover:scale-105 duration-150 text-sm border-2 border-black dark:border-white"
              >
                <FaGithub />
              </a>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
