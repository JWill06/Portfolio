import { NavLink }from "react-router-dom"
import './NavBar.css'
import { useState } from 'react'
import hamburger from '../images/icons8-menu.svg'
import home from '../images/icons8-home.gif'
import person from '../images/icons8-person.gif'
import work from '../images/icons8-work-50.png'
import contact from '../images/icons8-contact-80.png'


    const NavBar = () => {

    const [navExpanded, setNavExpanded] = useState(false)

    const buttonDisplay = () => {

        return (
            <div className='dropdown'>
                <button className="menu-button toggle-off" onClick={() => {setNavExpanded(!navExpanded)}}><img alt='menu'src={hamburger}/></button>
                <NavLink to="/" onClick={() => {setNavExpanded(!navExpanded)}} className="nav-location">HOME <img className='navIcon' alt="home" src={home} /></NavLink>
                <NavLink to="/About" onClick={() => {setNavExpanded(!navExpanded)}} className="nav-location">ABOUT ME <img className='navIcon' alt='person'src={person} /></NavLink>
                <NavLink to="work" onClick={() => {setNavExpanded(!navExpanded)}} className="nav-location">MY WORK <img className='navIcon' alt='work'src={work} /></NavLink>
                <NavLink to="/contact" onClick={() => {setNavExpanded(!navExpanded)}} className="nav-location">CONTACT <img className='navIcon' alt='contact'src={contact} /></NavLink>
            </div>
        )
    }

    return (
        <>
        <div className='nav'>
            <NavLink className="nav-logo" to="/"></NavLink>
            <button className="menu-button" onClick={() => {setNavExpanded(!navExpanded)}}><img alt='menu'src={hamburger}/></button>
        </div>
        {navExpanded && buttonDisplay()}
        </>
    );
    }

export default NavBar