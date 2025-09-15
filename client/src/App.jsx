import React from 'react'
import './App.css'
import Navbar from './components/navbar'
import Hero from './components/hero'
import About from './components/about'
import Projects from './components/projects'
import TechStack from './components/techstack'  
import Contact from './components/contact'
import Footer from './components/footer'
import { useEffect } from 'react'
import { initSmoothScrolling } from './utils/smoothScroll'

function App() {
  useEffect(() => {
    initSmoothScrolling();
  }, []);

  return (
      <div>
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <TechStack />
        <Contact />
        <Footer />
      </div>

  )
}

export default App
