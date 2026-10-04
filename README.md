# Matric Practice

A free, open-source web app for South African matric (Grade 12) students to practise with past exam papers.

## Features (Phase 1 ✅)

- 📚 Built-in South African matric subjects
- 🔒 Hide/restore subjects
- ✨ Create custom subject folders
- 📱 Mobile-friendly design
- 💾 All data stored locally in your browser (no server required)

## Tech Stack

- **React 18** + **Vite** for fast development
- **IndexedDB** (via `idb` library) for local data storage
- **Plain CSS** for styling
- No backend, no paid services, no AI APIs

## Getting Started

### Prerequisites

- Node.js 16+ and npm installed

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Mikkelsie/Matric-practice.git
cd Matric-practice

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

The app will start at `http://localhost:5173`.

### Testing Phase 1

1. **Load the app**: Open `http://localhost:5173` in your browser.
2. **Check the home screen**: You should see ~20 subject folders (English Home Language, Mathematics, Physical Sciences, etc.).
3. **Hide a subject**:
   - Click the **three-dot menu** (⋯) on any subject folder.
   - Click **Hide folder**.
   - Confirm the prompt.
   - The subject should move to a **"Hidden folders"** section at the bottom.
4. **Restore a subject**:
   - Scroll to the "Hidden folders" section.
   - Click **Restore** next to the hidden subject.
   - It should return to the main grid.
5. **Create a custom subject**:
   - Click the **"Create custom folder"** card (with a + icon).
   - Enter a subject name (e.g., "Technical Drawing").
   - Click **Create**.
   - The new subject should appear in the grid, marked **"Custom"**.
6. **Delete a custom subject**:
   - Click the **three-dot menu** on your custom subject.
   - Click **Delete folder**.
   - Confirm the prompt.
   - The subject should be removed.
7. **Navigate into a folder**:
   - Click any subject folder (the main card, not the menu button).
   - You should see four section cards: **Practice Tests**, **Examinations**, **Mistakes**, and **Notes**.
   - Click the **← Back** button to return to the home screen.
8. **Mobile view**:
   - Open DevTools (F12) and toggle device toolbar to test on mobile.
   - The layout should stack into a single column and remain readable.

## Development

### Build for production

```bash
npm run build
```

Output goes to `dist/`.

### Preview production build locally

```bash
npm run preview
```

## Deployment

Deploy for free on **Vercel** or **GitHub Pages**:

- **Vercel**: Connect your GitHub repo, auto-deploys on push.
- **GitHub Pages**: Run `npm run build`, commit `dist/`, enable Pages in repo settings.

## Phases

- ✅ **Phase 1**: Home screen, subject folders, hide/restore, create custom
- 📋 **Phase 2**: Exam screen with timer, source-beside-questions, typed answers (hardcoded sample)
- 📄 **Phase 3**: PDF upload, extraction, question splitting, fix-question editor
- 🎯 **Phase 4**: Marking (auto-marked MC, self-marked written)
- 🧠 **Phase 5**: Practice tests (K53 style) and notes upload
- ⚠️ **Phase 6**: Mistakes section, notes, filters, search, memorise mode

## Project Structure

```
src/
├── components/        # React components
│   ├── App.jsx       # Main app root
│   ├── Header.jsx    # App header
│   ├── HomeScreen.jsx
│   ├── SubjectFolder.jsx
│   ├── CreateFolderCard.jsx
│   ├── RestoreSection.jsx
│   ├── CreateSubjectModal.jsx
│   └── FolderView.jsx # Folder with 4 sections
├── lib/
│   └── db.js         # IndexedDB helpers
├── main.jsx          # React entry point
└── index.css         # Global styles
```

## License

MIT
