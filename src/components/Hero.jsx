import React from 'react'
import HeroImg from '../assets/pro.jpg';
import Resume  from "../assets/kyawmin-htwe-Resume.pdf";
import 'animate.css';
const Hero = () => {
  return (
    <div className=' mt-5'>
      <section className=' scroll-smooth sm:w-[1170px] mx-auto xl:p-0 p-[15px] md:p-[30px] ' id='home'>
        <div className=" grid sm:grid-cols-12 justify-center items-center">
        <div className=' col-span-6'>
        <p className="text-xl font-[400] mb-5 text-primary text-left animate__animated animate__bounce animate__infinite">
            Hello Everyone.
        </p>
        <h2 className=' text-left text-[50px] font-[800] mb-5 font dark:text-white font-serif text-primary typing'>I'M KYAW MIN HTWE</h2>
        <p className=" text-left font font-semibold dark:text-white text-green-400">A passionate and dedicated software developer with a love for creating innovative solutions. I specialize in web development, bringing ideas to life through code and design. Explore my portfolio and discover the possibilities!</p>
        
        <div className="flex gap-x-5 mt-5">
        <a href="#intro" className=" alternating-bg bg-slate-800 p-4 text-white font-serif font-extrabold text-center w-full dark:bg-white dark:text-primary hover:bg-slate-600">
          Intro Video
        </a>
        <a href={Resume} download className='alternating-bg-reverse w-full bg-primary text-white font-serif font-extrabold text-center flex items-center justify-center hover:bg-green-600'>DownLoad CV</a>
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
