import React, { Component } from 'react';

class mobileabout extends Component {

    render() {
        return (
            <div>
                <img src={this.props.profile} alt="christina profile pic" style={{ width: "100%", height: "auto"}}/>
                <br/>
                <br/>
                <p className="about-me"><strong>Hi, I'm Christina!</strong> I'm a full-stack web developer that lives in San Jose, California. I started developing at the beginning of the year in 2018 in the hopes that I can change careers! <br/>
                <br/>
                I have always been fascinated by technology in general, but it's my keen eye for detail that I was able to hone both as a professional musician and a radio announcer that has made me successful so far in this industry. <br/> 
                <br/>
                As part of Lambda School's Computer Science Academy I was able to do and learn incredible things. They gave me the opportunity to study web development for fifteen weeks, computer science for fifteen weeks and then lead a cohort for fifteen weeks as a project manager/section lead. It has been an amazing experience thus far and I will never regret the opportunity I was able to make for myself in joining this organization. 
                <br/><br/>
                My hope is to become a full-stack engineer and when I gain enough experience, to become a PM. I love interacting with designers and developers and working towards a common goal! 
                </p>
            </div>
        );
    }
}

export default mobileabout;