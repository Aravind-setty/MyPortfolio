import React from 'react'

const Education = () => {
  const education = [
    {
      institution: "Annamacharya Institute of Technology and Sciences",
      degree: "B.Tech in Artificial Intelligence and Data Science",
      location: "Rajampet, Andhra Pradesh",
      period: "2021 – 2025",
      details: "CGPA: 8.4"
    },
    {
      institution: "Jawahar Navodaya Vidyalaya",
      degree: "Intermediate (MBIPC)",
      location: "Kurnool, Andhra Pradesh",
      period: "2019 - 2021",
      details: "80%"
    }
  ]

  const programs = [
    {
      title: "Web Development Training Program",
      organization: "SkillDzire",
      period: "Oct 2024 – Mar 2025",
      description: "Built multiple web applications using HTML, CSS, and JavaScript as part of curriculum-based project work. Strengthened frontend fundamentals through hands-on implementation aligned with academic requirements."
    },
    {
      title: "Data Science Training Program",
      organization: "Indo Euro Synchronisation",
      period: "Apr 2023 – Oct 2023",
      description: "Gained foundational exposure to Python programming, SQL basics, and data handling concepts. Completed assignment-based learning focused on problem-solving and analytical thinking."
    }
  ]

  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900 transition-colors">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">Education & Training</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Academic Programs</h3>
            <div className="space-y-6">
              {programs.map((program, index) => (
                <div key={index} className="bg-gradient-to-r from-primary-50 to-white dark:from-gray-800 dark:to-gray-700 rounded-lg shadow-md p-6 border-l-4 border-primary-500 transition-colors">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white">{program.title}</h4>
                      <p className="text-primary-600 dark:text-primary-400 font-medium">{program.organization}</p>
                    </div>
                    <span className="text-gray-600 dark:text-gray-400 font-medium mt-2 md:mt-0">{program.period}</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">{program.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border-l-4 border-primary-500 hover:shadow-lg transition-shadow">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{edu.institution}</h4>
                  <p className="text-lg text-primary-600 dark:text-primary-400 font-medium mb-2">{edu.degree}</p>
                  <div className="flex flex-wrap gap-4 text-gray-600 dark:text-gray-400 mb-2">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {edu.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 font-medium">{edu.details}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
