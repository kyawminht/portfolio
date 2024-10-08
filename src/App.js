

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



function App() {
  return (
    <div className="App dark:bg-slate-800">
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
