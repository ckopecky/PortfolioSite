import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
const Navbar = () => {
    return (
        <div className="navbar-wrapper">
            <Link to="/aboutme">About Me</Link>
            <Link to="/contactme">Contact Me</Link>
            <Link to="/cmvnkresume">Resumé</Link>
            <Link to="/projects">Portfolio</Link>

        </div>
    );
};

export default Navbar;