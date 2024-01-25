import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom'
import './styles/Navbar.css'
import Menu from './Menu'

const Navbar = () => {

    const [windowSize, setWindowSize] = useState([
        window.innerWidth,
        window.innerHeight,
    ]);

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowSize([window.innerWidth, window.innerHeight]);
        };

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    return (
        <nav>
            <header className='nav-style'>
                <div className='nav-logo'>
                    <Link to="enigma24/">
                        ENIGMA'24
                    </Link>
                </div>
                {windowSize[0]<480 ? <Menu/> : 
                <div className='nav-icons'>
                    <NavLink to='enigma24/'>Home</NavLink>
                    <NavLink to='enigma24/Events'>Events</NavLink>
                    <NavLink to='enigma24/Workshop-Shows'>Workshop and Shows</NavLink>
                    <NavLink to='enigma24/Team'>Team</NavLink>
                    <NavLink to='enigma24/Contact'>Contact</NavLink>
                </div>}
                
            </header>
        </nav>
    )
}

export default Navbar