import React, { useState } from "react";

import ContactImage from '../assets/contact.png';

const Contact = () => {
  const [tooltipVisible, setTooltipVisible] = useState(false);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setTooltipVisible(true);
      setTimeout(() => {
        setTooltipVisible(false);
      }, 2000); 
    }, (err) => {
      console.error('Failed to copy: ', err);
    });
  };
  return (
    <div className="my-10 scroll-smooth sm:w-[1170px] md:p-[30px] mx-auto" id="contact">
    <div className="flex flex-col sm:flex-row items-center sm:items-start">
      <div className="sm:ml-[200px] w-full sm:w-auto flex justify-center sm:justify-start">
        <img src={ContactImage} alt="Contact" className="w-[300px] sm:w-[400px] h-auto sm:h-[500px]" />
      </div>
      <div className="w-full sm:w-auto mt-10 sm:mt-0">
        <div className="flex flex-col sm:flex-row md:flex-col items-center sm:mt-[100px]">
          <h4 className="text-[30px] sm:text-[50px] font-[800] text-center sm:text-left dark:text-white font-serif">Contact Detail</h4>
        </div>
        
        <div className="flex flex-col gap-2 items-center sm:items-start mt-5">
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-5 items-center sm:items-start">
            <h3 className="text-primary font-[800] text-[20px] sm:text-[30px]">Email:</h3>
            <p onClick={() => copyToClipboard('kyawminhtway288@gmail.com')} className="font-[500] text-[20px] sm:text-[30px] cursor-pointer dark:text-white">
              kyawminhtway288@gmail.com
            </p>
            {tooltipVisible && (
              <div className="absolute top-full mt-2 bg-gray-800 text-white text-sm p-2 rounded shadow-lg">
                Email copied to clipboard!
              </div>
            )}
          </div>
  
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-5 items-center sm:items-start mt-5">
            <h3 className="text-primary font-[800] text-[20px] sm:text-[30px]">GitHub:</h3>
            <a 
              href="https://github.com/kyawminht/" 
              className="font-[500] text-[20px] sm:text-[30px] hover:underline hover:underline-offset-2 hover:primary dark:text-white" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              https://github.com/kyawminht/
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default Contact;
