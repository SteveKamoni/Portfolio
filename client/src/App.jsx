import React from 'react'
import './App.css'
import Navbar from './components/navbar'
import Hero from './components/hero'
import About from './components/about'
import Projects from './components/projects'  
function App() {

  return (
      <div>
        <Navbar />
        <Hero />
        <About />
        <Projects />
      </div>

  )
}

export default App
