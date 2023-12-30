import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Overview from '../components/Overview'
import Techsandhya from '../components/Techsandhya'
import Sponsors from '../components/Sponsors'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Overview/>
      <Techsandhya/>
      <Sponsors/>
      <Footer/>
    </>


  )
}

export default Home