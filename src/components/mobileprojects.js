import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class mobileprojects extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <Link to={`/projects/${this.props.id1}`}><img src={this.props.img} alt="placeholder" style={{height: "auto", width: "100%", margin: "10px"}} /></Link>
                <h1>{this.props.title2}</h1>
                <Link to={`/projects/${this.props.id2}`}><img src={this.props.img2} style={{height: "auto", width: "100%", margin: "10px"}}alt="placeholder2"/></Link>
            </div>
        );
    }
}

export default mobileprojects;