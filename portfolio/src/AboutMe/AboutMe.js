import React from 'react';
import ProfilePic from '../img/profilepic.jpg';

import Navbar from '../Navbar/Navbar';
const AboutMe = () => {
    return (
        <div className="main-container">
        <div className="aboutme-main">
        
            <Navbar />
            <div className="aboutme-container">
                <img className="profile-pic" src={ProfilePic} alt="profile"/>
                <div className="biography"><p><strong><h1>Hello There!</h1></strong> My name is Christina Kopecky. I am a full-stack web developer, flutist and flute teacher based in San Jose, California.</p>
                <p>Ever since I was little I have loved to discover how things work. Curiosity has translated well into becoming first a musician and teacher, and then into becoming a web developer. </p>
                <p> Please peruse the site to take a look at my projects, to listen to some of my work, or to contact me! I would love to hear feedback from you!</p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default AboutMe;