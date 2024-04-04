import Hero from '../components/Hero'
import About from '../components/About'
import Overview from '../components/Overview'
import Techsandhya from '../components/Techsandhya'
import Sponsors from '../components/Sponsors'
import Footer from '../components/Footer'
import CountDown  from '../components/CountDown'
// import Schedule from '../components/Schedule'

const Home = () => {
  return (
    <>
      <Hero />
      <CountDown/>
      <About />
      {/* <Schedule/> */}
      <Overview/>
      <Techsandhya/>
      <Sponsors/>
      <Footer/>
    </>


  )
}

export default Home