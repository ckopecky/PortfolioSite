import React from 'react';
import { Link } from 'react-router-dom';
import ProfilePic from "../../img/profilepic.jpg";

const Banner = () => {
    return (
        <div className="banner-container">
            <img src={ProfilePic} alt="Christina Kopecky Profile"/>
            <div className="text-container">
                <img src={ProfilePic} alt="circle-profile"/>
                <div>
                    <h1><span className="carat">></span> Hi! I'm Christina Kopecky.</h1>
                    <p><span className="carat">></span> I'm a full-stack web developer, professional flutist and flute teacher that lives in San Jose, California. I started studying Full-Stack Web Development, UX, and Computer Science in 2018 with the hope that I can change the focus of my career! </p>
                    <br/>
                        
                    <p><span className="carat">></span> As part of Lambda School's Computer Science Academy I was able to do and learn incredible things. They gave me the opportunity to study web development for fifteen weeks, computer science for fifteen weeks and then lead a cohort for fifteen weeks as a project manager/section lead. Currently, I am a Teaching Assistant for an evening full-stack web cohort where I lead beginning web development guided projects twice a week.</p>
                    <br/>

                    <p><span className="carat">></span> My goal is to become a full-stack software engineer. I love interacting with designers and other engineers to work toward a common goal!</p>
                    <h3><span className="carat">></span> Welcome!</h3>
                    <Link to="/resume"><button>My Experience</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;