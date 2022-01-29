import React from 'react';
import '../assets/WorkExperience/WorkExperience.css'
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import InfoIconModal from './InfoIconModal';
import { Link } from 'react-router-dom';

const WorkExperience = () => {
    return (
        <div className="work-exp-container">
            <div className="work-exp-item">   
                <p className="work-exp-desc"><span><a href="https://konfio.mx" target="_">Konfío</a></span> - Software Engineer Intern</p>
                <p className="work-exp-date">August 2021 - Current</p>
                <InfoIconModal title="Konfio" body="Currently working with React, Typescript and Flask. I create new features, refactor code and fix bugs on the account creation team."/>
            </div>
            <CircleOutlinedIcon className="circle"/>
            <div className="work-exp-item">   
                <p className="work-exp-desc"><span><a href="https://app.kinedu.com/" target="_">Kinedu</a></span> - Software Engineer Intern</p>
                <p className="work-exp-date">February - August 2021</p>
                <InfoIconModal title="Kinedu" body="Worked with Ruby on Rails on the backend team developing new features for the main REST API which served a web and mobile application."/>
            </div>
            <CircleOutlinedIcon className="circle"/>
            <div>
            <Link to="/resume"><button className="btn-resume">Check out my resume</button></Link>
            </div>
        </div>
    );
};

export default WorkExperience;