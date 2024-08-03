import React, { useEffect, useRef, useState } from 'react';
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from 'flowbite-react';
import { Sun, Moon } from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa';
import { TfiEmail } from "react-icons/tfi";

const Nav = () => {
  const emailAddress = 'kyawminhtway288@gmail.com';
  const linkedinProfileUrl = 'https://www.linkedin.com/in/kyaw-min-htwe-99839b244/';
  const handleClick = () => {
    window.location.href = `mailto:${emailAddress}`;
  };
  const toggleButtonRef = useRef(null);
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem('mode') === 'dark' || false
  );

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
    localStorage.setItem('mode', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <Navbar rounded className={` z-10 rounded ${isSticky ? ' bg-black sticky top-0 shadow-md' : ' bg-black'}`}>
      <NavbarBrand >
        <span className="self-center whitespace-nowrap text-xl font-semibold text-white">kyaw min htwe</span> 
      </NavbarBrand>

      <NavbarToggle />

      <NavbarCollapse>
        {/* <NavbarLink href="#about" className=' text-xl hover:underline underline-offset-8 cursor-pointer transition ease-in-out delay-150 hover:scale-110 text-slate-800'>
          About
        </NavbarLink>
        <NavbarLink href="#skill" className=' text-xl hover:underline underline-offset-8 cursor-pointer transition ease-in-out delay-150 hover:scale-110 text-slate-800'>My Skills</NavbarLink>
        <NavbarLink href="#project" className=' text-xl hover:underline underline-offset-8 cursor-pointer transition ease-in-out delay-150 hover:scale-110 text-slate-800'>My Projects</NavbarLink>
        <NavbarLink href="#contact" className=' text-xl hover:underline underline-offset-8 cursor-pointer transition ease-in-out delay-150 hover:scale-110 text-slate-800'>Contact Me</NavbarLink> */}

        <div className=' flex justify-center items-center'>
            <div className="">
              <p className=" text-xl text-white">
              Contact Me
              </p>
            </div>
            <a href={linkedinProfileUrl} target="_blank" rel="noopener noreferrer"  className=" rounded-full bg-slate-200 hover:scale-150 transition-all m-3 cursor-pointer animate__animated animate__fadeInRight duration-200 ">
          
            <FaLinkedin className="text-4xl p-2 " />
            </a>

            <div className=" rounded-full bg-slate-200 hover:scale-150 transition-all m-3 cursor-pointer animate__animated animate__fadeInRight duration-200">
            <TfiEmail className=' text-4xl p-2 ' onClick={handleClick}/>
            </div>

            <label
          className="relative inline-flex items-center cursor-pointer m-3"
          onClick={toggleMode}
        >
          
            {isDarkMode ? (
              <Sun className="text-yellow-500" size={20} />
            ) : (
              <Moon className="text-white dark:text-gray-300" size={20} />
            )}
          
        </label>

        </div>

      
      </NavbarCollapse>
    </Navbar>
  );
};

export default Nav;
