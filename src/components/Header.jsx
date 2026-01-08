import React from 'react'

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-primary-600">
            Aravind Setty
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="#about" className="text-gray-700 hover:text-primary-600 transition">About</a>
            <a href="#skills" className="text-gray-700 hover:text-primary-600 transition">Skills</a>
            <a href="#projects" className="text-gray-700 hover:text-primary-600 transition">Projects</a>
            <a href="#education" className="text-gray-700 hover:text-primary-600 transition">Education</a>
            <a href="#contact" className="text-gray-700 hover:text-primary-600 transition">Contact</a>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
