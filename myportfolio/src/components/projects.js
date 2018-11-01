import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import DarkCode from '../img/sample_code_dark.png';
class projects extends Component {
    render() {
        return (
            <div className="switch">
                <div className="about-me-container">
                    <h5 className="about-me-featured-header">Past Projects:</h5>
                    <div className="card-container">
                    <div className="card">
                        <img className="card-img-top" src={DarkCode} alt="cap"/>
                        <div className="card-body">
                            <h5 className="card-title">Project No. 1</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Link to="/projects">See project</Link><br/>
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/ckopecky">Github Repo</a>
                        </div>

                    </div>
                    <div className="card">
                        <img className="card-img-top" src={DarkCode} alt="cap"/>
                        <div className="card-body">
                            <h5 className="card-title">Project No. 2</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Link to="/projects">See Project</Link><br/>
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/ckopecky">Github Repo</a>

                        </div>
                    </div>
                    </div>
                {/* TO DO: Pagination */}

                </div>
                
                <div className="about-me-container">
                    <h5 className="about-me-featured-header">Works-In-Progress:</h5>
                    <div className="card-container">
                    <div className="card">
                        <img className="card-img-top" src={DarkCode} alt="cap"/>
                        <div className="card-body">
                            <h5 className="card-title">Project No. 1</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Link to="/projects">See project</Link><br/>
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/ckopecky">Github Repo</a>

                        </div>
                    </div>
                    <div className="card">
                        <img className="card-img-top" src={DarkCode} alt="cap"/>
                        <div className="card-body">
                            <h5 className="card-title">Project No. 2</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="/projects">See Project</a><br/>
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/ckopecky">Github Repo</a>

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