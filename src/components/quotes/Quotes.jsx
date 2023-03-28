import React from 'react'
import './quotes.css'

const Quotes = () => {
    return (
        <section className='quotes-section'>
            <h2 >
                Our clients<br />love our work
            </h2>
            <h5 >
                But don’t just take our word for it...
            </h5>
            {/* <div className='quotes-section-text'>
                <div className='text1'>
                    <p>"ABC&nbsp;Agency our the best.&nbsp;Not only did they deliver my work on time, they even walked my dog when I was out of town”<br />A&nbsp;Smith – Neighbour</p>

                </div>
                <div className='text2'>
                    <p></p>

                </div>
 
            </div> */}
            <div class="quotes-section-slider ">
                <div class="quotes-section-slider-mask">
                    <div class="w-slide quote1" >
                        <p class="quote-text">
                            <em>“ABC&nbsp;Agency our the best.&nbsp;Not only did they deliver my work on time, they even walked my dog when I was out of town”</em><br />A&nbsp;Smith – Neighbour
                        </p>
                    </div>
                    {/* <div class="w-slide quote-2" >
                        <p class="quote-text">
                            <em>“I don’t like people, but I make an exception for ABC&nbsp;Agency. They’re pretty damn cool.”</em>
                            <br />Brian&nbsp;Jones, &nbsp;America Big Corporation</p>
                    </div> */}
                </div>
            </div>
        </section>
    )
}

export default Quotes