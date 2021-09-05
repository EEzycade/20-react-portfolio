import React from 'react';
import './style.css';
import headshot from '../../images/headshotv2.jpeg';

function About() {
    return (
        <div className='container about-container'>
            <div className='row'>

                <div className='col-6'>
                    <img src={headshot} height='300px' alt='Cade Ellsworth in his backyard, looking at the camera'></img>
                </div>

                <div className='col-6'>
                    <p className='bio'>Hello! My name is Cade Ellsworth and I’m a 
                    full-stack web developer. I recently graduated from Trilogy 
                    Education’s bootcamp at the University of Arizona and received 
                    my certificate. There are three things I enjoy that make me an 
                    excellent fit as a developer. One, I love to create things. I 
                    like to bring things from my imagination to life, whether that’s 
                    with my 3D printer or designing logos. Two, I love to solve problems. 
                    My childhood obsession with LEGO helped me develop the mind of an 
                    engineer. Tackling a difficult problem and coming up with a solution 
                    gives me a feeling of accomplishment  and a desire to seek out other 
                    problems. Three, I’ve always loved computers. Before I became a 
                    developer, hopping on Google to find a fix to an issue was second 
                    nature. On a computer, the boundaries for creation and learning are 
                    limitless. Web development combines these three things for me. It 
                    offers me a chance to build whatever I want, solve problems on a 
                    daily basis, and play with computers. I love being a web developer! </p>
                </div>

            </div>
        </div>
    )
}

export default About;