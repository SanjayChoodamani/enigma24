import { HashRouter, Route, Routes } from 'react-router-dom'
import { Home, Events, Workshop, Team, Contact, Terms, Refund } from './pages'
import './App.css'
import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop'

const App = () => {
  return (
    <HashRouter>
    <ScrollToTop/>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/events' element={<Events />} />
        <Route path='/pronite' element={<Workshop />} />
        <Route path='/team' element={<Team />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/terms' element={<Terms />} />
        <Route path='/refund' element={<Refund />} />
      </Routes>
    </HashRouter>
  )
}

export default App