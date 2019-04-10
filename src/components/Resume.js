import React from 'react';

class Resume extends React.Component {

    componentDidMount() {
            if(window.localStorage.Theme) {
                document.documentElement.setAttribute("data-theme", window.localStorage.Theme);
            }
    }
    render() {
        return(
            <div className="main-content resume-container">
                <div className="text-container">
                    <h1>Christina M. Kopecky</h1>
                    <section className="contact-info">
                        GitHub: ckopecky | 
                        LinkedIn: linkedin.com/in/cmvnk
                    </section>
                    <section className="tech-skills">
                    <h3>SKILLS</h3>
                    HTML | CSS | JavaScript | React | MongoDB | Node | Express | Python | C
                    </section>
                    <section className="recent-projects">
                    <h3>PROJECTS</h3>
                    <div>
                        <h4>CineView</h4>
                        <p>An app designed to let users find reviews on movies and write those reviews if a premium subscriber</p>
                        PostgreSQL | Express | React | Node
                        Implemented 0Auth to authenticate users.
                        Integrated The Movie Database (TMDB) API to retrieve and search film data from a library of over 450,000 films.
                        Designed landing page with user experience in mind. 
                        GitHub Repo:  http://github.com/ckopecky/labs10-movie-reviews
                    </div>
                    <div>
                        <h4>Lambda Notes</h4>
                        <p>An app that allows anyone to read, create, update or delete a note.</p>
                        MongoDB | Express | React | Node
                        Followed client specifications to implement logic for client’s notes application.
                        Github Repo: http://github.com/ckopecky/front-end-project-week
                        Client Mockups: http://tinyurl.com/y32wgsxw
                    </div>
                    </section>
                    <section className="work-experience">
                        <h3>WORK EXPERIENCE</h3>
                        <div>
                            Teaching Assistant for Evening Full Stack Web Development	 February 2019 - Present
                            Lambda School
                            Lead guided web development projects twice a week to about a dozen students.
                            Facilitate standup meetings twice a week for a team of developers going through the curriculum to get a sense of their progress. 
                            Assess student progress at frequent intervals and lead 1:1 meetings with individual students to provide feedback and evaluate student’s sprint challenges. 
                        </div>
                        <div>
                            Section Lead for User Experience  (UX1) 		   	         October 2018-February 2019
                            Lambda School
                            Attended and recorded all lectures for the cohort to use at a later date.Led standup meetings for UX students every afternoon to assess progress and collect feedback about the program.
                        </div>
                        <div>
                            Flute Instructor 							                 January 2001-Present
                            Self-employed
                            Gave critical ear to student performances and provided constructive criticism, encouragement  and praise when it was warranted
                            Planned lessons and objectives appropriate for student’s level and assigned music that would fulfill those objectives, reminiscent of AGILE method
                            Communicated with parents and other teachers to organize studio recitals as well as other administrative responsibilities. 
                        </div>
                        <div>
                            Program Assistant (2007-2013)				                 September 2007-May 2013 
                            Kansas Public Radio (Lawrence, KS)
                            Local host of NPR’s Weekend Edition Sunday (2007-2013)
                            Prepared newscasts for broadcast
                            Utilized a web-based content management system to prepare and to edit regional news headlines and classical music playlists
                            Prepared, programmed and hosted classical music shows four evenings a week (2008-2011)
                            Assisted in entering new files and maintaining music library database of about 10,000 classical music CDs using Music Librarian – a content management system (2008-2011)
                        </div>
                    </section>
                    <section className="education">
                        <h3>EDUCATION</h3>
                        <div>
                            Lambda School		
                            Lambda School is a 7+ month Computer Science & Software Engineering Academy that provides an immersive (full-time, 40+ hours/week) hands-on curriculum with a focus on computer science, software engineering, and web development.
                        </div>
                        <div>
                            University of Kansas
                            Master of Music in Flute Performance
                        </div>
                        <div>
                            Southeast MO State Univ
                            Bachelor of Arts with a major in Music (Flute)
                            Minors: Mass Communication and French
                        </div>
                    </section>
                    > Provide ability to download resume in PDF format<br/>
                </div>
            </div>
        );
    }
};

export default Resume;