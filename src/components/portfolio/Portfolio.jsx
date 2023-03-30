import React from 'react'
import img1 from '../../images/port-img1.jpg'
import img2 from '../../images/port-img2.jpeg'
import img3 from '../../images/port-img3.jpg'
import img4 from '../../images/port-img4.jpg'
import img5 from '../../images/port-img5.jpg'
import img6 from '../../images/port-img6.jpg'
import img7 from '../../images/port-img7.jpg'
import './Portfolio.css'

const Portfolio = () => {
    return (
        <section className='portfolio-section' id="portfolio">
            <div className='portfolio-section-row1'>
                <div className='portfolio-section-row1-column1 col'>
                    <h2 className='portfolio-section-h2' >Latest<br/> Creations</h2>
                    <h5 className='portfolio-section-h5' >We make beautiful things</h5>
                    <p className='portfolio-section-p-hidden'>Focus infographic venture business model canvas gamification ecosystem.
                        Business plan gamification user experience low hanging fruit twitter.
                        Metrics research &amp; development market paradigm shift growth hacking.
                    </p>
                </div>
                <div className='portfolio-section-row1-column2 col' >
                    {/* <a className="w-lightbox w-inline-block portfolio-lightbox" href="#"><div className="portfolio-hover-colour"><div className="colour"><div className="portfolio-inner"><p><span className="white">PORTFOLIO&nbsp;TITLE<br />Branding, Web Design</span></p></div></div></div><img className="portfolio-thumbnail" src="https://daks2k3a4ib2z.cloudfront.net/5527a015715879bc5767ece2/552b9102ede1286e5f007d0b_port5-small.jpg" />
                    </a> */}

                    <div className='portfolio-hover-color portfolio-section-hover'>
                        <div className='color'>
                            <div className='portfolio-inner'>
                                <p>
                                    <span className="white">PORTFOLIO&nbsp;TITLE<br />Branding, Web Design</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <img className='portfolio-img' src={img1} alt="figure1" />

                </div>
                <div className='portfolio-section-row1-column3 col' >

                    <div className='portfolio-hover-color portfolio-section-hover'>
                        <div className='color'>
                            <div className='portfolio-inner'>
                                <p>
                                    <span className="white">PORTFOLIO&nbsp;TITLE<br />Branding, Web Design</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <img className='portfolio-img' src={img2} alt="figure2" />


                </div>
                <div className='portfolio-section-row1-column4 col'>
                    <div className='portfolio-hover-color portfolio-section-hover'>
                        <div className='color'>
                            <div className='portfolio-inner'>
                                <p>
                                    <span className="white">PORTFOLIO&nbsp;TITLE<br />Branding, Web Design</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <img className='portfolio-img' src={img3} alt="figure3" />

                </div>

            </div>
            <div className='portfolio-section-row2'>
                <div className='portfolio-section-row2-column1 col'>
                    <div className='portfolio-hover-color portfolio-section-hover'>
                        <div className='color'>
                            <div className='portfolio-inner'>
                                <p>
                                    <span className="white">PORTFOLIO&nbsp;TITLE<br />Branding, Web Design</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <img className='portfolio-img' src={img4} alt="figure4" />
                </div>
                <div className='portfolio-section-row2-column2 col'>
                    <div className='portfolio-hover-color portfolio-section-hover'>
                        <div className='color'>
                            <div className='portfolio-inner'>
                                <p>
                                    <span className="white">PORTFOLIO&nbsp;TITLE<br />Branding, Web Design</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <img className='portfolio-img' src={img5} alt="figure5" />
                </div>
                <div className='portfolio-section-row2-column3 col'>
                    <div className='portfolio-hover-color portfolio-section-hover'>
                        <div className='color'>
                            <div className='portfolio-inner'>
                                <p>
                                    <span className="white">PORTFOLIO&nbsp;TITLE<br />Branding, Web Design</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <img className='portfolio-img' src={img6} alt="figure6" />
                </div>
                <div className='portfolio-section-row2-column4 col'>
                    <div className='portfolio-hover-color portfolio-section-hover'>
                        <div className='color'>
                            <div className='portfolio-inner'>
                                <p>
                                    <span className="white">PORTFOLIO&nbsp;TITLE<br />Branding, Web Design</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <img className='portfolio-img' src={img7} alt="figure7" />
                </div>
            </div>
        </section>
    )
}



export default Portfolio