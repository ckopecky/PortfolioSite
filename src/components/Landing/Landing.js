import React from 'react';
import Banner from './Banner';

class Landing extends React.Component {

    componentDidMount() {
        if(window.localStorage.Theme) {
            document.documentElement.setAttribute("data-theme", window.localStorage.Theme);
        }
    }
    render(){
        return (
            <div className="main-content container-landing">
            {/* Plan of Attack for Landing Page:<br/>
                >Banner <br/>
                >My Experience <br/>
                >See Some of My Recent Work: <br/>
                >Contact Me! <br/> */}
                <Banner />
            </div>
        );
    }
};

export default Landing;