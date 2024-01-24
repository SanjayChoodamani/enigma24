import React from 'react'
import './styles/Footer.css'
import { Link, NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='foot'>
            <div className='ohter-sites'>
                <h1>
                    OTHER SITES
                </h1>
                <div className='sitesLinks'>
                    <a href='https://malnadtechnicalclub.com'>THE MALNAD TECHNICAL CLUB</a>
                    <a href='https://mcehassan.ac.in'>MALNAD COLLEGE OF ENGINEERING</a>
                </div>
            </div>
            <footer>
                <div className='contact'>
                    <div className='quickLinks'>
                        <h3>QUICK LINKS</h3>
                        <NavLink to='/enigma24/'>Home</NavLink>
                        <NavLink to='/enigma24/Events'>Events</NavLink>
                        <NavLink to='/enigma24/Workshop-Shows'>Workshop and Shows</NavLink>
                        <NavLink to='/enigma24/Team'>Team</NavLink>
                        <NavLink to='/enigma24/Contact'>Contact</NavLink>
                    </div>
                    <div className='stayTouch'>
                        <h3>STAY IN TOUCH</h3>
                        <div className='stayCard'>
                            <div className='social'>
                                <a href='https://www.instagram.com/malnad_technical_club/'>Instagram</a>
                                <a href='https://www.facebook.com/FoundationsMTC'>Facebook</a>
                                <a href='https://twitter.com/MalnadTechClub/'>Twitter</a>
                                <a href='https://www.youtube.com/@themalnadtechnicalclub'>Youtube</a>
                            </div>
                            <div className='social-icons'>
                                <a href='https://www.instagram.com/malnad_technical_club/'><i class="fa-brands fa-instagram"></i></a>
                                <a href='https://www.facebook.com/FoundationsMTC'><i class="fa-brands fa-facebook"></i></a>
                                <a href='https://twitter.com/MalnadTechClub/'><i class="fa-brands fa-x-twitter"></i></a>
                                <a href='https://www.youtube.com/@themalnadtechnicalclub'><i class="fa-brands fa-youtube"></i></a>
                            </div>
                            <div className='address'>
                                <a href='https://www.google.com/maps/place/Malnad+College+of+Engineering/@13.0237294,76.0999861,17z/data=!3m1!4b1!4m5!3m4!1s0x3ba5483386aa3ffd:0x1ffd88ffad2a1ca6!8m2!3d13.0237242!4d76.1021748?shorturl=1'>
                                    <p>No. 21 . Salagame Road</p>
                                    <p>Rangoli Halla, Hassan</p>
                                    <p>Karnataka - 573202</p>
                                </a>
                                <p><a href="mailto: mce.techclub@gmail.com">mce.techclub@gmail.com</a></p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='develop'>
                    <p><i className="fa-regular fa-copyright"></i> Enigma'24</p>
                    <p>Desinged and Developed by The Malnad Technical Club 🚀.</p>
                </div>
            </footer>
        </div>
    )
}

export default Footer