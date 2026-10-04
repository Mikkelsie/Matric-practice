import React from 'react'

export default function CreateFolderCard({ onClick }) {
  return (
    <button type="button" className="create-folder-card" onClick={onClick}>
      <span className="create-folder-icon">＋</span>
      <span>Create custom folder</span>
    </button>
  )
}
