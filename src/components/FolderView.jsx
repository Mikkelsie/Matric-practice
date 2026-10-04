import React from 'react'

export default function FolderView({ subject, onBack }) {
  // Define the four sections available in each subject folder
  const sections = [
    {
      title: 'Practice Tests',
      description: 'K53 style multiple-choice questions built from your exams and memos.',
    },
    {
      title: 'Examinations',
      description: 'Upload papers and memorandum PDFs for this subject.',
    },
    {
      title: 'Mistakes',
      description: 'Review missed questions and record your study notes.',
    },
    {
      title: 'Notes',
      description: 'Keep your revision notes and class summaries here.',
    },
  ]

  return (
    <div className="folder-view">
      {/* Header with back button and subject name */}
      <div className="folder-header-row">
        <button type="button" className="back-button" onClick={onBack}>
          ← Back
        </button>
        <h2>{subject.name}</h2>
      </div>

      {/* Grid of four section cards */}
      <div className="section-grid">
        {sections.map((section) => (
          <div key={section.title} className="section-card">
            <h3>{section.title}</h3>
            <p>{section.description}</p>
            <button type="button" className="primary-button small-button">
              Open
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
