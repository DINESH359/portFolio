import React from 'react';
import { Route, Routes } from "react-router-dom";

import Main from './components/heroSection/Main';
import Navbar from './components/navbar/Nav';
import Skills from './components/skills/Skills';
import Links from './components/links/Links';
import About from './components/about/About';
import  Projects  from './components/projects/Projects';
import  Experience  from './components/experience/Experience';
import  Contact  from './components/contact/Contact';


import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<>
        <Navbar />
        <Links />
        <Main />
      </>} />
      <Route path="/home" element={<>
        <Navbar />
        <Links />
        <Main />
      </>} />
      <Route path="/about" element={<>
        <Navbar />
        {/* <Links /> */}
        <About></About>
       
      </>} />
      <Route path="/projects" element={<>
        <Navbar />
        {/* <Links /> */}
        <Projects />
      </>} />
      <Route path="/skills" element={<>
        <Navbar />
        {/* <Links /> */}
        <Skills />
      </>} />
      <Route path="/experience" element={<>
        <Navbar />
        {/* <Links /> */}
       <Experience></Experience>
      </>} />
      <Route path="/contact" element={<>
        <Navbar />
        {/* <Links /> */}
        <Contact />
      </>} />
    </Routes>
  );
}

export default App;
