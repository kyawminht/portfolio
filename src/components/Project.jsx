import React, { useRef, useState, useEffect } from "react";
import EImage from "../assets/pokemon.png";
import PImage1 from "../assets/p2.png";
import PImage2 from "../assets/meal.png";
import UsedCar from "../assets/used_car.png";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const Project = () => {
  const scrollContainer = useRef(null);
  const [showPreviousButton, setShowPreviousButton] = useState(false);

  const projects = [
    {
      id: 1,
      title: "Used Car Sale Portal",
      detail:
        "A comprehensive full-stack application built with Laravel and Vue.js. Users can list their cars for sale, place bids, and track their transactions. Admins have full control to manage users, car listings, and bid pricing, making it easy to oversee and manage the entire platform.",
      techStacks: ["Laravel", "Vue.js", "Tailwind CSS", "MySQL"],
      image: UsedCar,
      liveLink: "https://used-car-sale-portal-frontend.vercel.app/",
      githubLink:
        "https://github.com/kyawminht/used-car-sale-portal_frontend",
    },
    {
      id: 2,
      title: "Pokemon API Documentation",
      detail:
        "An educational project designed to provide detailed documentation of a Pokemon API. This resource is ideal for students and developers looking to learn about API calls and endpoints, with clear examples and explanations for each endpoint.",
      techStacks: ["Laravel", "React.js", "Tailwind CSS"],
      image: EImage,
      liveLink: "https://pokemon-api-docs.vercel.app/",
      githubLink: "https://github.com/kyawminht/pokemon_api",
    },
    {
      id: 3,
      title: "Simple Cart Management App",
      detail:
        "A straightforward e-commerce application where users can view products, add them to a cart, and manage their purchases. It uses the Fakestore API for real-time product data, making it a practical tool for understanding basic cart management functionalities.",
      techStacks: ["React.js", "Tailwind CSS", "Fakestore API"],
      image: PImage1,
      liveLink: "https://simple-cart-management-vvhz.vercel.app/",
      githubLink:
        "https://github.com/kyawminht/simple-cart-management/blob/main/README.md",
    },
    {
      id: 4,
      title: "The Meal App",
      detail:
        "Application that allows users to search for meals by name, ingredient, or category. It integrates with The Meal API to provide comprehensive meal data and includes features like viewing instructional videos on YouTube.",
      techStacks: ["Vue.js", "Tailwind CSS", "The Meal API"],
      image: PImage2,
      liveLink: "https://meal-app-silk-one.vercel.app/",
      githubLink: "https://github.com/kyawminht/Meal-App",
    },
  ];

  useEffect(() => {
    const handleScroll = (e) => {
      e.preventDefault();
      scrollContainer.current.scrollLeft += e.deltaY * 2.5;
      setShowPreviousButton(
        scrollContainer.current.scrollLeft >
          scrollContainer.current.offsetWidth * 0.25
      );
    };

    const container = scrollContainer.current;
    if (container) {
      container.addEventListener("wheel", handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener("wheel", handleScroll);
      }
    };
  }, []);

  const scrollPrevious = () => {
    scrollContainer.current.scrollTo({
      left: scrollContainer.current.scrollLeft - scrollContainer.current.offsetWidth * 0.5,
      behavior: "smooth",
    });
    setShowPreviousButton(
      scrollContainer.current.scrollLeft >
        scrollContainer.current.offsetWidth * 0.25
    );
  };

  const scrollNext = () => {
    scrollContainer.current.scrollTo({
      left: scrollContainer.current.scrollLeft + scrollContainer.current.offsetWidth * 0.5,
      behavior: "smooth",
    });
    setShowPreviousButton(
      scrollContainer.current.scrollLeft >
        scrollContainer.current.offsetWidth * 0.25,
    );
  };

  const buttonStyles = {
    position: "absolute",
    top: "50%",
    borderRadius: "999999px",
    transform: "translateY(-50%)",
    padding: "0.5rem",
  };

  return (
    <div
      className="mb-5 scroll-smooth sm:p-0 p-[15px] sm:w-[1170px] mx-auto md:p-[30px]"
      id="project"
    >
      <div className="">
        <p className="text-left text-primary text-2xl">Glimpse into My Work</p>
        <div className="flex justify-start items-center">
          <p className="line bg-primary h-[5px] sm:w-[250px] sm:ml-[-340px] sm:mt-[60px]"></p>
          <h4 className="typing text-left text-[50px] font-[800] dark:text-white mt-10 font-serif sm:ml-[90px]">
            Projects
          </h4>
        </div>
      </div>
       {/* Cards */}
       <div style={{ position: "relative" }}>
        <div
          className="overflow-x-scroll scrollbar-hide flex gap-4 md:gap-6 pb-4"
          ref={scrollContainer}
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex-shrink-0 w-full sm:w-[370px] mx-auto overflow-hidden shadow-lg rounded-md"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[200px] sm:h-[260px] border-b-2 border-primary"
              />
              <div className="p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-semibold">{project.title}</h3>
                <p className="text-sm sm:text-base">{project.detail}</p>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 mt-4">
                Tech Stack: {project.techStacks.join(", ")}
              </p>
              <div className="my-2">
                <a
                  href={project.liveLink}
                  className="text-blue-500 hover:underline mr-2 text-xs sm:text-sm"
                >
                  Live
                </a>
                <a
                  href={project.githubLink}
                  className="text-blue-500 hover:underline text-xs sm:text-sm"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>

        {showPreviousButton && (
          <button
            style={{
              ...buttonStyles,
              left: "-3%",
            }}
            className="hover:bg-green-500 bg-primary"
            onClick={scrollPrevious}
          >
            <FaArrowLeft size={20} className="text-white" />
          </button>
        )}

        <button
          style={{
            ...buttonStyles,
            right: "-2%",
          }}
          className="hover:bg-green-500 bg-primary"
          onClick={scrollNext}
        >
          <FaArrowRight size={20} className="text-white" />
        </button>
      </div>
    </div>
  );
};

export default Project;
