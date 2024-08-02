import React, { useState } from "react";

import ContactImage from '../assets/contact1.png';

const Contact = () => {
  const [tooltipVisible, setTooltipVisible] = useState(false);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setTooltipVisible(true);
      setTimeout(() => {
        setTooltipVisible(false);
      }, 2000); // Tooltip will disappear after 2 seconds
    }, (err) => {
      console.error('Failed to copy: ', err);
    });
  };
  return (
    <div className="my-5 scroll-smooth" id="contact">
       <div className="flex flex-col sm:flex-row ">
          <div className=" sm:ml-[200px] sm:w-[8000px]">
            <div className=" bg-green-400 sm:w-[400px] h-[500px] relative z-0"></div>
            <img src={ContactImage} alt="" className=" w-[400px] h-[500px] absolute z-10  bottom-[-2216px] left-[239px]" />
          </div>

          <div className="">
             <div className="flex items-center justify-center">
                <h4 className=" text-[50px] font-[800] text-left dark:text-white mt-10 font-serif">Contact Detail</h4>
                <p className="line bg-green-400 h-[5px] sm:w-[600px] sm:mt-[60px] sm:ml-[50px]"></p>
             </div>
             <div className="flex gap-5 items-center mt-5 relative">
              <h3 className=" text-green-400 font-[800] text-[30px]">Email:</h3>
              <p  onClick={() => copyToClipboard('kyawminhtway288@gmail.com')} className="font-[500] text-[30px] cursor-pointer">kyawminhtway288@gmail.com</p>
              {tooltipVisible && (
                  <div className="absolute top-full mt-2 bg-gray-800 text-white text-sm p-2 rounded shadow-lg">
                    Email copied to clipboard!
                  </div>
                )}
             </div>

             <div className="flex gap-5 items-center mt-5">
                <h3 className="text-green-400 font-[800] text-[30px]">GitHub:</h3>
                <a 
                  href="https://github.com/kyawminht/" 
                  className="font-[500] text-[30px] hover:underline hover:underline-offset-2 hover:text-green-400" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  https://github.com/kyawminht/
                </a>
              </div>

          </div>
       </div>
    </div>
  );
};

export default Contact;
