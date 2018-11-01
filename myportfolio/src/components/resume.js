import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Resume from '../img/Kopecky_Christina_Resume.pdf';
class resume extends Component {
    render() {
        return (
            <div className="switch">
                <div className="resume-container">
                    <div className="resume-button-container">
                        <div className="download-pdf"><a className="resume-link" href={Resume} target="_blank" rel="noopener noreferrer" >
                            Download PDF</a>
                        </div>
                        <div className="download-pdf">
                            <Link className="resume-link" to="./contact">Contact Me</Link>
                        </div>
                    </div>
                    <div className="resume-card">Test 123</div>

                </div>
            </div>
        );
    }
}

export default resume;