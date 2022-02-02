import React from 'react';
import WorkExperience from '../../components/WorkExperience';
import About from '../../components/About';
const AboutContainer = () => {
    return (
        <section id="about" className="mc-first-wrapper">
            <About />
            <h1 className="mc-first-title">Work experience</h1>
            <WorkExperience />
        </section>
    );
}

export default AboutContainer;