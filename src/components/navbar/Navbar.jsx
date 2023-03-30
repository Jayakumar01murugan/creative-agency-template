import React from 'react'
import logo from '../../images/logo.png'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='navbar-section'>
            <div className='agency-navbar'>
                <div className='agency-navbar-logo'>
                    <img src={logo} alt="logo" />
                </div>
                <div className='agency-navbar-links'>
                    <p>
                        <a href="/">Home</a>
                        <a href="#about">About</a>
                        <a href="#services">Services</a>
                        <a href="#portfolio">Portfolio</a>
                        <a href="#contact">Contact</a>
                    </p>
                </div>
                {/* <div className='hamb' ><input class="side-menu" type="checkbox" id="side-menu" />
                <label class="hamb" for="side-menu"><span class="hamb-line"></span></label>
                <nav class="nav">
                    <ul class="menu">

                        <div className='agency-navbar-links'>
                            <p><a href="/">Home</a>
                                <a href="#about">About</a>
                                <a href="#services">Services</a>
                                <a href="#portfolio">Portfolio</a>
                                <a href="#contact">Contact</a>
                            </p>

                        </div>
                    </ul>

                </nav>
            </div> */}
            </div>
        </div>
    )
}

export default Navbar