import React from 'react';
import { Link } from 'react-router-dom';
import ProfilePic from "../../img/WebsiteAssets/profilepic.jpg";
import { githubUrl, linkedInUrl } from '../../services/resourceURLS';

const Banner = () => {
    return (
        <div className="banner-container text-container">
                <div className="text-block">
                    <div className="pic-text">
                        <div className="welcome-intro">
                            <h1>Hi! I'm Christina Kopecky.</h1>
                            <p>I'm a full-stack web developer, professional flutist and flute teacher that lives in San Jose, California. I started studying Full-Stack Web Development, UX, and Computer Science in 2018 to change the focus of my career!</p>
                            <h3>Welcome!</h3>
                            <br/>
                            <div className="banner-button-container">
                                <Link to="/portfolio"><button>My Projects</button></Link>
                                <Link to="/contact"><button>Contact Me</button></Link>
                            </div>
                            <div className="career-urls">
                                <a href={githubUrl}>
                                    <i className="fab fa-github" />
                                </a>
                                <a href={linkedInUrl}>
                                    <i className="fab fa-linkedin" />
                                </a>
                            </div>

                        </div>
                        <img src={ProfilePic} alt="circle-profile"/>
                    </div>
                </div>
            </div>
    );
};

export default Banner;