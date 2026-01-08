import React from 'react'

const Header = () => {
  const resumePath = import.meta.env.BASE_URL + 'resume.pdf'
  
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-primary-600">
            Aravind Setty
          </div>
          <div className="hidden md:flex space-x-6 items-center">
            <a href="#about" className="text-gray-700 hover:text-primary-600 transition">About</a>
            <a href="#skills" className="text-gray-700 hover:text-primary-600 transition">Skills</a>
            <a href="#projects" className="text-gray-700 hover:text-primary-600 transition">Projects</a>
            <a href="#education" className="text-gray-700 hover:text-primary-600 transition">Education</a>
            <a href="#contact" className="text-gray-700 hover:text-primary-600 transition">Contact</a>
            <a 
              href={resumePath}
              download="Aravind_Setty_Resume.pdf"
              className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Resume
            </a>
          </div>
          <div className="md:hidden">
            <a 
              href={resumePath}
              download="Aravind_Setty_Resume.pdf"
              className="bg-primary-600 text-white px-3 py-2 rounded-lg hover:bg-primary-700 transition flex items-center gap-2 text-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Resume
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
