import React from 'react'

const Education = () => {
  return (
    <div className="  sm:p-0 p-[15px]  mt-[60px] mb-[160px] scroll-smooth md:p-[30px] sm:w-[1170px] mx-auto" id="skill">
      <div className=" ">
        <p className=" text-left text-primary text-2xl dark:text-white">My Educational Journey</p>
      <div className="flex justify-start items-center">
      <p className="line bg-primary h-[5px] sm:w-[250px] sm:ml-[-340px] sm:mt-[60px]"></p>
      <h4 className=" text-left text-[50px] font-[800] dark:text-white mt-10 font-serif sm:ml-[90px]">Education & Experience</h4>
      </div>
      </div>
      
        <div className="container mx-auto text-center my-10">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-black p-6 shadow-lg rounded">
        <h4 className="text-2xl text-center text-primary mb-4">Education</h4>
        <ul className="text-left text-gray-700 list-disc list-inside">
          <li className="mb-2 text-white"><strong>Level 3 HND Diploma in Computing</strong></li>
          <li className="mb-2 text-white"><strong>Level 4 HND Diploma in Computing</strong></li>
        </ul>
      </div>
      <div className="bg-black p-6 shadow-lg rounded">
        <h4 className="text-2xl text-primary mb-4">Experience</h4>
        <ul className="text-left text-white list-disc list-inside">
          <li className="mb-2 text-white"><strong>Full Stack Junior Developer at Revelio</strong> - 2 months</li>
          <li className="mb-2"><strong>Internship Developer at Revelio</strong> - 3 months</li>
        </ul>
      </div>
    </div>
        </div>
       
    </div>
  )
}

export default Education
