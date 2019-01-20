import React from 'react';

const aboutMeBio = (props) => {
    return (
        <div className="about-me-bio">
            <div className="wrapper">
                <div className="profile-picture">
                    <img className="star" src={props.profilePic} alt ="Profile Pic Christina" />
                    <p className="image-credit">Image credit: ©Layne Haley</p>
                </div>
                        
                <strong>Hi, I'm Christina!</strong> 

                <p className="bio-text">I'm a full-stack web developer that lives in San Jose, California. I started developing at the beginning of the year in 2018 in the hopes that I can change careers! 
                
                <br/><br/>I have always been fascinated by technology in general, but it's my keen eye for detail that I was able to hone both as a professional musician and a radio announcer that has made me successful so far in this industry.</p>
                        
                <p><br/>As part of Lambda School's Computer Science Academy I was able to do and learn incredible things. They gave me the opportunity to study web development for fifteen weeks, computer science for fifteen weeks and then lead a cohort for fifteen weeks as a project manager/section lead. It has been an amazing experience thus far and I will never regret the opportunity I was able to make for myself in joining this organization. 
                <br/><br/>
                My hope is to become a full-stack engineer and when I gain enough experience, to become a PM. I love interacting with designers and developers and working towards a common goal! 
                </p>                
            </div>
        </div>
                        
                
    );
};

export default aboutMeBio;