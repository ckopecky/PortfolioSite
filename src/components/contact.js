import React, { Component } from 'react';

class contact extends Component {
    render() {
        return (
            <div className="switch">
                <div className="contact-container">
                <h1 className='contact-header'>Let's talk. </h1>

                        <form 
                        className='contact-form'
                        action={`https://formspree.io/kopecky12112@gmail.com`} method="POST">
                            <div className="contact-form-input">
                                <label for="name">Name:</label>
                                <input type="text" name="name"
                                className='form-blank-name-email'
                                placeholder="Enter your name - required"
                                required/>
                            </div>
                            <div className="contact-form-input">
                                <label for="email">Email:</label>
                                <input type="email" name="_replyto"
                                className='form-blank-name-email'
                                placeholder="Enter your email - required"

                                required/>
                            </div>
                            <div className="contact-form-radio">
                            <label>
                                Reason for Contact
                            </label>
                            <div className="radio-group">
                                <div className="radio-button">
                                <input className="radio-input" type="radio" name="reason" value="Employment"/><span>Employment</span></div>
                                <div className="radio-button"><input type="radio" className="radio-input" name="reason" value="General Inquiry"/><span>General Inquiry</span></div>
                                <div className="radio-button"><input type="radio" className="radio-input" name="reason" value="Flute"/><span>Flute Gigs and Teaching</span></div>
                            </div>
                        </div>
                            <div  className="contact-form-input">
                                <label for="message">Message:</label>
                                <input type="textarea" 
                                name="message"
                                className='message' required
                                placeholder="required"

                                />
                                
                            </div>

                            <input className="submit-button" type="submit" value="Send Message"/>
                        </form>
                </div>
            </div>
        );
    }
}

export default contact;