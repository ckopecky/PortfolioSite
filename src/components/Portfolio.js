import React from 'react';

class Portfolio extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        if(window.localStorage.Theme) {
            document.documentElement.setAttribute("data-theme", window.localStorage.Theme);
        }
    }

    render(){
        return (
            <div className="main-content portfolio-container">
                Plan of Attack for Portfolio<br/><br/>
                cards that display:<br/>
                <ul style={{listStyle:"disc", padding: '0px 40px'}}>
                    <li>a thumbnail image,</li> 
                    <li>link to github repo,</li> 
                    <li>link to deployed site,</li> 
                    <li>brief description</li>
                </ul> 
                
            </div>
        );
    } 
    
}

export default Portfolio;