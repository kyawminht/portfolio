import React, { useEffect, useState } from 'react';
import { Navbar, NavbarBrand, NavbarCollapse, NavbarToggle } from 'flowbite-react';
import { Sun, Moon } from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa';
import { TfiEmail } from 'react-icons/tfi';
import { FaGithub } from 'react-icons/fa';
import Logo from '../../src/assets/kk - Copy.png';
import { Link } from 'react-scroll';
import { trackEvent } from '../analystics';

const Nav = () => {
  const emailAddress = 'kyawminhtway288@gmail.com';
  const linkedinProfileUrl = 'https://www.linkedin.com/in/kyaw-min-htwe-99839b244/';
  const gitHubProfileUrl = 'https://github.com/kyawminht/';

   // Track navigation link clicks
   const handleNavLinkClick = (section) => {
    trackEvent("Navigation", "Link Clicked", section);
  };

  const handleClick = () => {
    window.location.href = `mailto:${emailAddress}`;
  };

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
    <Navbar rounded className={`z-10 rounded md:w-[1170px] xl:w-full ${isSticky ? 'bg-gray-400 sticky top-0 shadow-md' : 'bg-gray-400'}`}>
      <NavbarBrand>
        <span className="self-center whitespace-nowrap text-xl text-white">
          <p className='text-3xl rounded-full text-white' >KMH</p>
        </span>
      </NavbarBrand>

      <NavbarToggle />

      <NavbarCollapse>
        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-5 space-y-4 sm:space-y-0">
        <Link
            to="home"
            smooth={true}
            offset={-70}
            duration={500}
            className="text-xl text-white cursor-pointer text-left"
            activeClass="active"
            spy={true}
            onClick={() => handleNavLinkClick("Home")}
          >
            Home
          </Link>

          <Link
            to="about"
            smooth={true}
            offset={-70}
            duration={500}
            className="text-xl text-white cursor-pointer  text-left"
            activeClass="active"
            spy={true}
            onClick={() => handleNavLinkClick("About")}
          >
            About
          </Link>
          <Link
            to="skill"
            smooth={true}
            offset={-70}
            duration={500}
            className="text-xl text-white cursor-pointer  text-left"
            activeClass="active"
            spy={true}
            onClick={() => handleNavLinkClick("Skills")}
          >
            Skills
          </Link>
          <Link
            to="project"
            smooth={true}
            offset={-70}
            duration={500}
            className="text-xl text-white cursor-pointer  text-left"
            activeClass="active"
            spy={true}
            onClick={() => handleNavLinkClick("Projects")}
          >
            Projects
          </Link>
          <Link
            to="experience"
            smooth={true}
            offset={-70}
            duration={500} 
            className="text-xl text-white cursor-pointer  text-left"
            activeClass="active"
            spy={true}
            onClick={() => handleNavLinkClick("experience")}
          >
            Experience
          </Link>
          <Link
            to="education"
            smooth={true}
            offset={-70}
            duration={500}
            className="text-xl text-white cursor-pointer  text-left"
            activeClass="active"
            spy={true}
            onClick={() => handleNavLinkClick("Education")}
          >
            Education
          </Link>
          <div className="text-xl flex flex-row justify-start gap-x-4">
                <a href={linkedinProfileUrl} target="_blank" rel="noopener noreferrer"
                  className="rounded-full bg-slate-200 w-[40px] h-[40px] hover:scale-110 transition-all cursor-pointer flex items-center justify-center p-2">
                  <FaLinkedin className="text-2xl" />
                </a>
                <a href={gitHubProfileUrl} target="_blank" rel="noopener noreferrer"
                  className="rounded-full bg-slate-200 w-[40px] h-[40px] hover:scale-110 transition-all cursor-pointer flex items-center justify-center p-2">
                  <FaGithub className="text-2xl" />
                </a>
                <div className="rounded-full bg-slate-200 w-[40px] h-[40px] hover:scale-110 transition-all cursor-pointer flex items-center justify-center p-2">
                  <TfiEmail className="text-2xl" onClick={handleClick} />
                </div>
                <label className="rounded-full bg-slate-200 w-[40px] h-[40px] hover:scale-110 transition-all cursor-pointer flex items-center justify-center p-2"
                      onClick={toggleMode}>
                  {isDarkMode ? (
                    <Sun className="text-yellow-500" size={20} />
                  ) : (
                    <Moon className="text-white dark:text-gray-300" size={20} />
                  )}
                </label>
              </div>


        </div>
      </NavbarCollapse>
    </Navbar>
  );
};

export default Nav;
