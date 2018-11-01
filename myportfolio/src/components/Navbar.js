import React, { Component } from 'react';
import { Link } from 'react-router-dom'
class Navbar extends Component {
    render() {
        return (
            <div className="navigation-bar">
                <Link className="navlink" to="/projects"><span>Projects</span></Link>
                <Link className="navlink" to="/resume"><span>Resumé</span></Link>
                <Link className="navlink" to="/contact"><span>Contact</span></Link>
                <Link className="navlink" to="/aboutme"><span>About Me</span></Link>
                <Link className="navlink" to="/blog"><span>Blog</span></Link>
            </div>
        );
    }
}

export default Navbar;