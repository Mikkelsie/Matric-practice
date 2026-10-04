import { openDB } from 'idb'

// Database constants
const DB_NAME = 'MatricPracticeDB'
const DB_VERSION = 1

// List of built-in South African matric subjects
const builtinSubjects = [
  'English Home Language',
  'English First Additional Language',
  'Afrikaans Home Language',
  'Afrikaans First Additional Language',
  'Mathematics',
  'Mathematical Literacy',
  'Physical Sciences',
  'Life Sciences',
  'Accounting',
  'Business Studies',
  'Economics',
  'Geography',
  'History',
  'Life Orientation',
  'Consumer Studies',
  'Computer Applications Technology',
  'Design',
  'Visual Arts',
  'Tourism',
  'Hospitality Studies',
]

let db = null

/**
 * Initialize the IndexedDB database.
 * Creates the 'subjects' object store on first run and populates it with built-in subjects.
 */
export async function initDB() {
  if (db) return db

  db = await openDB(DB_NAME, DB_VERSION, {
    upgrade(database) {
      // Create 'subjects' object store if it doesn't exist
      if (!database.objectStoreNames.contains('subjects')) {
        const subjectStore = database.createObjectStore('subjects', { keyPath: 'id' })
        // Create indexes for filtering
        subjectStore.createIndex('hidden', 'hidden', { unique: false })
        subjectStore.createIndex('isCustom', 'isCustom', { unique: false })

        // Populate with built-in subjects
        builtinSubjects.forEach((name, index) => {
          subjectStore.add({
            id: `builtin-${index}`,
            name,
            hidden: false,
            isCustom: false,
            createdAt: new Date().toISOString(),
          })
        })
      }
    },
  })

  return db
}

/**
 * Retrieve all subjects (visible and hidden).
 */
export async function getAllSubjects() {
  const connection = await initDB()
  return connection.getAll('subjects')
}

/**
 * Mark a subject as hidden.
 */
export async function hideSubject(subjectId) {
  const connection = await initDB()
  const subject = await connection.get('subjects', subjectId)
  if (!subject) return

  subject.hidden = true
  await connection.put('subjects', subject)
}

/**
 * Mark a subject as visible (restore from hidden).
 */
export async function showSubject(subjectId) {
  const connection = await initDB()
  const subject = await connection.get('subjects', subjectId)
  if (!subject) return

  subject.hidden = false
  await connection.put('subjects', subject)
}

/**
 * Create a new custom subject.
 */
export async function createCustomSubject(name) {
  const connection = await initDB()
  const subject = {
    id: `custom-${Date.now()}`,
    name,
    hidden: false,
    isCustom: true,
    createdAt: new Date().toISOString(),
  }

  await connection.add('subjects', subject)
  return subject
}

/**
 * Delete a custom subject (only custom subjects can be deleted).
 */
export async function deleteCustomSubject(subjectId) {
  const connection = await initDB()
  const subject = await connection.get('subjects', subjectId)
  if (!subject || !subject.isCustom) return

  await connection.delete('subjects', subjectId)
}
