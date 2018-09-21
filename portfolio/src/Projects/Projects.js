import React, { Component } from 'react';
import SAICard from '../SAICard/SAICard';
import Navbar from '../Navbar/Navbar';

class Projects extends Component {
    render() {
        return (
            <div className="projects-main-container">
                <div className="projects-wrapper">
                    <Navbar />
                    <div className="single-project-card">
                    <SAICard />
                    </div>
                </div>
            </div>
        );
    }
}

export default Projects;