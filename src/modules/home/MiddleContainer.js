import React from 'react';
import WorkExperience from '../../components/WorkExperience';
import FotoPerfil from '../../assets/modules/home/foto-perfil.jpeg'
import ContactCard from '../../components/ContactCard';

const MiddleContainer = () => {
    return (
        <section>
            <div className="mc-first-wrapper">
                <img alt="profile-picture" src={FotoPerfil} className="profile-pic"/>
                <h1 className="mc-first-title">About me</h1>
                <p className="mc-first-desc">I'm an aspiring software engineer studying computer science at Tec de Monterrey. The sectors I'm passionate about are software, finance and the environment.</p>
                <p className="mc-first-desc">In my free time I like reading books, watching movies, exercising and spending time with my family, dogs and friends.</p>
                <h1 className="mc-first-title">Work experience</h1>
                <WorkExperience />
            </div>
            <div className="mc-second-wrapper">

            </div>
            <div className="mc-contact-wrapper">
                <ContactCard />
            </div>
            
        </section>
    );
}

export default MiddleContainer;