import React from 'react';
import ProjectCard from '../../components/ProjectCard'
import ReactLogo from '../../assets/react.svg'
import PythonLogo from '../../assets/python.svg'
import FlaskLogo from '../../assets/flask.svg'
import PGLogo from '../../assets/postgresql.svg'
import DO from '../../assets/digital-ocean.svg'
import Azure from '../../assets/microsoft-azure.svg'

const Projects = () => {

    const pine_project = [[ReactLogo, 40, 40], [FlaskLogo, 40, 40], [PythonLogo, 40, 40], [PGLogo, 40, 40], [DO, 40, 40]];
    const azure_web_scraper = [[PythonLogo, 40, 40], [Azure, 40, 40]]
    return (
        <div className="projects-wrapper">
            <ProjectCard title="Pine" btn="View website" link="https://pine.mx" desc="A mobile application where people can track all of their spending, check their credit score and receive advice on how to manage their finances in a single place" icons={pine_project}/>
            <ProjectCard title="Web scraper" btn="View repository" desc="This project's objective is to scrape crypto prices from CoinMarketCap using Beautiful Soup and an Azure Function to serve an external application." link="https://github.com/AlexTorres88/azure-crypto-scraper" icons={azure_web_scraper}/>
        </div>
    );
};

export default Projects;