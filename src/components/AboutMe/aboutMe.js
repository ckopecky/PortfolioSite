import React, { Component } from 'react';
import '../../index.css';
import AboutMeBio from './aboutMeBio';
import Featured from './Featured';
import ProfilePic from '../../img/profilepic.jpg';
import BreakoutPic from '../../img/breakout.png';
import BreakoutPic2 from '../../img/breakout2.png';
import HP02 from '../../img/HP02.png';
import HP01 from '../../img/HP01.png';


class AboutMe extends Component {
    render() {
        return (
            <div className="switch">
                <AboutMeBio profilePic={ProfilePic}/>
                <Featured 
                    BreakoutPic = {BreakoutPic}
                    BreakoutPic2 = {BreakoutPic2}
                    HP01={HP01}
                    HP02={HP02}
                />
                
            </div>
        );
    }
}

export default AboutMe;