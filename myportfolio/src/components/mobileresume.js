import React, { Component } from 'react';

class mobileresume extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div>
                Experience Overview
                <ul>
                    <li>Project Manager and Section Lead for Lambda School</li>
                    <li>Skillset: MongoDB, Express, React, NodeJS, Django, Python, C, the UX Design Cycle...ready to learn more!</li>
                    <li>Twenty years of experience as a musician and flute teacher</li>
                    <li>Eight years of experience as non-commercial radio announcer </li>
                    <li>Master of Music Degree in Flute Performance and Bachelor of Arts Degree in Music exemplify my ability to have the tenacity to work hard, think critically, and be a team player</li>
                </ul>

                <h4>Want to learn more?</h4>
                <div className="submit-button">Download my resumé</div>
                <div className="submit-button">Contact Me</div>

            </div>
        );
    }
}

export default mobileresume;