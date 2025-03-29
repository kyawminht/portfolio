import { FaBirthdayCake, FaLanguage, FaGraduationCap, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const AboutMe = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1200,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <section className="py-16 text-black sm:w-[1170px] mx-auto" id="about">
      <div className="container mx-auto px-4">
        <div className="flex justify-start items-center mb-12">
          <p className="line bg-primary h-[5px] sm:w-[250px] sm:ml-[-340px] sm:mt-[60px]"></p>
          <h4 className="text-left text-[50px] font-[800] dark:text-white mt-10 font-serif sm:ml-[90px] typing">
            About Me
          </h4>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="w-full md:w-1/2 h-[270px]" data-aos="fade-right">
            <div className="relative gradient-bg p-1 rounded-lg card-container">
              <div className="bg-white shadow-lg rounded-lg p-6 border-2 card">
                <div className="badge">
                  Profile
                </div>
                <h3 className="text-2xl font-semibold mb-4">Full Stack Developer</h3>
                <ul className="list-none space-y-2">
                  <li className="flex items-center"><FaBirthdayCake className="mr-2 text-primary" /><strong>Birthday:</strong> May 15, 1993</li>
                  <li className="flex items-center"><FaLanguage className="mr-2 text-primary" /><strong>Languages:</strong> English</li>
                  <li className="flex items-center"><FaGraduationCap className="mr-2 text-primary" /><strong>Diploma:</strong> Level 3 and Level 4 HND in Computing</li>
                  <li className="flex items-center"><FaEnvelope className="mr-2 text-primary" /><strong>Email:</strong> kyawminhtway288@gmail.com</li>
                  <li className="flex items-center"><FaMapMarkerAlt className="mr-2 text-primary" /><strong>City:</strong> Yangon, Myanmar</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 h-[270px]" >
            <div className="relative gradient-bg p-1 rounded-lg card-container">
              <div className="bg-white shadow-lg rounded-lg p-6 border-2 border-primary card">
                <div className="badge">
                  About
                </div>
                <p className="text-lg mb-4 py-10">
                  Passionate Full Stack Developer currently at Revelio. Skilled in Laravel, Nuxt.js, and Vue.js, I focus on building impactful solutions and managing projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
