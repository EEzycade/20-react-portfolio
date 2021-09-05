import React from 'react';
import '../Project/style.css';

function Project(props) {
    return (
        <section className='project-card'>
            <img src={props.image} height='200px' alt='screenshot of the deployed application'></img>
            <div>
                <h5>{props.title}</h5>
                <p>{props.description}</p>
                <p>Deployed Application: <a href={props.deployed}>{props.deployed}</a></p>
                <p>Github Repository: <a href={props.repo}>{props.repo}</a></p>
            </div>
        </section>
    )
}

export default Project;