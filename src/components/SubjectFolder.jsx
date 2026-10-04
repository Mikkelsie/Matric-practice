import React, { useState } from 'react'

export default function SubjectFolder({ subject, onHide, onDelete, onOpen }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleHide = (event) => {
    event.stopPropagation()
    const confirmed = window.confirm(`Hide ${subject.name}? You can restore it later.`)
    if (confirmed) {
      onHide(subject.id)
      setMenuOpen(false)
    }
  }

  const handleDelete = (event) => {
    event.stopPropagation()
    const confirmed = window.confirm(`Delete ${subject.name}? This removes the custom folder.`)
    if (confirmed) {
      onDelete(subject.id)
      setMenuOpen(false)
    }
  }

  return (
    <div className="subject-folder" onClick={() => onOpen(subject)}>
      {/* Menu button (three dots) */}
      <button
        className="folder-menu"
        type="button"
        aria-label={`Open menu for ${subject.name}`}
        onClick={(event) => {
          event.stopPropagation()
          setMenuOpen((current) => !current)
        }}
      >
        ⋯
      </button>

      {/* Folder header with name and tag */}
      <div className="folder-header">
        <h3>{subject.name}</h3>
        <span className="folder-tag">{subject.isCustom ? 'Custom' : 'Built-in'}</span>
      </div>

      {/* Folder statistics (placeholder for Phase 2+) */}
      <div className="folder-stats">
        <div>
          <strong>0</strong>
          <span>Practice</span>
        </div>
        <div>
          <strong>0</strong>
          <span>Exams</span>
        </div>
        <div>
          <strong>0</strong>
          <span>Mistakes</span>
        </div>
        <div>
          <strong>0</strong>
          <span>Notes</span>
        </div>
      </div>

      {/* Dropdown menu */}
      {menuOpen && (
        <div className="folder-menu-box" onClick={(event) => event.stopPropagation()}>
          <button type="button" onClick={handleHide}>
            Hide folder
          </button>
          {subject.isCustom && (
            <button type="button" className="danger" onClick={handleDelete}>
              Delete folder
            </button>
          )}
        </div>
      )}
    </div>
  )
}
