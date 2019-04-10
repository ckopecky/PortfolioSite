import React from 'react';

class Contact extends React.Component {
    
    componentDidMount() {
        if(window.localStorage.Theme) {
            document.documentElement.setAttribute("data-theme", window.localStorage.Theme);
        }
    }
    
    render(){
        return (
            <div className="container">
                Plan of Attack for Contact:
    
                checkout netlify forms <br/>
                or use formspree.io to send information to me. <br/>
                > Required information: Name, Reason for Contact, Message <br/>
                > Recaptcha if not included in package <br/>
    
            </div>
        );
    }
    
};

export default Contact;