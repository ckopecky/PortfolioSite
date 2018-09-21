import React from 'react';
import ResumeCMVNK from '../img/Resume.pdf';
import { Document, Page } from 'react-pdf';
import { Link } from 'react-router-dom';
import Typist from 'react-typist'
import TypistLoop from 'react-typist-loop'
import GithubIcon from '../img/GitHubDark.png'
import LinkedInIcon from '../img/LinkedInDark.png';
import EmailIcon from '../img/email.png';
import filePath from '../img/Resume.pdf';


class Resume extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            numPages: null,
            pageNumber: 1
        }
    }
    
    
    onDocumentLoad = ({ numPages }) => {
        this.setState({ numPages });
    }

    render() {
        
    return (
        <div className="resume-container">
            
            <Document
                file={ResumeCMVNK}
                onLoadSuccess={this.onDocumentLoad}
                className="pdf"
            >
                <Page className="page" pageNumber={this.state.pageNumber} />
                <Page className="page" pageNumber={this.state.pageNumber + 1} />
            </Document>
            {/* github icon, linkedin icon, contact me */}
            <div>
            <div className="social-media-wrapper">
                <a href="https://github.com/ckopecky" target="_blank"><img src={GithubIcon} alt="github"/></a>
                <a href="https://linkedin.com/in/cmvnk" target="_blank"><img src={LinkedInIcon} alt="linkedin"/></a>
                <Link to=""><img src={EmailIcon} alt="email"/></Link>
                
            </div>
            <Link className="download-link"
                to="route"
                onClick={(event) => { event.preventDefault(); window.open(filePath); }}>
                <TypistLoop interval={3000}>
        {[
            'Hello, I\'m Christina!',
            'Here\'s my resumé',
            'Click here to download!',
        ].map(text => <Typist key={text} startDelay={1000}>{text}</Typist>)}
      </TypistLoop>
            </Link>
            </div>
        </div>
        );
    }
}
export default Resume;