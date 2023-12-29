import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { Home, Events, Workshop, Team, Contact } from './pages'
import './App.css'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index path='enigma24/' element={<Home />} />
        <Route path='enigma24/Events' element={<Events />} />
        <Route path='enigma24/Workshop-Shows' element={<Workshop />} />
        <Route path='enigma24/Team' element={<Team />} />
        <Route path='enigma24/Contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App