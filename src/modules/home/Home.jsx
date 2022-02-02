import React from 'react';
import '../../assets/modules/home/Home.css'
import TopContainer from './TopContainer';
import MiddleContainer from './MiddleContainer';
import BottomContainer from './BottomContainer';

const Home = () => {
    return (
        <div>
            <TopContainer/>
            <MiddleContainer/>
            {/* <BottomContainer />  */}
        </div>
    )
}

export default Home;