import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';
import DarkCode from '../img/sample_code_dark.png';
import ProfilePic from '../img/profilepic.jpg';

class AboutMe extends Component {
    render() {
        return (
            <div className="switch">
                <div className="about-me-bio">
                    <div className="bio-top">
                        <div className="bio-text">
                            <strong>Hi, I'm Christina!</strong> 
                            <br/><br/>
                            <p>I'm a full-stack web developer that lives in San Jose, California. I started developing at the beginning of the year in 2018 in the hopes that I can change careers! <br/>
                            <br/></p>
                            <p className="p2">I have always been fascinated by technology in general, but it's my keen eye for detail that I was able to hone both as a professional musician and a radio announcer that has made me successful so far in this industry.</p> 
                        </div>
                        <div className="picture-caption">
                            <img className="profile-picture" src={ProfilePic} alt="Christina Profile"/>
                            <p className="image-credit">Image Credit: ©Layne Haley Photography</p>
                    </div>
                    </div>
                    <div className="bio-text2">
                    <br/><p>As part of Lambda School's Computer Science Academy I was able to do and learn incredible things. They gave me the opportunity to study web development for fifteen weeks, computer science for fifteen weeks and then lead a cohort for fifteen weeks as a project manager/section lead. It has been an amazing experience thus far and I will never regret the opportunity I was able to make for myself in joining this organization. 
                    <br/><br/>
                    My hope is to become a full-stack engineer and when I gain enough experience, to become a PM. I love interacting with designers and developers and working towards a common goal! 
                    </p>                
                    </div>
                </div>
                <div className="about-me-container">
                    <h5 className="about-me-featured-header">Featured:</h5>
                    <div className="card-container">
                    <div className="card">
                        <img className="card-img-top" src={DarkCode} alt="cap"/>
                        <div className="card-body">
                            <h5 className="card-title">Project No. 1</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Link to="/projects">See project</Link>
                        </div>
                    </div>
                    <div className="card">
                        <img className="card-img-top" src={DarkCode} alt="cap"/>
                        <div className="card-body">
                            <h5 className="card-title">Blog No. 1</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Link to="/projects">Read More</Link>
                        </div>
                    </div>
                    </div>
                    
                </div>
                
        </div>
        );
    }
}

export default AboutMe;