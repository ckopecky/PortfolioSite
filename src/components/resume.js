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
                    <object data={Resume} 
                    type='application/pdf' 
                    width='100%' aria-label="hello"
                    height='700px'></object>
                </div>
            </div>
        );
    }
}

export default resume;


