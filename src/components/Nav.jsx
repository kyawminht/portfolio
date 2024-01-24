import React, { useEffect, useRef, useState } from 'react';
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from 'flowbite-react';

const Nav = () => {
  const toggleButtonRef = useRef(null);

  // Function to set the theme based on user preference in localStorage
  function setTheme() {
    const currentMode = localStorage.getItem('mode');
    if (currentMode === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.add('light');
    }
  }

  // Function to toggle theme to html
  function toggleMode() {
    document.documentElement.classList.toggle('dark');
    const isDarkMode = document.documentElement.classList.contains('dark');
    localStorage.setItem('mode', isDarkMode ? 'dark' : 'light');
  }

  // Check user preference from localStorage when the page loads
  useEffect(() => {
    setTheme();
  }, []);

  // Set initial state of the toggle button after the component has mounted
  useEffect(() => {
    if (toggleButtonRef.current) {
      toggleButtonRef.current.checked = document.documentElement.classList.contains('light');
    }
  }, [toggleButtonRef.current]);

  // Event listener for mode toggle button
  useEffect(() => {
    const handleToggleChange = () => {
      toggleMode();
    };

    if (toggleButtonRef.current) {
      toggleButtonRef.current.addEventListener('change', handleToggleChange);
    }

    return () => {
      if (toggleButtonRef.current) {
        toggleButtonRef.current.removeEventListener('change', handleToggleChange);
      }
    };
  }, [toggleButtonRef.current]);

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
    <Navbar rounded className={` rounded ${isSticky ? ' bg-slate-800 sticky top-0 shadow-md' : 'bg-slate-800'}`}>
      <NavbarBrand >
        <span className="self-center whitespace-nowrap text-xl font-semibold text-white">My Portfolio</span> 
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink href="#about" className=' text-xl hover:underline underline-offset-8 cursor-pointer transition ease-in-out delay-150 hover:scale-110 text-white'>
          About
        </NavbarLink>
        <NavbarLink href="#skill" className=' text-xl hover:underline underline-offset-8 cursor-pointer transition ease-in-out delay-150 hover:scale-110 text-white'>My Skills</NavbarLink>
        <NavbarLink href="#project" className=' text-xl hover:underline underline-offset-8 cursor-pointer transition ease-in-out delay-150 hover:scale-110 text-white'>My Projects</NavbarLink>
        <NavbarLink href="#contact" className=' text-xl hover:underline underline-offset-8 cursor-pointer transition ease-in-out delay-150 hover:scale-110 text-white'>Contact Me</NavbarLink>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            id="toggleBtn"
            type="checkbox"
            value=""
            className="sr-only peer"
            ref={toggleButtonRef}
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
         
        </label>
      </NavbarCollapse>
    </Navbar>
  );
};

export default Nav;
