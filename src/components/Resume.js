import React from 'react';
import PDF from '../img/Kopecky_Christina_Resume.pdf';
import PDFImage from '../img/PDF_24.png';

class Resume extends React.Component {

    componentDidMount() {
            if(window.localStorage.Theme) {
                document.documentElement.setAttribute("data-theme", window.localStorage.Theme);
            }
    }
    render() {
        return(
            <div className="main-content resume-container">
                <div className="download-resume">
                    <a href={PDF} download="Kopecky_Christina_Resume.pdf"><img src={PDFImage} alt="pdf-icon"/> Download a PDF of Resumé</a>
                </div>
                <div className="text-container-resume">
                    <h1>Christina M. Kopecky</h1>
                    <section className="contact-info">
                        <span><a href="http://www.github.com/ckopecky" title="Github: ckopecky" target="_blank" rel="noopener noreferrer">GitHub</a></span>{` | ` }
                        <span><a href="http://linkedin.com/in/cmvnk" title="LinkedIn:Christina Kopecky">LinkedIn</a></span>
                    </section>
                    <section className="tech-skills">
                    <span><strong>SKILLS:</strong></span> { `  `}
                    <span>HTML | CSS | JavaScript | React | MongoDB | Node | Express | Python | C</span>
                    </section>
                    <section className="recent-projects">
                        <h3>PROJECTS</h3>
                        <div className="single-project" id="cineview">
                            <h4>
                                <a href="https://cineview.netlify.com" title="CineView: Real People, Real Reviews" target="_blank" rel="noopener noreferrer">CineView</a>
                            </h4>
                            <hr/>
                            <p>An app designed to let users find reviews on movies and write those reviews if a premium subscriber</p>
                            <span><strong>{`Tech Stack: `}</strong></span><span>PostgreSQL | Express | React | Node</span>
                            <ul className="responsibilities">
                                <li>Implemented 0Auth to authenticate users.</li>
                                <li>Integrated The Movie Database (TMDB) API to retrieve and search film data from a library of over 450,000 films.</li>
                                <li>Designed landing page with user experience in mind. </li>
                            </ul>
                            <strong>{`GitHub Repo: `}</strong><a href="http://github.com/ckopecky/labs10-movie-reviews" title="Github Repo: Cineview" target="_blank" rel="noopener noreferrer">CineView on Github</a>
                    </div>
                    <div className="single-project" id="lambda-notes">
                        <h4>
                            <a href="https://notepen.netlify.com" title="Lambda Notes: Project Weeks at Lambda School" target="_blank" rel="noopener noreferrer">Lambda Notes</a>
                        </h4>        
                        <hr/>                
                        <p>An app that allows anyone to read, create, update or delete a note.</p>
                        <span><strong>{`Tech Stack: `}</strong></span><span>MongoDB | Express | React | Node</span>
                        <ul className="responsibilities">
                            <li>Followed client specifications to implement logic for client’s notes application.</li>
                        </ul>
                        <strong>{`GitHub Repo: `}</strong><a href="http://github.com/ckopecky/front-end-project-week" title="Lambda Notes: Project Weeks at Lambda School" target="_blank" rel="noopener noreferrer">Lambda Notes on Github</a>
                        <br/>
                        <strong>{`Client Mockups: `}</strong><a href="http://tinyurl.com/y32wgsxw" title="Client Mockups for Lambda Notes" target="_blank" rel="noopener noreferrer">Client Mockups on Github</a>
                    </div>
                    </section>
                    <section className="work-experience">
                        <h3>WORK EXPERIENCE</h3>
                        <div className="single-work-experience" id="teaching-assistant-lambda">
                            <div className="title-date">
                                <h5>Teaching Assistant for Evening Full Stack Web Development (WEBPT5)</h5>	 
                                <span>February 2019 - Present</span>
                            </div>
                            <a href="http://www.lambdaschool.com" title="Lambda School" target="_blank" rel="noopener noreferrer"><h6>Lambda School</h6></a>
                            <ul className="responsibilities">
                                <li>Lead guided web development projects twice a week to about a dozen students.</li>
                                <li>Facilitate standup meetings twice a week for a team of developers going through the curriculum to get a sense of their progress.</li>
                                <li>Assess student progress at frequent intervals and lead 1:1 meetings with individual students to provide feedback and evaluate student’s sprint challenges.</li>
                            </ul>
                        </div>
                        <div className="single-work-experience" id="section-lead-lambda">
                            <div className="title-date">
                                <h5>Section Lead for User Experience  (UX1)</h5>
                                <span>October 2018-February 2019</span>
                            </div>
                            <a href="http://www.lambdaschool.com" title="Lambda School" target="_blank" rel="noopener noreferrer"><h6>Lambda School</h6></a>                            <ul className="responsibilities">
                                <li>Attended and recorded all lectures for the cohort to use at a later date.</li>
                                <li>Led standup meetings for UX students every afternoon to assess progress and collect feedback about the program.</li>
                            </ul>
                        </div>
                        <div className="single-work-experience" id="flute-instructor">
                            <div className="title-date">
                                <h5>Flute Instructor</h5> 							 <span>January 2001-Present</span>
                            </div>
                            <h6>Self-Employed</h6>
                            <ul className="responsibilities">
                                <li>Gave critical ear to student performances and provided constructive criticism, encouragement  and praise when it was warranted</li>
                                <li>Planned lessons and objectives appropriate for student’s level and assigned music that would fulfill those objectives, reminiscent of AGILE method</li>
                                <li>Communicated with parents and other teachers to organize studio recitals as well as other administrative responsibilities.</li>
                            </ul>
                        </div>
                        <div className="single-work-experience" id="radio-announcer">
                            <div className="title-date">
                                <h5>Program Assistant</h5>				             <span>September 2007-May 2013</span>
                            </div>
                            <a href="http://kansaspublicradio.org/" title="Kansas Public Radio" target="_blank" rel="noopener noreferrer"><h6>Kansas Public Radio (Lawrence, KS)</h6></a>                            <ul className="responsibilities">
                                <ul><strong><span>Local host of NPR’s Weekend Edition Sunday</span></strong><span>(2007-2013)</span>
                                    <li>Prepared newscasts for broadcast</li>
                                    <li>Utilized a web-based content management system to prepare and to edit regional news headlines and classical music playlists</li>
                                </ul>
                                <ul><strong><span>Classical Music Host</span></strong><span>(2008-2011)</span>
                                    <li>Prepared, programmed and hosted classical music shows four evenings a week</li>
                                    <li>Assisted in entering new files and maintaining music library database of about 10,000 classical music CDs using Music Librarian – a content management system</li>
                                </ul>
                            </ul>
                        </div>
                    </section>
                    <section className="education">
                        <h3>EDUCATION</h3>
                        <div className="single-education-experience" id="lambda-school">
                            <a href="http://www.lambdaschool.com" title="Lambda School" target="_blank" rel="noopener noreferrer"><h5>Lambda School</h5></a>                                <ul className="responsibilities">	
                                <li>Lambda School is a 7+ month Computer Science &  Software Engineering Academy that provides an immersive (full-time, 40+ hours/week) hands-on curriculum with a focus on computer science, software engineering, and web development.
                                </li>
                            </ul>
                        </div>
                        <div className="single-education-experience" id="university-kansas">
                            <a href="http://music.ku.edu" title="The University of Kansas School of Music" target="_blank" rel="noopener noreferrer"><h5>The University of Kansas</h5></a>    
                            <ul className="responsibilities">
                                <li>Master of Music in Flute Performance</li>
                            </ul>
                        </div>
                        <div className="single-education-experience" id="southeast-mo-state">
                            <a href="https://semo.edu/music/" title="Southeast Missouri State University Dept of Music" target="_blank" rel="noopener noreferrer"><h5>Southeast Missouri State University</h5></a>                                <ul className="responsibilities">
                                <li>Bachelor of Arts with a major in Music (Flute)</li>
                                <li>Minors: Mass Communication and French</li>
                            </ul>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
};

export default Resume;