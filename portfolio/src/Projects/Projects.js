import React, { Component } from 'react';
import SAICard from '../SAICard/SAICard';
import LambdaReactNotes from '../Notes/NotesCard';
import DjangoNotes from '../Notes/DjangoNotes'
import GoogleCloneSite from '../Clones/Google';
import InstaCloneSite from '../Clones/Instagram';
import Navbar from '../Navbar/Navbar';

class Projects extends Component {
    render() {
        return (
            <div className="projects-main-container">
                <Navbar />
                <div className="projects-wrapper">
                    <div className="single-project-card">
                    <SAICard />
                    </div>
                    <div className="single-project-card">
                    <LambdaReactNotes />
                    </div>
                    <div className="single-project-card">
                    <DjangoNotes />
                    </div>
                    <div className="single-project-card">
                    <GoogleCloneSite />
                    </div>
                    <div className="single-project-card">
                    <InstaCloneSite />
                    </div>
                </div>
            </div>
        );
    }
}

export default Projects;