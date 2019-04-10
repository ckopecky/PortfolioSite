import React from 'react';

class Resume extends React.Component {

    componentDidMount() {
            if(window.localStorage.Theme) {
                document.documentElement.setAttribute("data-theme", window.localStorage.Theme);
            }
    }
    render() {
        return(
            <div className="container">
                Plan of attack for Resume  page:

                > mark up resume and post <br/>
                > Provide ability to download resume in PDF format<br/>

            </div>
        );
    }
};

export default Resume;