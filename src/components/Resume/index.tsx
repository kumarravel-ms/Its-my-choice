import React from 'react'
import ResumeSection from './ResumeSection'

const Resume = () => {
  const certifications = [
    { mainTitle: 'HTML & CSS Basics course', description: 'Online' },
    { mainTitle: 'C Programming Fundamentals course' },
    { mainTitle: 'Participated in College Technical Workshop' }
  ]

  const internshipTraining = [
    { mainTitle: 'Web Development Training Program', description: '1 Month' },
    { mainTitle: 'Basic Python Workshop' }
  ]

  const technicalTools = [
    { mainTitle: 'VS Code' },
    { mainTitle: 'Turbo C' },
    { mainTitle: 'GitHub', description: 'Basic' },
    { mainTitle: 'MS Word, Excel, PowerPoint' }
  ]

  const achievements = [
    { mainTitle: 'Won 2nd Prize in College Coding Competition' },
    { mainTitle: 'Active Participant in Technical Events' }
  ]

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="container">
        {/* Career Objective */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">
            Career Objective
          </h2>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 border-l-4 border-secondary">
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              To secure a challenging position in a reputed organization where I can learn new technologies 
              and improve my skills while contributing to the growth of the organization.
            </p>
          </div>
        </div>

        {/* Resume Sections Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <ResumeSection title="Certifications" items={certifications} />
          </div>
          <div>
            <ResumeSection title="Internship / Training" items={internshipTraining} />
          </div>
        </div>

        {/* Full Width Sections */}
        <div className="mt-12">
          <ResumeSection title="Technical Tools Known" items={technicalTools} />
        </div>

        <div className="mt-12">
          <ResumeSection title="Achievements" items={achievements} />
        </div>

        {/* Declaration */}
        <div className="mt-16 pt-12 border-t-2 border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold text-primary mb-6">Declaration</h3>
          <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed italic">
            I hereby declare that the above information is true to the best of my knowledge and belief.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Resume
