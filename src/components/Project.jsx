import React from "react";
import EImage from "../assets/e-commerce.png";
import PImage1 from "../assets/p2.png";
import PImage2 from "../assets/meal.png";

const Project = () => {
  return (
    <div className=" mb-5 scroll-smooth" id="project">
      <div className="grid justify-center m-10">
        <p className=" text-red-500 dark:text-white text-2xl">
          Glimpse into My Work
        </p>
        <h4 className="text-3xl font-bold  font dark:text-white mt-10 font-serif">
          Projects
        </h4>
      </div>
      <div className="container mx-auto flex flex-col sm:flex-row justify-center gap-10 ">
        <div className="flex-1 sm:max-w-[auto] md:max-w-[auto] lg:max-w-[auto] xl:max-w-[auto] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 hover:scale-105 duration-150 p-10 dark:text-white ">
          <div className="relative overflow-hidden bg-cover bg-no-repeat">
            <img
              className="rounded-t-lg h-[300px]"
              src={EImage}
              alt="Project 1"
            />
          </div>
          <div className="p-6 h-[250px]">
            <h6 className="text-xl font-bold">
              E-commerce project with laravel
            </h6>
            <p className="text-base text-neutral-600 dark:text-neutral-200">
            Leveraging Laravel, Livewire, and Bootstrap, this project empowers admins with control over hero sliders, categories, and products, while users enjoy seamless browsing, searching, and purchasing.
            </p>
          </div>
          <div className="flex justify-center mb-5">
            <a
              href="https://kmh.shwemmhost.com/"
              target="_blank"
              rel="noreferrer"
              className=" bg-red-500 text-white font-serif font-extrabold p-4 rounded-md shadow-md hover:scale-105 duration-150 mx-3 text-sm"
            >
              View Website
            </a>
            <a
              href="https://github.com/kyawminht/e-commerce"
              rel="noreferrer"
              target="_blank"
              className=" bg-red-500 text-white font-serif font-extrabold p-4 rounded-md shadow-md hover:scale-105 duration-150 text-sm"
            >
              View on GitHub
            </a>
          </div>
        </div>
        <div className="flex-1 sm:max-w-[auto] md:max-w-[auto] lg:max-w-[auto] xl:max-w-[auto] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 hover:scale-105 duration-150 p-10 dark:text-white">
          <div className="relative overflow-hidden bg-cover bg-no-repeat">
            <img
              className="rounded-t-lg h-[300px]"
              src={PImage1}
              alt="Project 1"
            />
          </div>
          <div className="p-6 h-[250px]">
            <h6 className="text-xl font-bold">
              Simple Cart Management app with React
            </h6>
            <p className="text-base text-neutral-600 dark:text-neutral-200">
              This is a simple cart management app using react , tailwind css. I
              applied lots of react states and context api to share states
              globally.
            </p>
          </div>
          <div className="flex justify-center mb-5">
            <a
              href="https://simple-cart-management-vvhz.vercel.app/"
              rel="noreferrer"
              target="_blank"
              className="bg-red-500 text-white font-serif font-extrabold p-4 rounded-md shadow-md hover:scale-105 duration-150 mx-3 text-sm"
            >
              View Website
            </a>
            <a
              href="https://github.com/kyawminht/simple-cart-management/blob/main/README.md"
              rel="noreferrer"
              target="_blank"
              className="bg-red-500 font-serif font-extrabold text-white p-4 rounded-md shadow-md hover:scale-105 duration-150 text-sm"
            >
              View on GitHub
            </a>
          </div>
        </div>

        <div className="flex-1 sm:max-w-[auto] md:max-w-[auto] lg:max-w-[auto] xl:max-w-[auto] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 hover:scale-105 duration-150 p-10 dark:text-white">
          <div className="relative overflow-hidden bg-cover bg-no-repeat">
            <img
              className="rounded-t-lg h-[300px]"
              src={PImage2}
              alt="Project 1"
            />
          </div>
          <div className="p-6 h-[250px]">
            <h6 className="text-xl font-bold">
              The Meal App
            </h6>
            <p className="text-base text-neutral-600 dark:text-neutral-200">
            In this app, users can search for meals by name, by letters (A, B, C, etc.), and by ingredients. I used the Meal DB API and Vue.js with Pinia for global state management to create a seamless experience.
            </p>
          </div>

          <div className="flex justify-center mb-5">
            <a
              href="https://meal-app-silk-one.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="bg-red-500 font-serif font-extrabold text-white p-4 rounded-md shadow-md hover:scale-105 duration-150 mx-3 text-sm"
            >
              View Website
            </a>
            <a
              href="https://github.com/kyawminht/Meal-App"
              target="_blank"
              rel="noreferrer"
              className="bg-red-500 font-serif font-extrabold text-white p-4 rounded-md shadow-md hover:scale-105 duration-150 text-sm"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
