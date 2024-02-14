import React from 'react'
import YouTube from 'react-youtube'

const Intro = () => {
    const videoOptions = {
        width: '100%',
        playerVars: {
          autoplay: 0,
        },
      };
  return (
    <div className=' mt-5 scroll-smooth w-full container mx-auto' id="intro">
        <div className="grid justify-center m-10">
        <span className="text-red-500 dark:text-white text-2xl">
         Please go through my introduction video
        </span>
        <h4 className="text-3xl font-bold font dark:text-white mt-10 font-serif">
          Thank you for learning about me
        </h4>
      </div>
      <div className="w-full md:p-[100px] p-0">
        <YouTube videoId="VSl3gCDWRSM" opts={videoOptions}/>
      </div>

    </div>
  )
}

export default Intro
