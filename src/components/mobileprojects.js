import React, { Component } from 'react';


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
                <img src={this.props.img} alt="placeholder" style={{height: "300px", width: "80%", margin: "10px"}} />
                <h1>{this.props.title2}</h1>
                <img src={this.props.img2} style={{height: "300px", width: "90%"}}alt="placeholder2"/>
            </div>
        );
    }
}

export default mobileprojects;