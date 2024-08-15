import React from 'react'
import YouTube from 'react-youtube'
import 'animate.css'
const Intro = () => {
    const videoOptions = {
        width: '100%',
        playerVars: {
          autoplay: 0,
        },
      };
  return (
    <div className='  sm:p-0 p-[15px] mt-[60px] mb-[160px] scroll-smooth w-full sm:w-[1170px] mx-auto md:p-[30px]' id="intro">
        <div className="mt-10">
        <div className="flex justify-start items-center">
          <p className="line bg-primary h-[5px] sm:w-[250px] sm:ml-[-340px] sm:mt-[60px]"></p>
          <h4 className=" text-left text-[50px] font-[800] dark:text-white mt-10 font-serif sm:ml-[90px]">My Introduction Video</h4>
      </div>
      </div>
      <div className="w-full p-0 my-5 border-8 border-primary">
        <YouTube videoId="FJQYbIXvk78" opts={videoOptions}/>
      </div>

    </div>
  )
}

export default Intro
