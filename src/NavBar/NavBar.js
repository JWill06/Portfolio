import { NavLink }from "react-router-dom"
import './NavBar.css'
import { useState } from 'react'
import home from '../images/icons8-home.gif'
import person from '../images/icons8-person.gif'
import work from '../images/icons8-work-50.png'
import contact from '../images/icons8-contact-80.png'
import { Menu } from 'lucide-react'
import { X } from 'lucide-react'


    const NavBar = () => {

    const [navExpanded, setNavExpanded] = useState(false)

    const buttonDisplay = () => {

        return (
            <div className={`dropdown ${navExpanded ? 'expanded' : ''}`}>
                <X className="menu-button-x toggle-off" onClick={() => {setNavExpanded(!navExpanded)}}/>
                <NavLink to="/" onClick={() => {setNavExpanded(!navExpanded)}} className="nav-location">
          <div className="location-container">
            <span>HOME</span>
            <img className='navIcon' alt="home" src={home} />
          </div>
        </NavLink>

        <NavLink to="/About" onClick={() => {setNavExpanded(!navExpanded)}} className="nav-location">
          <div className="location-container">
            <span>ABOUT ME</span>
            <img className='navIcon' alt='person' src={person} />
          </div>
        </NavLink>

        <NavLink to="work" onClick={() => {setNavExpanded(!navExpanded)}} className="nav-location">
          <div className="location-container">
            <span>MY WORK</span>
            <img className='navIcon' alt='work' src={work} />
          </div>
        </NavLink>

        <NavLink to="/contact" onClick={() => {setNavExpanded(!navExpanded)}} className="nav-location">
          <div className="location-container">
            <span>CONTACT</span>
            <img className='navIcon' alt='contact' src={contact} />
          </div>
        </NavLink>
      </div>
        )
    }

    return (
        <>
        <div className='nav'>
            <NavLink className="nav-logo" to="/"></NavLink>
            <Menu className="menu-button toggle-off" onClick={() => {setNavExpanded(!navExpanded)}}/>
        </div>
        {buttonDisplay()}
        </>
    );
    }

export default NavBar