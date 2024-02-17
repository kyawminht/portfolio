import React, { useEffect, useRef, useState } from 'react';
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from 'flowbite-react';
import { Sun, Moon } from 'lucide-react';


const Nav = () => {
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
    <Navbar rounded className={` z-10 rounded ${isSticky ? ' bg-slate-800 sticky top-0 shadow-md' : 'bg-slate-800'}`}>
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
        <label
          className="relative inline-flex items-center cursor-pointer"
          onClick={toggleMode}
        >
          
            {isDarkMode ? (
              <Sun className="text-yellow-500" size={20} />
            ) : (
              <Moon className="text-white dark:text-gray-300" size={20} />
            )}
          
        </label>

      </NavbarCollapse>
    </Navbar>
  );
};

export default Nav;
