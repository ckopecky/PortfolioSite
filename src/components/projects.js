import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import DarkCode from '../img/sample_code_dark.png';
import LambdaDB from '../img/LDBLectureList.png';
import MobileDarkLanding from '../img/mobile-dark-landing.png';
import MobileLightLanding from '../img/mobile-light-landing.png';
import BreakOutClone from '../img/breakout.png';
import BreakOutClone2 from '../img/breakout2.png';
import SAI1 from '../img/SAI1.png';
import SAI2 from '../img/SAI2.png';
import SAI3 from '../img/SAI3.png';

class projects extends Component {
    render() {
        return (
            <div className="switch">
                <div className="about-me-container">
                    <h5 className="about-me-featured-header">Past Projects:</h5>
                    <div className="card-container">
                    <div className="card">
                    <div className="card-img-top">
                            <img className="image-project" src={BreakOutClone} alt="cap"/>
                            <img className="image-project" src={BreakOutClone2} alt="cap1"/>
                        </div>                        
                        <div className="card-body">
                            <h5 className="card-title">Breakout Clone (ish)</h5>
                            <p className="card-text">A clone of the game Breakout that was created during my time at Lambda School during a Sprint Challenge. Sprint Challenges at Lambda School are done in three hours on a Friday morning - this is the result of what I was able to do during that time. 
                            <br/>
                            <p className="card-text">Tech used: <strong className="card-text">Python3, Pygame, Pipenv</strong></p>
                            </p>
                            <Link to="/projects">See project</Link><br/>
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/ckopecky">Github Repo</a>
                        </div>

                    </div>
                    <div className="card">
                        <img className="card-img-top" src={DarkCode} alt="cap"/>
                        <div className="card-body">
                            <h5 className="card-title">Lambda Notes</h5>
                            <p className="card-text">Lambda Notes was my first full-stack app. This was a practice in creating something that was to fit to client specifications during my time at Lambda School. I learned a lot from this app and I am proud of it.<br/>
                            <br/>
                            Tech used: <strong className="card-text">MongoDB, Express, React, Node</strong></p>
                            <a href="#">See Project</a><br/>
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/ckopecky">Github Repo-frontend</a><br/>
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/ckopecky">Github Repo-backend</a>


                        </div>
                    </div>
                    <div className="card">
                    <div className="card-img-top">
                            <img className="image-project" src={SAI2} alt="cap"/>
                    </div>                        
                        <div className="card-body">
                            <h5 className="card-title">UX Sigma Alpha Iota website</h5>
                            <p className="card-text">
                            Currently serving as webmaster of the Sigma Alpha Iota San Francisco-Peninsula Alumnae Chapter. I am working on a codebase for a website, but for now I created the design of the current site using Wix. 
                            <br/>
                            <p className="card-text">Tech used: <strong className="card-text">Wix</strong></p>
                            </p><br/>
                            <a href="https://saisfalums.wixsite.com/sai-sf">See site</a><br/>
                            {/* <a target="_blank" rel="noopener noreferrer" href="https://github.com/ckopecky">Github Repo</a> */}
                        </div>

                    </div>
                    <div className="card">
                        <img className="card-img-top" src={DarkCode} alt="cap"/>
                        <div className="card-body">
                            <h5 className="card-title">Lambda Notes</h5>
                            <p className="card-text">Lambda Notes was my first full-stack app. This was a practice in creating something that was to fit to client specifications during my time at Lambda School. I learned a lot from this app and I am proud of it.<br/>
                            <br/>
                            Tech used: <strong className="card-text">MongoDB, Express, React, Node</strong></p>
                            <a href="#">See Project</a><br/>
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/ckopecky">Github Repo-frontend</a><br/>
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/ckopecky">Github Repo-backend</a>


                        </div>
                    </div>



                    </div>
                {/* TO DO: Pagination */}
            
                </div>
                
                <div className="about-me-container">
                    <h5 className="about-me-featured-header">Works-In-Progress:</h5>
                    <div className="card-container">
                    <div className="card">
                        <img className="card-img-top" src={LambdaDB} alt="cap"/>
                        <div className="card-body">
                            <h5 className="card-title">Database for Cohort Lectures at Lambda School</h5>
                            <p className="card-text">As section lead of the UX cohort, I discovered a need to have lecture videos all in one repository that students could access. This is a result of that idea. 
                            <br/>
                            Currently a work-in-progress, the idea is to be able to have students access an account profile and change their passwords if they want to. As is, we have a central account that students use to access videos - they can create an account if they would like, but there is no way to update credentials yet. <br/>
                            <br/>
                            <br/>
                            Please <Link to="/contact">contact me</Link> if you would like to see a live demo as the content of the site is private to Lambda School students and personnel. 
                            <br/>
                            <br/>
                            <p className="card-text">Tech used: <strong className="card-text">Node, React, MongoDB, Express, jsonwebtoken</strong>(for auth)</p><br/>
                            </p>
                            <a href="http://ux1lectures-lambda.netlify.com/lectures">See project</a><br/>
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/ckopecky/UX-Lectures">Github Repo-frontend</a>
                            <br/>
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/ckopecky/UX-Lectures-backend">Github Repo-backend</a>

                        </div>
                    </div>
                    <div className="card">
                        <div className="card-img-top">
                            <img className="image-project" src={MobileDarkLanding} alt="cap"/>
                            <img className="image-project" src={MobileLightLanding} alt="cap1"/>
                        </div>
                        
                        <div className="card-body">
                            <h5 className="card-title">Personal Portfolio Site</h5>
                            <p className="card-text">In my time at Lambda School, I have been privileged to be the section lead for the first UX cohort. Having no formal training in UX, I've been able to exercise some of what is being taught to students in my own personal projects. <br/>
                            <br/>
                            Pictured here are some wireframes I made up of a mobile portfolio site I have designed. Now the actual result (as you can see yourself by resizing this window) turned out a little bit different than the wireframe itself, but the overall feel is still there. </p>
                            <br/>
                            <br/>
                            <p className="card-text">Tech used: <strong className="card-text">Sketch, inVision, React, Heroku </strong>(to deploy)</p>
                            <a href="http://www.christinakopecky.com">See Project</a>(or peruse this site)<br/>
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/ckopecky/PortfolioSite">Github Repo</a>

                        </div>
                    </div>
                    </div>
                    
                </div>
            {/* TO DO: Pagination */}
   
            </div>
        );
    }
}

export default projects;