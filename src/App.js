

import './App.css';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Nav from './components/Nav';
import Project from './components/Project';
import Skill from './components/Skill';
import Foot from './components/Foot';
import Intro from './components/Intro';
import Education from './components/Education';



function App() {
  return (
    <div className="App dark:bg-slate-800">
      <Nav/>
      <Hero/>
      <Education/>
      <Project/>
      <Skill/>
      <Intro/>
      <Foot/>
    </div>
  );
}

export default App;
