import React from 'react';
import '../assets/WorkExperience/WorkExperience.css'
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import Card from './WorkCard';
import { Link } from 'react-router-dom';
import Konfio from '../assets/WorkExperience/konfio-logo.png'
import Kinedu from '../assets/WorkExperience/kinedu-logo.png'

const WorkExperience = () => {
    return (
        <div className="work-exp-container">
            <Card link="https://konfio.mx" company="Konfío" title=" - Software Engineer Intern" date="August 2021 - Current" desc="Currently working with React, Typescript and Flask. I create new features, refactor code and fix bugs on the account creation team." logo={Konfio} class="work-exp-item"/>
            <CircleOutlinedIcon className="circle"/>
            <Card link="https://app.kinedu.com/" company="Kinedu" title=" - Software Engineer Intern" date="February - August 2021" desc="Worked with Ruby on Rails on the backend team developing new features for the main REST API which served a web and mobile application." logo={Kinedu} class="work-exp-item"/>
            <CircleOutlinedIcon className="circle"/>
            <div>
                <Link to="/resume"><button className="btn-resume">Check out my resume</button></Link>
            </div>
        </div>
    );
};

export default WorkExperience;