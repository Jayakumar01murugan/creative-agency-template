import React from 'react'
import './counter.css'

const Counter = () => {
    return (
        <div className='counter-section'>
            <div className='counter-section-row'>
                <div className='counter-section-column counter-section-hidden'></div>
                <div className='counter-section-column'>
                    <h2>342</h2>
                    <h5>Cups of coffee</h5>
                </div> 
                <div className='counter-section-column'>
                    <h2>756</h2>
                    <h5>Bicycle Kilometres</h5>
                </div>
                <div className='counter-section-column'>
                    <h2>419</h2>
                    <h5>Brainstorm session</h5>
                </div>
                <div className='counter-section-column'>
                    <h2>284</h2>
                    <h5>Video hours</h5>
                </div>
                <div className='counter-section-column counter-section-hidden'></div>


            </div>
        </div>
    )
}

export default Counter