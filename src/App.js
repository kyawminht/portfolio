

import './App.css';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Nav from './components/Nav';
import Project from './components/Project';
import Skill from './components/Skill';
import Foot from './components/Foot';
import Intro from './components/Intro';
import Education from './components/Education';
import Experience from './components/Experience';
import 'animate.css';
import About from './components/About';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { initGA, trackPageView, trackScrollDepth } from './analystics';
import { Helmet } from 'react-helmet-async';
function App() {

  //  // Initialize GA4 when the app loads
  //  useEffect(() => {
  //   initGA();
  //   trackPageView(window.location.pathname); // Track initial page view
  // }, []);

  //  // Scroll tracking logic
  //  useEffect(() => {
  //   const trackedPercentages = [25, 50, 75, 100]; // Track these percentages
  //   const handleScroll = () => {
  //     const scrollTop = window.scrollY;
  //     const windowHeight = window.innerHeight;
  //     const docHeight = document.documentElement.scrollHeight;
  //     const totalScrollable = docHeight - windowHeight;
  //     const scrolledPercentage = (scrollTop / totalScrollable) * 100;

  //     trackedPercentages.forEach((percentage) => {
  //       if (
  //         scrolledPercentage >= percentage &&
  //         !window[`scrolled_${percentage}`]
  //       ) {
  //         trackScrollDepth(percentage);
  //         window[`scrolled_${percentage}`] = true; // Mark as tracked
  //       }
  //     });
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <div className="App dark:bg-slate-800">
         <title>kyaw min htwe| Full-Stack Developer Portfolio</title>
        <meta 
          name="description" 
          content="Portfolio of KMH, a Full-Stack Developer specializing in React, Node.js, and modern web development. Check out my projects and skills." 
        />
        <meta 
          name="keywords" 
          content="fullstack developer, web developer, React, Node.js, JavaScript, portfolio, kyaw min htwe" 
        />
        <meta property="og:title" content="kyaw min htwe | Full-Stack Developer" />
        <meta 
          property="og:description" 
          content="Explore my projects and skills as a Full-Stack Developer." 
        />
        <meta property="og:url" content="https://kmh-myan.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://kmh-myan.vercel.app/static/media/pro.0ce4e49bd45c8ca81728.jpg" />
        <link rel="canonical" href="https://kmh-myan.vercel.app/" />

      <Nav/>
      <Hero />
      <About/>
      <Skill/>
      <Project/>
      <Experience/>
      <Education/>
      <Intro />
      <Foot/>
    </div>
  );
}

export default App;
