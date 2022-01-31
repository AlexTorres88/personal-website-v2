import React from 'react';
import '../assets/components/Footer.css'
import IconLink from './IconLink';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
    return (
        <footer className="footer-wrapper">
            <div className="social-links-wrapper">
                <IconLink link="https://www.linkedin.com/in/diego-alejandro-torres-cruz/" icon={<LinkedInIcon sx={{fontSize: 50, color: 'white'}}/>} />
                <IconLink link="https://www.github.com/AlexTorres88" icon={<GitHubIcon sx={{fontSize: 50, color: 'white'}}/>} />
            </div>
            <p className="footer-copyright">Alex Torres © 2022</p>
        </footer>
    );  
};

export default Footer;