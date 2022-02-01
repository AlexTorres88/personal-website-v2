import React from 'react';
import '../assets/modules/home/Home.css'

const ProjectCard = (props) => {
    return (
        <div className="project-card">   
            <h2>{props.title}</h2>
            <p>{props.desc}</p>
            <div className="image-container">
                {props.icons.map((image) => {
                    return (
                        <img key={image} alt="technology-logo" src={image[0]} style={{height: image[1], width: image[0]}}/>
                    );
                })}
            </div>
            <a href={props.link} target="_blank" rel="noreferrer"><button>{props.btn}</button></a>
        </div>
    );
}

export default ProjectCard;