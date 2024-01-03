import React from 'react'
import EImage from '../assets/e-commerce.png'
import PImage1 from '../assets/p2.png'
import PImage2 from '../assets/text_controller.png'


const Project = () => {
  return (
    <div className=" mb-5 scroll-smooth" id='project'>
    <div className="grid justify-center m-10">
      <p className=" text-white">Glimpse into My Work</p>
      <h4 className="text-3xl font-bold text-white mt-10">Projects</h4>
    </div>
    <div className="container mx-auto flex flex-col sm:flex-row justify-center gap-10 ">
      <div className="flex-1 sm:max-w-[auto] md:max-w-[auto] lg:max-w-[auto] xl:max-w-[auto] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 hover:scale-105 duration-150">
        <div className="relative overflow-hidden bg-cover bg-no-repeat">
          <img
            className="rounded-t-lg h-[300px]"
            src={EImage}
            alt="Project 1"
          />
        </div>
        <div className="p-6">
          <h6 className="text-xl font-bold">E-commerce project with laravel</h6>
          <p className="text-base text-neutral-600 dark:text-neutral-200">
            This project is developed with laravel, livewire and bootstrap. It has user and admin view.
            Admin can manipulate hero section sliders,categories,product,colors and many more while user
            can see, search and purchase the products.
          </p>
        </div>
        <div className="flex justify-center mb-5">
          <a href="https://kmh.shwemmhost.com/" target="_blank" className="bg-rose-300 px-4 p-5 rounded-md shadow-md hover:scale-105 duration-150 mx-3">
            View Website
          </a>
          <a href='https://github.com/kyawminht/e-commerce' target="_blank" className="bg-rose-300 px-4 p-5 rounded-md shadow-md hover:scale-105 duration-150">
            View on GitHub
          </a>
        </div>
      </div>
      <div className="flex-1 sm:max-w-[auto] md:max-w-[auto] lg:max-w-[auto] xl:max-w-[auto] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 hover:scale-105 duration-150">
        <div className="relative overflow-hidden bg-cover bg-no-repeat">
          <img
            className="rounded-t-lg h-[300px]"
            src={PImage1}
            alt="Project 1"
          />
        </div>
        <div className="p-6">
        <h6 className="text-xl font-bold">Simple Cart Management app with React</h6>
          <p className="text-base text-neutral-600 dark:text-neutral-200">
            This is a simple cart management app using react , tailwind css. I applied lots of react states and context api to share states globally.
          </p>
        </div>
        <div className="flex justify-center mb-5">
          <a href='https://simple-cart-management-vvhz.vercel.app/' target="_blank" className="bg-rose-300 px-4 p-5 rounded-md shadow-md hover:scale-105 duration-150 mx-3">
            View Website
          </a>
          <a href="https://github.com/kyawminht/simple-cart-management/blob/main/README.md" target="_blank" className="bg-rose-300 px-4 p-5 rounded-md shadow-md hover:scale-105 duration-150">
            View on GitHub
          </a>
        </div>
      </div>

      <div className="flex-1 sm:max-w-[auto] md:max-w-[auto] lg:max-w-[auto] xl:max-w-[auto] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 hover:scale-105 duration-150">
        <div className="relative overflow-hidden bg-cover bg-no-repeat">
          <img
            className="rounded-t-lg h-[300px]"
            src={PImage2}
            alt="Project 1"
          />
        </div>
        <div className="p-6">
        <h6 className="text-xl font-bold">Text controller with pure JavaScript</h6>
          <p className="text-base text-neutral-600 dark:text-neutral-200">
           This is the small project to practice JavaScript DOM manipulation. In this project, User can text and he also can chage color, text size and font family.
          </p>
        </div>
        <div className="flex justify-center mb-5">
          <a href='https://text-controller.vercel.app/' target="_blank" className="bg-rose-300 px-4 p-5 rounded-md shadow-md hover:scale-105 duration-150 mx-3">
            View Website
          </a>
          <a href='https://github.com/kyawminht/text_controller' target="_blank"  className="bg-rose-300 px-4 p-5 rounded-md shadow-md hover:scale-105 duration-150">
            View on GitHub
          </a>
        </div>
      </div>
      
    </div>
  </div>
  )
}

export default Project
