import React from 'react'

interface ResumeSectionProps {
  title: string
  items: Array<{
    mainTitle: string
    description?: string
  }>
}

const ResumeSection: React.FC<ResumeSectionProps> = ({ title, items }) => {
  return (
    <div className="mb-8">
      <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6">
        {title}
      </h3>
      <div className="space-y-4">
        {items.map((item, index) => (
          <div key={index} className="border-l-4 border-secondary pl-6 py-2 hover:border-primary transition-colors duration-300">
            <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              {item.mainTitle}
            </h4>
            {item.description && (
              <p className="text-gray-600 dark:text-gray-400 mt-2 text-base">
                {item.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ResumeSection
