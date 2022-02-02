import React from 'react';
import WorkExperience from '../../components/WorkExperience';
import Projects from './Projects';
import About from '../../components/About';
const MiddleContainer = () => {
    return (
        <section>
            <div id="about" className="mc-first-wrapper">
                <About />
                <h1 className="mc-first-title">Work experience</h1>
                <WorkExperience />
            </div>
            <div id="projects" className="mc-second-wrapper">
                <h1 className="mc-second-title">Projects</h1>
                <Projects />
            </div>

        </section>
    );
}

export default MiddleContainer;