import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';
import DarkCode from '../img/sample_code_dark.png';
import ProfilePic from '../img/profilepic.jpg';
import BreakoutPic from '../img/breakout.png';
import BreakoutPic2 from '../img/breakout2.png';

class AboutMe extends Component {
    render() {
        return (
            <div className="switch">
                <div className="about-me-bio">
                    <div className="wrapper">
                        <div className="profile-picture">
                            <img className="star" src={ProfilePic} alt ="Profile Pic Christina" />
                            <p className="image-credit">Image credit: ©Layne Haley</p>
                        </div>
                        
                        <strong>Hi, I'm Christina!</strong> 

                        <p className="bio-text">I'm a full-stack web developer that lives in San Jose, California. I started developing at the beginning of the year in 2018 in the hopes that I can change careers! 
                       
                        <br/><br/>I have always been fascinated by technology in general, but it's my keen eye for detail that I was able to hone both as a professional musician and a radio announcer that has made me successful so far in this industry.</p>
                        
                        <p><br/>As part of Lambda School's Computer Science Academy I was able to do and learn incredible things. They gave me the opportunity to study web development for fifteen weeks, computer science for fifteen weeks and then lead a cohort for fifteen weeks as a project manager/section lead. It has been an amazing experience thus far and I will never regret the opportunity I was able to make for myself in joining this organization. 
                        <br/><br/>
                        My hope is to become a full-stack engineer and when I gain enough experience, to become a PM. I love interacting with designers and developers and working towards a common goal! 
                        </p>                
                    </div>
                        
                </div>
                <div className="about-me-container">
                    <h5 className="about-me-featured-header">Featured:</h5>
                    <div className="card-container">
                    <div className="card">
                    <div className="card-img-top">
                            <img className="image-project" src={BreakoutPic2} alt="cap"/>
                            <img className="image-project" src={BreakoutPic} alt="cap1"/>
                        </div>  
                        <div className="card-body">
                            <h5 className="card-title">Breakout-Clone(ish)</h5>
                            <p className="card-text">A clone of the game Breakout that was part of a Sprint Challenge I did for Lambda School. What I have here was completed in three hours.</p>
                            <Link className="submit-button" to="/projects/breakout">See project on Github</Link>
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