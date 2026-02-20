import React from 'react';
import Banner from './Banner/Banner';
import AboutMe from './About Me/AboutMe';
import MyTechnologies from './My Technologies/MyTechnologies';
import MyProjects from './MyProjects/MyProjects';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <MyTechnologies></MyTechnologies>
            <MyProjects></MyProjects>
        </div>
    );
};

export default Home;