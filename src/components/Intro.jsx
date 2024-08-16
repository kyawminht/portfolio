import React, { useEffect } from 'react';
import YouTube from 'react-youtube';
import 'aos/dist/aos.css'; 
import AOS from 'aos';

const Intro = () => {
  const videoOptions = {
    width: '100%',
    playerVars: {
      autoplay: 0,
    },
  };

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1200,
      easing: 'ease-in-out',
      once: false, 
    });
  }, []);

  return (
    <div
      className="sm:p-0 p-[15px] mt-[60px] mb-[160px] scroll-smooth w-full sm:w-[1170px] mx-auto md:p-[30px]"
      id="intro"
    >
      <div className="mt-10">
        <div className="flex justify-start items-center">
          <p
            className="line bg-primary h-[5px] sm:w-[250px] sm:ml-[-340px] sm:mt-[60px]"
            data-aos="fade-in"
            data-aos-delay="100"
          ></p>
          <h4
            className="typing text-left text-[50px] font-[800] dark:text-white mt-10 font-serif sm:ml-[90px]"
            data-aos="fade-in"
            data-aos-delay="200"
          >
            Introduction Video
          </h4>
        </div>
      </div>
      <div
        className="w-full p-0 my-5 border-8 border-primary rounded-lg shadow-lg overflow-hidden"
        data-aos="fade-in"
        data-aos-delay="300"
        style={{ maxWidth: '100%', maxHeight: 'calc(100vh - 200px)' }}
      >
        <YouTube videoId="2lLdDtH0OHc" opts={videoOptions} />
      </div>
    </div>
  );
};

export default Intro;
