import React from 'react';
import { Link } from 'react-router-dom';
import ProfilePic from "../../img/profilepic.jpg";

const Banner = () => {
    return (
        <div className="banner-container">
            <div className="text-container">
                <div className="text-block">
                    <div className="pic-text">
                        <img src={ProfilePic} alt="circle-profile"/>
                        <div className="welcome-intro">
                            <h1><span className="carat">></span> Hi! I'm Christina Kopecky.</h1>
                            <p><span className="carat">></span> I'm a full-stack web developer, professional flutist and flute teacher that lives in San Jose, California. I started studying Full-Stack Web Development, UX, and Computer Science in 2018 with the hope that I can change the focus of my career! </p>
                            <br/>
                        </div>
                    </div>
                    <div className="across-page">
                        <p><span className="carat">></span> As part of Lambda School's Computer Science Academy I was able to do and learn incredible things. They gave me the opportunity to study web development for fifteen weeks, computer science for fifteen weeks and then lead a cohort for fifteen weeks as a project manager/section lead. Currently, I am a Teaching Assistant for an evening full-stack web cohort where I lead beginning web development guided projects twice a week.</p>
                        <br/>

                        <p><span className="carat">></span> My goal is to become a full-stack software engineer. I love interacting with designers and other engineers to work toward a common goal!</p>
                    </div>
                    <h3><span className="carat">></span> Welcome!</h3>
                    <Link to="/resume"><button>My Experience</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;