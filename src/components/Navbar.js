import React from 'react'
import './Navbar.css'

const Header = () => {
    return (
        <nav className="navbar">
        <span className="navbar-text">
         Projects
        </span>
        
        <span className="logout-icon"><i className="fas fa-sign-out-alt "></i>&nbsp;Logout</span>
      </nav>
    )
}

export default Header
