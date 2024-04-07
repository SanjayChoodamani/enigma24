import './styles/Hero.css'
import ktm from '../assets/sponsors/ktm.jpg'

const Hero = () => {
    return (
        <section className='hero-design'>
            <div className='hero-bg'>
            </div>
            <div className='Hero-content'>
                
                <h2>THE MALNAD TECHNICAL CLUB PRESENTS</h2>
                <h1>ENIGMA’24</h1>
                <h3>UNLEASH THE MYSTERY OF TECHNOLOGY</h3>
                <div className='heroSponsor'>
                    <p>Powered By</p>
                    <img src={ktm} alt='ktm' />
                </div>
            </div>

        </section>
    )
}

export default Hero