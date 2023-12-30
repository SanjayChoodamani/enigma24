import "./styles/Menu.css";
import { useState } from "react";
import { NavLink } from 'react-router-dom';


export default function Menu() {

    const [toggle, setToggle] = useState(false);
    const handleToggleChange = () => {
        setToggle(!toggle);

    };
    if (toggle) {
        return (
            <div className="menu-open" >
                <div className="menu-list" onClick={handleToggleChange}>
                    <div className="menu">
                        <i className="fa-solid fa-xmark"></i>
                    </div>
                    <ul>
                        <NavLink to='enigma24/'><li>Home</li></NavLink>
                        <NavLink to='enigma24/Events'><li>Events</li></NavLink>
                        <NavLink to='enigma24/Workshop-Shows'><li>Workshop and Shows</li></NavLink>
                        <NavLink to='enigma24/Team'><li>Team</li></NavLink>
                        <NavLink to='enigma24/Contact'><li>Contact</li></NavLink>
                    </ul>
                </div>
            </div>
        );
    } else {
        return (
            <div className="menu" onClick={handleToggleChange}>
                <i className="fa-solid fa-bars"></i>
            </div>
        );
    }
}