import React from 'react'

const Projects = () => {
  const projects = [
    {
      title: "StudentHub – Student Record Management System",
      tech: "React.js, Node.js, Express.js, MongoDB",
      description: [
        "Developed a basic full-stack application to manage student records using RESTful APIs.",
        "Implemented backend routes with Node.js and Express to perform CRUD operations.",
        "Integrated MongoDB for data storage and validated API endpoints using Postman."
      ]
    },
    {
      title: "DataLens – Data Analysis and Visualization Tool",
      tech: "Python, NumPy, Pandas, Matplotlib",
      description: [
        "Analyzed structured datasets to clean, transform, and extract meaningful insights using Python.",
        "Performed data manipulation and aggregation using Pandas and NumPy for structured analysis.",
        "Created basic visualizations using Matplotlib to represent trends and patterns in data."
      ]
    }
  ]

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-primary-50 dark:from-gray-950 dark:to-gray-900 transition-colors">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 rounded-lg shadow-lg dark:shadow-gray-900/50 p-6 hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-800">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{project.title}</h3>
              <p className="text-primary-600 dark:text-primary-400 font-medium mb-4">{project.tech}</p>
              <ul className="space-y-2">
                {project.description.map((point, pointIndex) => (
                  <li key={pointIndex} className="text-gray-700 dark:text-gray-300 flex items-start">
                    <span className="text-primary-500 dark:text-primary-400 mr-2">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
