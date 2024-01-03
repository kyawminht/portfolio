import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_qx270pj', 'template_nt63ix6', form.current, 'nJGHQk8B1oK3KBLm5')
      .then((result) => {
          console.log(result.text);
          console.log("ok, message sent")
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='mt-5 scroll-smooth' id='contact'>
      <div className="grid justify-center m-10">
        <span className=" text-white">I am avaliable to hire</span>
        <h4 className="text-3xl font-bold text-white mt-10">Hire Me</h4>
        </div>
        <section class=" bg-indigo-300 dark:bg-gray-900 rounded-lg shadow-lg mx-auto container sm:w-1/2 w-full mb-10">
  <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
     
      <form action="#" class="space-y-8" ref={form} onSubmit={sendEmail}>
          <div>
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Email</label>
              <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="example@gmail.com" name="user_email" required/>
          </div>
          <div>
              <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
              <input type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Subject...." name="subject" required/>
          </div>
          <div class="sm:col-span-2">
              <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Message</label>
              <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" name="message" placeholder="Leave a comment..."></textarea>
          </div>
          <button type="submit" class=" bg-rose-400 py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
      </form>
  </div>
</section>
      
    </div>
  )
}

export default Contact
