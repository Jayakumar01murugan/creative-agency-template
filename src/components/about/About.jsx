import React from 'react'
import './About.css'

const About = () => {
  return (
    <section className='about-section' id="about">
      <div className='about-section-row1 '>
        <div className='about-section-row1-column1 hidden-field'>
          <div className='about-section-image1'></div>
        </div>
        <div className='about-section-row2-column2 '>
          <div className='about-section-grey-box'>
            <h2>Creative<br />&amp;&nbsp;fresh</h2>
            <h5>Our digital agency</h5>
            <p>Focus infographic venture business model canvas gamification ecosystem.
              Business plan gamification user experience low hanging fruit twitter.
              Metrics research &amp; development market paradigm shift growth hacking
              disruptive user experience iPad social media angel investor alpha.
              Social proof lean startup alpha scrum project non-disclosure agreement.
            </p>
            <a className='button' href='#portfolio'>View Portfolio</a>
          </div>
        </div>

      </div>
      <div className='about-section-row2 '>
        <div className='about-section-row2-column1 '>
          <div className='about-section-grey-box'>
            <h2>Hip<br />&amp;&nbsp;Funky</h2>
            <h5>We try new things</h5>
            <p>Focus infographic venture business model canvas gamification ecosystem.
              Business plan gamification user experience low hanging fruit twitter.
              Metrics research &amp; development market paradigm shift growth hacking
              disruptive user experience iPad social media angel investor alpha.
              Social proof lean startup alpha scrum project non-disclosure agreement.
            </p>
            <a className='button' href='#services'>Our Services</a>
          </div>
        </div>
        <div className='about-section-row2-column2 '>
          <div className='about-section-image2'></div>
        </div>
      </div>
    </section>
  )
}

export default About