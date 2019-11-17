import React from "react";
import {
  Nav,
  NavbarBrand,
  Collapse,
  NavbarToggler,
  NavItem,
  Navbar,
  NavLink
} from "reactstrap";

import PDFDownload from "../../img/WebsiteAssets/Kopecky_Christina_Resume.pdf"
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
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
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
                            <NavLink to="/portfolio">Portfolio</NavLink>
                        </NavItem>
                        {/* <NavItem>
                            <NavLink href="/blog">Blog</NavLink>
                        </NavItem> */}
                        <NavItem>
                            <NavLink to="/contact">Contact</NavLink>
                        </NavItem>
                        <NavItem>
                            <a href={() => window.location.replace(new RegExp('resume.christinakopecky.com', 'gi'))}><i className="fas fa-external-link-alt"></i> Resume</a>
                        </NavItem>
                    </div>
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
