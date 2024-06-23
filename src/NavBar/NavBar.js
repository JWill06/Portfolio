import { NavLink }from "react-router-dom"
import './NavBar.css'
import { useState } from 'react'


    const NavBar = () => {

    const [navExpanded, setNavExpanded] = useState(false)

    const buttonDisplay = () => {

        return (
            <div className='dropdown'>
                <button className="menu-button toggle-off" onClick={() => {setNavExpanded(!navExpanded)}}><span className="material-symbols-rounded menu-button">Menu</span></button>
                <NavLink to="/" onClick={() => {setNavExpanded(!navExpanded)}} className="nav-location">HOME</NavLink>
                <NavLink to="/About" onClick={() => {setNavExpanded(!navExpanded)}} className="nav-location">ABOUT ME</NavLink>
                <NavLink to="work" onClick={() => {setNavExpanded(!navExpanded)}} className="nav-location">MY WORK</NavLink>
                <NavLink to="/contact" onClick={() => {setNavExpanded(!navExpanded)}} className="nav-location">CONTACT</NavLink>
            </div>
        )
    }

    return (
        <>
        <div className='nav'>
            <NavLink className="nav-logo" to="/"></NavLink>
            <button className="menu-button" onClick={() => {setNavExpanded(!navExpanded)}}><span className="material-symbols-rounded menu-button">Menu</span></button>
        </div>
        {navExpanded && buttonDisplay()}
        </>
    );
    }

export default NavBar