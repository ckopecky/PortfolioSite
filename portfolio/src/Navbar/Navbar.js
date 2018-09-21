import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
const Navbar = () => {
    return (
        <div className="navbar-wrapper landing">
            <Link className="navlink" to="/aboutme">About Me</Link>
            <Link className="navlink" to="/contactme">Contact Me</Link>
            <Link className="navlink" to="/cmvnkresume">Resumé</Link>
            <Link className="navlink" to="/projects">Portfolio</Link>

        </div>
    );
};

export default Navbar;