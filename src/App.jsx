import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
    </div>
  )
}

export default App
