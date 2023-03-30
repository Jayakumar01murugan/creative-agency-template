import React from 'react'
import './contact.css'

const Contact = () => {
    return (
        <section className='contact-section' id="contact">
            <div className='contact-row'>
                <div className='row-column1'>
                    <h2 >Write us a letter</h2>
                    <h5 >We appreciate your ideas</h5>
                    <form className='contact-form'>
                        <label className='label' htmlFor="name">Name</label>
                        <input className='input-field' type='text' placeholder='Enter your name' id='name' />
                        <label className='label' htmlFor="email">Email Address</label>
                        <input className='input-field' type='text' placeholder='Enter your email address' id='email' />
                        <label className='label' htmlFor="text">Your message</label>
                        <input className='input-field' type='text' placeholder='Example text' id='text' />
                        <input className='button-field' type='submit' value="Submit"  />

                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact