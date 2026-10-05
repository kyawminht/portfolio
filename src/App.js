import { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Skill from './components/Skill';
import Project from './components/Project';
import Experience from './components/Experience';
import Education from './components/Education';
import Intro from './components/Intro';
import Contact from './components/Contact';
import Foot from './components/Foot';

import { initGA, trackPageView, trackScrollDepth } from './analystics';

const SITE_URL = 'https://kmh-myan.vercel.app/';
const OG_IMAGE = `${SITE_URL}static/media/pro.0ce4e49bd45c8ca81728.jpg`;

function App() {
  const tracked = useRef([]);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 60,
    });
  }, []);

  useEffect(() => {
    initGA();
    trackPageView(window.location.pathname);

    const thresholds = [25, 50, 75, 100];
    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      if (total <= 0) return;
      const percent = (window.scrollY / total) * 100;

      thresholds.forEach((threshold) => {
        if (percent >= threshold && !tracked.current.includes(threshold)) {
          trackScrollDepth(threshold);
          tracked.current.push(threshold);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Helmet>
        <title>Kyaw Min Htwe | Full-Stack Developer</title>
        <meta
          name="description"
          content="Portfolio of Kyaw Min Htwe, a Full-Stack Developer specializing in React, Laravel, Node.js, and modern web development."
        />
        <meta
          name="keywords"
          content="fullstack developer, web developer, React, Laravel, Node.js, portfolio, Kyaw Min Htwe"
        />
        <link rel="canonical" href={SITE_URL} />
        <meta property="og:title" content="Kyaw Min Htwe | Full-Stack Developer" />
        <meta
          property="og:description"
          content="Explore the projects, skills and experience of Kyaw Min Htwe, a Full-Stack Developer."
        />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={OG_IMAGE} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div className="relative overflow-x-hidden">
        <Nav />
        <main>
          <Hero />
          <About />
          <Skill />
          <Project />
          <Experience />
          <Education />
          <Intro />
          <Contact />
        </main>
        <Foot />
      </div>
    </>
  );
}

export default App;
