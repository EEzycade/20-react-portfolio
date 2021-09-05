import React from 'react';
import projects from './projects.json';
import Project from '../Project';
import './style.css';

function Portfolio () {

    return (
        <div className="portfolio-div">
                {projects.map(project => (
                    <Project
                        key={project.key}
                        title={project.title}
                        description={project.description}
                        image={project.image}
                        deployed={project.deployed}
                        repo={project.repo}
                    />

                ))}
        </div>
    )

}

export default Portfolio;