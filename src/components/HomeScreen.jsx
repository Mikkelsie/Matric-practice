import React, { useState } from 'react'
import SubjectFolder from './SubjectFolder'
import CreateFolderCard from './CreateFolderCard'
import RestoreSection from './RestoreSection'
import CreateSubjectModal from './CreateSubjectModal'

export default function HomeScreen({
  subjects,
  onHideSubject,
  onShowSubject,
  onCreateSubject,
  onDeleteSubject,
  onOpenSubject,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Separate visible and hidden subjects
  const visibleSubjects = subjects.filter((subject) => !subject.hidden)
  const hiddenSubjects = subjects.filter((subject) => subject.hidden)

  const handleCreate = (name) => {
    onCreateSubject(name)
    setIsModalOpen(false)
  }

  return (
    <div className="home-screen">
      <div className="subject-grid">
        {/* Display all visible subject folders */}
        {visibleSubjects.map((subject) => (
          <SubjectFolder
            key={subject.id}
            subject={subject}
            onHide={onHideSubject}
            onDelete={onDeleteSubject}
            onOpen={onOpenSubject}
          />
        ))}

        {/* Button to create a new custom folder */}
        <CreateFolderCard onClick={() => setIsModalOpen(true)} />
      </div>

      {/* Show hidden subjects section if any exist */}
      {hiddenSubjects.length > 0 && (
        <RestoreSection hiddenSubjects={hiddenSubjects} onRestore={onShowSubject} />
      )}

      {/* Modal for creating a new custom subject */}
      {isModalOpen && (
        <CreateSubjectModal onSubmit={handleCreate} onCancel={() => setIsModalOpen(false)} />
      )}
    </div>
  )
}
