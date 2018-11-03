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