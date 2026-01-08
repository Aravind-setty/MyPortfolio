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
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-primary-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
              <p className="text-primary-600 font-medium mb-4">{project.tech}</p>
              <ul className="space-y-2">
                {project.description.map((point, pointIndex) => (
                  <li key={pointIndex} className="text-gray-700 flex items-start">
                    <span className="text-primary-500 mr-2">•</span>
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
