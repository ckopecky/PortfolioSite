import React, { Component } from 'react';

class mobilecontact extends Component {
    render() {
        return (
            <div>
                <div className="contact-form-input">
                    <label>
                        First name
                    </label>
                    <input type="text"/>
                </div>
                <div className="contact-form-input">
                    <label>
                        Last name
                    </label>
                    <input type="text"/>
                </div>
                <div className="contact-form-input">
                    <label>
                        E-Mail Address
                    </label>
                    <input type="text"/>
                </div>
                <div>
                  
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
                    <div className="contact-form-message" >
                            <label>Message:</label>
                            <input className="message" type="textarea" />
                    </div>
                    <div action="?" method="POST">
                        <div className="g-recaptcha" data-sitekey="your_site_key"></div>
                    </div>  
                    {/* TODO: get site key for RECAPTCHA */}
                    <div className="submit-button">Submit</div>   
                </div>


            </div>
        );
    }
}

export default mobilecontact;