import React from 'react'
import logo from '../../images/logo.png'
import './Footer.css'

const Footer = () => {
    return (
        <footer className='footer' id="footer" style={{ opacity: "1", transition: "opacity 750ms ease 0s" }}>
            <div className='footer-content'>
                <div className='row'>
                    <div className='row_column-1 column'>
                        <img className='footer-logo' src={logo} alt="logo" />
                    </div>
                    <div className='row_column-2 column'>
                        <h6>MENU</h6>
                        <p className='footer-text'>
                            <a className='footer-link' href='#about'>ABOUT</a><br />
                            <a className='footer-link' href='#portfolio'>PORTFOLIO</a><br />
                            <a className='footer-link' href='#services'>SERVICES</a><br />
                            <a className='footer-link' href='#contact'>CONTACT</a><br />
                        </p>
                    </div>
                    <div className='row_column-3 column'>
                        <h6>ADDRESS</h6>
                        <p className='footer-text'>
                            Suite #913<br />Corporation Building<br />Tibb Street<br />Manchester<br />M1 1TA
                        </p>
                    </div>
                    <div className='row_column-4 column'>
                        <h6>CONTACT</h6>
                        <p className='footer-text' >
                            E: info(at)youragency.com<br />T: +44 800 123 456<br />F: +44 800 123 400
                        </p>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer