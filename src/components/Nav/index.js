import React, { useEffect } from 'react';
import './style.css';

function Nav(props) {

    useEffect(() => {
        document.title = props.currentPage;
    })

    return (
        <header>
            <div id='nav-bar'>
                <a href="#about" id='my-name'>Cade Ellsworth</a>
                <a href='#about' className='nav-btn' onClick={() => props.setCurrentPage('About')}>About</a>
                <a href='#portfolio' className='nav-btn' onClick={() => props.setCurrentPage('Portfolio')} >Portfolio</a>
                <a href='#contact' className='nav-btn' onClick={() => props.setCurrentPage('Contact')}>Contact Me</a>
                <a href='#resume' className='nav-btn' onClick={() => props.setCurrentPage('Resume')}>Resume</a>
            </div>
        </header>
    )
}

export default Nav;