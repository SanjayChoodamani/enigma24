import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { Home, Events, Workshop, Team, Contact } from './pages'
import './App.css'

const App = () => {
  return (
    <BrowserRouter>
      <header className='nav-style'>
        <div className='nav-logo'>
          <Link to="/">
            Enigma'24
          </Link>
        </div>
        <div className='nav-icons'>
          <Link to='/'>Home</Link>
          <Link to='/Events'>Events</Link>
          <Link to='/Workshop-Shows'>Workshop and Shows</Link>
          <Link to='/Team'>Team</Link>
          <Link to='/Contact'>Contact</Link>
        </div>
      </header>
      <main className='main-style'>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Events' element={<Events />} />
            <Route path='/Workshop-Shows' element={<Workshop />} />
            <Route path='/Team' element={<Team />} />
            <Route path='/Contact' element={<Contact />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App