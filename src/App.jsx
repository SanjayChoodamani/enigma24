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
        <Route index path='/' element={<Home />} />
        <Route path='/Events' element={<Events />} />
        <Route path='/Workshop-Shows' element={<Workshop />} />
        <Route path='/Team' element={<Team />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
      
    </BrowserRouter>
  )
}

export default App