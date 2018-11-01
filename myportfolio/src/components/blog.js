import React, { Component } from 'react';
import DarkCode from '../img/sample_code_dark.png';
import { Link } from 'react-router-dom';
class blog extends Component {
    render() {
        return (
            <div className="switch">
                <div className="blog-container">
                    <div className="indiv-blog-card">
                        <img className="blog-pic" src={DarkCode} alt="sample-png"/>
                        <div className="indiv-blog-entry">
                            <h2>Sample Title Blog</h2>
                            <p>Introduction Body. Here is some text to describe my blog. Isn't it a great blog?? The best???</p>
                            <Link to="/blog/:id">Read More</Link>
                        </div>
                    </div>
                    <div className="indiv-blog-card">
                        <img className="blog-pic" src={DarkCode} alt="sample-png"/>
                        <div className="indiv-blog-entry">
                            <h2>Sample Title Blog</h2>
                            <p>Introduction Body. Here is some text to describe my blog. Isn't it a great blog?? The best???</p>
                            <Link to="/blog/:id">Read More</Link>
                        </div>
                    </div>
                    <div className="indiv-blog-card">
                        <img className="blog-pic" src={DarkCode} alt="sample-png"/>
                        <div className="indiv-blog-entry">
                            <h2>Sample Title Blog</h2>
                            <p>Introduction Body. Here is some text to describe my blog. Isn't it a great blog?? The best???</p>
                            <Link to="/blog/:id">Read More</Link>
                        </div>
                    </div>
                    <div className="indiv-blog-card">
                        <img className="blog-pic" src={DarkCode} alt="sample-png"/>
                        <div className="indiv-blog-entry">
                            <h2>Sample Title Blog</h2>
                            <p>Introduction Body. Here is some text to describe my blog. Isn't it a great blog?? The best???</p>
                            <Link to="/blog/:id">Read More</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default blog;