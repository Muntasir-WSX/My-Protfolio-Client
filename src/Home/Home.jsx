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
            <section id="home"><Banner /></section>
            <section id="about"><AboutMe /></section>
            <section id="skills"><MyTechnologies /></section>
            <section id="projects"><MyProjects /></section>
            <section id="education"><MyEducation /></section>
            <section id="experience"><MyExperience /></section>
            <section id="certificates"><MyCertificates /></section>
            <section id="contact"><Contact /></section>
        </div>
    );
};

export default Home;