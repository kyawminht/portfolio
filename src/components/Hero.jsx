import React from 'react'
import HeroImg from '../assets/pro.jpg';
const Hero = () => {
  return (
    <section className=' scroll-smooth flex flex-col sm:flex-row justify-center items-center p-10 mt-5 space-x-10 ' id='about'>
      <div className=' flex-1 font '>
        <p className="text-4xl mb-5 text-red-600">I am</p>
        <h2 className=' text-6xl font-bold mb-5 font dark:text-white font-serif'>Kyaw Min Htwe</h2>
        <p className="font font-semibold dark:text-white">A passionate and dedicated software developer with a love for creating innovative solutions. I specialize in web development, bringing ideas to life through code and design. Explore my portfolio and discover the possibilities!</p>
      </div>
      <div className=' flex-1'>
        <img src={HeroImg} alt="" width={200} height={50} className=' rounded-full w-full border-8 border-white'/>
      </div>
      <div className=' flex-1'>
        <h2 className="text-4xl mb-5 font font-bold dark:text-white font-serif">About Me</h2>
        <p className=' font-bold mb-5 font dark:text-white'>A web developer with over a year of focused study in the field. I hold a Level 3 Foundation Diploma in Computing from Pearson BTECH and am currently enrolled in the Level 4 Diploma program, further enhancing my knowledge and skills.</p>
      </div>
    </section>
  )
}

export default Hero
