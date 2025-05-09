import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './components/header.jsx'
import Header from './components/header.jsx'
import MainContent from './components/entry.jsx'
function App() {

  return (
    <>
      <div>
        < Header />
        <MainContent />
      </div>
    </>
  )
}

export default App
