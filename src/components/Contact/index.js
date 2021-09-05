import React from 'react';
import './style.css';

function Contact() {
    return (
        <div id='contact-div'>
            <h2>Contact Me using this form:</h2>
            <form action="https://formsubmit.co/cade.ellsworth0121@gmail.com" method="POST" id='contact-form'>
                <label htmlFor='name' className='form-label'>Name</label>
                <input type='text' id='name' name='name' className='form-control'></input><br />
                <label htmlFor='email' className='form-label'>Email</label>
                <input type='text' id='email' name='email' className='form-control'></input><br />
                <label htmlFor='message' className='form-label'>Message</label>
                <textarea type='text' id='message' name='message' className='form-control'></textarea><br />

                <button type='submit' className='btn submit-btn'>Submit</button>
            </form>
        </div>

    )
}

export default Contact;