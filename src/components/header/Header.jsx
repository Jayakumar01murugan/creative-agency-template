import React from 'react'
import slider1 from '../../images/slider1.jpg';
import slider2 from '../../images/slider2.jpeg';
import slider3 from '../../images/slider3.jpg';
import './header.css'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';



const Header = () => {
  return (
    <header className='header-section'>
      <Slide>
        <div className="each-slide-effect">
          <div style={{ 'backgroundImage': `url(${slider1})` }}>
            <div className='container'>
              <h1>We can change <br /> our digital world</h1>
              <h4>Bold enough to blow a hole in your next marketing campaign.</h4>
            </div>
          </div>
        </div>
        <div className="each-slide-effect">
          <div style={{ 'backgroundImage': `url(${slider2})` }}>
            <div className='container'>
              <h1>You need<br />a good partner</h1>
              <h4>Let us help you realise your true potential</h4>
            </div>
          </div>
        </div>
        <div className="each-slide-effect">
          <div style={{ 'backgroundImage': `url(${slider3})` }}>
            <div className='container'>
              <h1>Shoot for<br />the hoop!</h1>
              <h4>Aiming low is not an option for us</h4>
            </div>
          </div>
        </div>
      </Slide>
    </header>

  )
}

export default Header