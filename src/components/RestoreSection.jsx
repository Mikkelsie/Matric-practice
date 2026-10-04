import React from 'react'

export default function RestoreSection({ hiddenSubjects, onRestore }) {
  return (
    <section className="restore-section">
      <h2>Hidden folders</h2>
      <div className="restore-list">
        {hiddenSubjects.map((subject) => (
          <div key={subject.id} className="restore-item">
            <span>{subject.name}</span>
            <button
              type="button"
              className="restore-button"
              onClick={() => onRestore(subject.id)}
            >
              Restore
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}
