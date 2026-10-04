import React, { useEffect, useState } from 'react'
import { initDB, getAllSubjects, hideSubject, showSubject, createCustomSubject, deleteCustomSubject } from './lib/db'
import Header from './components/Header'
import HomeScreen from './components/HomeScreen'
import FolderView from './components/FolderView'

export default function App() {
  const [subjects, setSubjects] = useState([])
  const [selectedSubject, setSelectedSubject] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    startUp()
  }, [])

  const startUp = async () => {
    try {
      await initDB()
      await refreshSubjects()
    } catch (error) {
      console.error('Failed to initialize app:', error)
    } finally {
      setLoading(false)
    }
  }

  const refreshSubjects = async () => {
    const allSubjects = await getAllSubjects()
    setSubjects(allSubjects)
  }

  const handleHideSubject = async (subjectId) => {
    await hideSubject(subjectId)
    await refreshSubjects()
  }

  const handleShowSubject = async (subjectId) => {
    await showSubject(subjectId)
    await refreshSubjects()
  }

  const handleCreateSubject = async (name) => {
    await createCustomSubject(name)
    await refreshSubjects()
  }

  const handleDeleteSubject = async (subjectId) => {
    await deleteCustomSubject(subjectId)
    await refreshSubjects()
  }

  if (loading) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        Loading...
      </div>
    )
  }

  return (
    <>
      <Header />
      <main className="container">
        {!selectedSubject ? (
          <HomeScreen
            subjects={subjects}
            onHideSubject={handleHideSubject}
            onShowSubject={handleShowSubject}
            onCreateSubject={handleCreateSubject}
            onDeleteSubject={handleDeleteSubject}
            onOpenSubject={setSelectedSubject}
          />
        ) : (
          <FolderView subject={selectedSubject} onBack={() => setSelectedSubject(null)} />
        )}
      </main>
    </>
  )
}
