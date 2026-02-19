import React from 'react';
import Banner from './Banner/Banner';
import AboutMe from './About Me/AboutMe';
import MyTechnologies from './My Technologies/MyTechnologies';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <MyTechnologies></MyTechnologies>
        </div>
    );
};

export default Home;