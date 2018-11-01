import React, { Component } from 'react';

class footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: false,
        }
    }
    render() {
        return (
            <div className="footer">
                <span className="theme-selector">Theme: <span className="theme-light">light</span> | <span className="theme-dark">dark</span></span>
                <p>Copyright ©2018. All rights reserved.</p>
            </div>
        );
    }
}

export default footer;