

import './App.css';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Nav from './components/Nav';
import Project from './components/Project';
import Skill from './components/Skill';
import Foot from './components/Foot';
import Intro from './components/Intro';



function App() {
  return (
    <div className="App dark:bg-slate-800">
      <Nav/>
      <Hero/>
      <Project/>
      <Skill/>
      <Intro/>
      <Contact/>
      <Foot/>
    </div>
  );
}

export default App;
