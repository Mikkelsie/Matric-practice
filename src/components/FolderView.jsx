import React from 'react'

export default function FolderView({ subject, onBack }) {
  const sections = [
    {
      title: 'Practice Tests',
      description: 'Multi-choice questions drawn from your uploaded past exam papers and memoranda.',
    },
    {
      title: 'Examinations',
      description: 'Upload exam papers and memorandum PDFs for this subject.',
    },
    {
      title: 'Mistakes',
      description: 'Review questions you answered incorrectly and write study notes.',
    },
    {
      title: 'Notes',
      description: 'Store your revision notes and study summaries here.',
    },
  ]

  return (
    <div className="folder-view">
      <div className="folder-header-row">
        <button type="button" className="back-button" onClick={onBack}>
          ← Back
        </button>
        <h2>{subject.name}</h2>
      </div>

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
