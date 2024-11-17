import React from 'react'
import { NavLink } from 'react-router-dom'


const NavBar = () => {
  return (
    
      <ul id="nav-menu" className="nav-menu">
          <li>
              <NavLink className="nav-link" to="/#features">Features</NavLink>
          </li>
          <li>
              <NavLink className="nav-link" to="/contact">Contact</NavLink>
          </li>
      </ul>
    
  )
}

export default NavBar
