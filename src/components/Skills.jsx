import React from 'react'

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["JavaScript", "Python"]
    },
    {
      title: "Frontend Technologies",
      skills: ["HTML5", "CSS", "Bootstrap", "TailwindCSS", "React.js"]
    },
    {
      title: "Backend Technologies",
      skills: ["Node.js", "Express.js"]
    },
    {
      title: "Databases",
      skills: ["MySQL", "MongoDB", "SQL"]
    },
    {
      title: "APIs & Tools",
      skills: ["Git", "GitHub", "REST APIs", "Postman"]
    },
    {
      title: "Python Libraries",
      skills: ["NumPy", "Pandas", "Matplotlib"]
    }
  ]

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-950 transition-colors">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gradient-to-br from-primary-50 to-white dark:from-gray-900 dark:to-gray-800 rounded-lg shadow-md dark:shadow-gray-900/50 p-6 hover:shadow-lg transition-shadow border border-gray-100 dark:border-gray-800">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
