import React, { useState } from 'react'

export default function CreateSubjectModal({ onSubmit, onCancel }) {
  const [name, setName] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = () => {
    const trimmed = name.trim()
    if (!trimmed) {
      setError('Please enter a subject name.')
      return
    }

    onSubmit(trimmed)
  }

  return (
    <div className="modal-overlay" onClick={onCancel}>
      <div className="modal" onClick={(event) => event.stopPropagation()}>
        <h3>Create custom subject</h3>
        <input
          className="modal-input"
          type="text"
          value={name}
          onChange={(event) => {
            setName(event.target.value)
            setError('')
          }}
          placeholder="Example: Computer Applications Technology"
          autoFocus
          onKeyDown={(event) => {
            if (event.key === 'Enter') handleSubmit()
          }}
        />
        {error && <p className="input-error">{error}</p>}
        <div className="modal-actions">
          <button type="button" className="secondary-button" onClick={onCancel}>
            Cancel
          </button>
          <button type="button" className="primary-button" onClick={handleSubmit}>
            Create
          </button>
        </div>
      </div>
    </div>
  )
}
