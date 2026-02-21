import React from 'react';
import Banner from './Banner/Banner';
import AboutMe from './About Me/AboutMe';
import MyTechnologies from './My Technologies/MyTechnologies';
import MyProjects from './MyProjects/MyProjects';
import MyEducation from './MyEducation/MyEducation';
import MyExperience from './MyExperience/MyExperience';
import MyCertificates from './MyCertificates/MyCertificates';
import Contact from './Contact/Contact';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <MyTechnologies></MyTechnologies>
            <MyProjects></MyProjects>
            <MyEducation></MyEducation>
            <MyExperience></MyExperience>
            <MyCertificates></MyCertificates>
            <Contact></Contact>
        </div>
    );
};

export default Home;