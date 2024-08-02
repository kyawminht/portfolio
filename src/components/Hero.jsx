import React from 'react'
import HeroImg from '../assets/pro.jpg';
import { FaArrowRight } from "react-icons/fa";
const Hero = () => {

  return (
    <div className=''>
      <section className=' scroll-smooth sm:w-[1170px] mx-auto' id='about'>
        <div className=" grid sm:grid-cols-12 justify-center items-center p-10">
        <div className=' col-span-6'>
        <p className="text-xl font-[400] mb-5 text-green-400 text-left">Hello Everyone.</p>
        <h2 className=' text-left text-[50px] font-[800] mb-5 font dark:text-white font-serif text-green-400'>I'M KYAW MIN HTWE</h2>
        <p className=" text-left font font-semibold dark:text-white text-green-400">A passionate and dedicated software developer with a love for creating innovative solutions. I specialize in web development, bringing ideas to life through code and design. Explore my portfolio and discover the possibilities!</p>
        
        <div className=" bg-green-400 sm:ml-[-0px] flex justify-start items-center mt-5 border-4 border-green-400">
       <a href="#intro" className=' duration-200 hover:scale-200 bg-slate-800 p-4 text-white font-serif font-extrabold text-center sm:w-[450px] w-[250px]'>Intro Video</a>
       <FaArrowRight className=' text-[30px] sm:ml-[22px] ml-[10px]' />
       </div>

      </div>
      <div className=' col-span-6 mx-auto mt-5 sm:mt-0'>
        <img src={HeroImg} alt="" className=' w-[500px] h-[600px] rounded-full border-8 dark:border-white border-green-400'/>
      </div>
        </div>
    </section>
    </div>
  )
}

export default Hero
