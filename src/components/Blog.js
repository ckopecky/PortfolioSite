import React from 'react';

class Blog extends React.Component {

    componentDidMount() {
        if(window.localStorage.Theme) {
            document.documentElement.setAttribute("data-theme", window.localStorage.Theme);
        }
    }

    render(){
        return (
            <div className="main-content blog-container">
                ** This is not for Version 1 ** <br/>
                Plan of Attack for Blog <br />
                > Blog Name <br/>
                > Newest Blog on Top in media format (bootstrap or reactstrap) <br/>
                > Form to enter blog or update blog (bootstrap or reactstrap)<br/>
                > Ability to click on individual blog to see contents
            </div>
        );
    }
};

export default Blog;