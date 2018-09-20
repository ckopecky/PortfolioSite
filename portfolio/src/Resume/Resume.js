import React from 'react';
import ResumeCMVNK from '../img/Resume.pdf';
import { Document, Page } from 'react-pdf';


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
        <div>
            <Document
                file={ResumeCMVNK}
                onLoadSuccess={this.onDocumentLoad}
                className="pdf"
            >
                <Page pageNumber={this.state.pageNumber} />
                <Page pageNumber={this.state.pageNumber + 1} />
            </Document>
            {/* github icon, linkedin icon, contact me */}
        </div>
        );
    }
}
export default Resume;