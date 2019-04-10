import React from "react";
import {
  twitterUrl,
  githubUrl,
  linkedInUrl
} from "../../services/resourceURLS";
import {
  Nav,
  NavbarBrand,
  Collapse,
  NavbarToggler,
  NavItem,
  Navbar,
  NavLink
} from "reactstrap";

import "../../css/index.css";
import DarkLightSwitch from "./DarkLightSwitch";

class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    //   console.log("toggled!", this.state)
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    // console.log(this.props, "props from nav");
    return (
        <div>
            <Navbar className="nav-bar-portfolio" expand="md">
                <NavbarBrand href="/" className="mr-auto nav-bar-brand">
                    <span className="name-slug">Christina Kopecky</span>
                    <span className="mobile-name-slug">Christina K.</span>
                </NavbarBrand>
                <NavbarToggler onClick={this.toggleNavbar} className="mr-2">
                    <i className="fas fa-bars" />
                </NavbarToggler>
                <Collapse isOpen={!this.state.collapsed} navbar>
                <Nav className="nav-bar-links" navbar>
                    <div id="collapsed-nav-link-bar" className="nav-link-bar">
                        <NavItem>
                            <NavLink href="/portfolio">Portfolio</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/resume">Resume</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/blog">Blog</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/contact">Contact</NavLink>
                        </NavItem>
                    </div>
                    <NavItem className="career-urls">
                        <NavLink href={twitterUrl}>
                            <i className="fab fa-twitter" />
                        </NavLink>
                        <NavLink href={githubUrl}>
                            <i className="fab fa-github" />
                        </NavLink>
                        <NavLink href={linkedInUrl}>
                            <i className="fab fa-linkedin" />
                        </NavLink>
                    </NavItem>
                    <NavItem className="switch-container">
                            <DarkLightSwitch
                            toggleDarkLight={this.props.toggleDarkLight}
                            buttonLabel={this.props.buttonLabel}
                            />
                    </NavItem>
                </Nav>
            </Collapse> 
        </Navbar>
    </div>
    );
    }
}

export default Navigation;
