import React from 'react'
import logo from '../../images/logo.png'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='navbar-section'><div className='agency-navbar'>
            <div className='agency-navbar-logo'>
                <img src={logo} alt="logo" />
            </div>
            <div className='agency-navbar-links'>
                <p><a href="/">Home</a>
                    <a href="#header">About</a>
                    <a href="#services">Services</a>
                    <a href="#portfolio">Portfolio</a>
                    <a href="#Contact">Contact</a>
                </p>

            </div>
        </div>
        </div>
    )
}

export default Navbar