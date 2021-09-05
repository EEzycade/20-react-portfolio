import React from 'react';
import './style.css';

function Resume() {
    return (
        <div id='resume-div'>

            <button id='resume-link' className='btn'><a target='_blank' href="https://docs.google.com/document/d/17NKdKEN9K5OWjYegp9vfsR6rap3oIX8Qp6nudDQTYeo/edit?usp=sharing">View my Resume</a></button>

            <section id='skills'>
                <h4>Technical Skills</h4>
                <p>Languages: JavaScript ES6+, CSS3, HTML5, SQL, NoSQL</p>
                <p>Applications: GitHub, MongoDB, MySQL</p>
                <p>Tools: Express, React, Node, Handlebars, Bootstrap</p>

            </section>

        </div>
    )
}

export default Resume;