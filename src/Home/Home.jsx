import React from 'react';
import Banner from './Banner/Banner';
import AboutMe from './About Me/AboutMe';
import MyTechnologies from './My Technologies/MyTechnologies';
import MyProjects from './MyProjects/MyProjects';
import MyEducation from './MyEducation/MyEducation';
import MyExperience from './MyExperience/MyExperience';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <MyTechnologies></MyTechnologies>
            <MyProjects></MyProjects>
            <MyEducation></MyEducation>
            <MyExperience></MyExperience>
        </div>
    );
};

export default Home;