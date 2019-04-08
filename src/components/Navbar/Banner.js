import React from 'react';
import ProfilePic from "../../img/profilepic.jpg";

const Banner = () => {
    return (
        <div className="banner-container">
            <img src={ProfilePic} alt="Christina Kopecky Profile"/>
            <div className="text-container">
                Text container
            </div>
        </div>
    );
};

export default Banner;