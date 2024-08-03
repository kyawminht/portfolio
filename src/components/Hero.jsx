import React from 'react'
import HeroImg from '../assets/pro.jpg';
import { FaArrowRight } from "react-icons/fa";
const Hero = () => {

  return (
    <div className=' mt-5'>
      <section className=' scroll-smooth sm:w-[1170px] mx-auto sm:p-0 p-[15px]' id='about'>
        <div className=" grid sm:grid-cols-12 justify-center items-center">
        <div className=' col-span-6'>
        <p className="text-xl font-[400] mb-5 text-primary text-left">Hello Everyone.</p>
        <h2 className=' text-left text-[50px] font-[800] mb-5 font dark:text-white font-serif text-primary'>I'M KYAW MIN HTWE</h2>
        <p className=" text-left font font-semibold dark:text-white text-green-400">A passionate and dedicated software developer with a love for creating innovative solutions. I specialize in web development, bringing ideas to life through code and design. Explore my portfolio and discover the possibilities!</p>
        
        <div className=" bg-primary sm:ml-[-0px] flex justify-start items-center mt-5 border-4 border-primary cursor-pointer hover:scale-105 duration-150">
       <a href="#intro" className=' duration-200 hover:scale-200 bg-slate-800 p-4 text-white font-serif font-extrabold text-center sm:w-[450px] w-[250px]'>Intro Video</a>
       <FaArrowRight className=' text-[30px] sm:ml-[50px] ml-[40px] cursor-pointer hover:scale-125 duration-150' />
       </div>

      </div>
      <div className=' col-span-6 mx-auto mt-5 sm:mt-0'>
        <img src={HeroImg} alt="" className=' w-[500px] h-[600px] rounded-full border-8 dark:border-white border-primary'/>
      </div>
        </div>
    </section>
    </div>
  )
}

export default Hero
