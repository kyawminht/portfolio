import React, { useEffect, useState } from 'react'
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from 'flowbite-react';
const Nav = () => {

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
    <Navbar rounded className={`rounded ${isSticky ? 'sticky top-0 bg-white shadow-md' : ''}`}>
    <NavbarBrand >
      <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">My Portfolio</span> 
    </NavbarBrand>
    <NavbarToggle />
    <NavbarCollapse>
      <NavbarLink href="#about" active className=' text-xl hover:underline underline-offset-8 cursor-pointer transition ease-in-out delay-150 hover:scale-110'>
        About
      </NavbarLink>
      <NavbarLink href="#skill" className=' text-xl hover:underline underline-offset-8 cursor-pointer transition ease-in-out delay-150 hover:scale-110'>My Skills</NavbarLink>
      <NavbarLink href="#project" className=' text-xl hover:underline underline-offset-8 cursor-pointer transition ease-in-out delay-150 hover:scale-110'>My Projects</NavbarLink>
      <NavbarLink href="#contact" className=' text-xl hover:underline underline-offset-8 cursor-pointer transition ease-in-out delay-150 hover:scale-110'>Contact Me</NavbarLink>
    </NavbarCollapse>
  </Navbar>
  )
}

export default Nav
