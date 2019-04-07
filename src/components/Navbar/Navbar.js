import React from 'react';
import { twitterUrl, githubUrl, linkedInUrl } from '../../services/resourceURLS';
import { Nav, NavbarBrand, Collapse, NavbarToggler, NavItem, Navbar, NavLink } from 'reactstrap';

import '../../css/index.css';

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
                <Navbar className="nav-bar-portfolio" color="light" light expand="md">
                    <NavbarBrand href="/" className="mr-auto nav-bar-brand">
                        <span className="name-slug">Christina Kopecky</span>
                        <span className="mobile-name-slug">Christina K.</span>
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                    <Collapse isOpen={!this.state.collapsed} navbar>
                    <Nav className="nav-bar-links" navbar>
                        <div id="collapsed-nav-link-bar" className="nav-link-bar">
                            <NavItem>
                                <NavLink href="/components/">Portfolio</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/components/">Resume</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/components/">Blog</NavLink>
                            </NavItem>
                        </div>
                        <NavItem className="career-urls">
                        <NavLink href={twitterUrl}>
                            <i class="fab fa-twitter"></i></NavLink>
                        <NavLink href={githubUrl}>
                            <i class="fab fa-github"></i></NavLink>
                        <NavLink href={linkedInUrl}>
                            <i class="fab fa-linkedin"></i></NavLink>
                    </NavItem>
                    </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
      }
    }

export default Navigation;