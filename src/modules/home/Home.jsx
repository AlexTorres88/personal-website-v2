import React from 'react';
import '../../assets/modules/home/Home.css'
import TopContainer from './TopContainer';
import AboutContainer from './AboutContainer';
import ProjectsContainer from './ProjectsContainer';
import BooksContainer from './BooksContaier';
import BottomContainer from './BottomContainer';

const Home = () => {
    return (
        <div>
            <TopContainer/>
            <AboutContainer/>
            <ProjectsContainer />
            <BooksContainer />
            {/* <BottomContainer />  */}
        </div>
    )
}

export default Home;