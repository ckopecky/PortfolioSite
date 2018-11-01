import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
import Mobileprojects from './mobileprojects';
import Mobileresume from './mobileresume';
import Mobilecontact from './mobilecontact';
import MobileAbout from './mobileabout';
import LambdaNotesImg from '../img/sample_code_light.png';
import ChristinaProfilePic from '../img/profilepic.jpg';
// import '../index.css';

class accordion extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            open: true
        };
    }

    render() {
        return (
            <div className="accordion">
                
                <Panel id="collapsible-panel-example-2" onClick={() => this.setState({ open: !this.state.open })}>
                    <Panel.Heading>
                    <Panel.Title className="mobile-nav" toggle>
                        <p className="mobile-nav-title">Projects</p>
                    </Panel.Title>
                    </Panel.Heading>
                    <Panel.Collapse>
                        <Panel.Body className="panel-body">
                            <Mobileprojects title = "Lambda Notes" img={LambdaNotesImg} title2="Portfolio" img2={LambdaNotesImg}/>
                        </Panel.Body>
                    </Panel.Collapse>
                    </Panel>
                    <Panel id="collapsible-panel-example-2" onClick={() => this.setState({ open: !this.state.open })}>
                    <Panel.Heading>
                    <Panel.Title className="mobile-nav" toggle>
                        <p className="mobile-nav-title">Resumé</p>
                    </Panel.Title>
                    </Panel.Heading>
                    <Panel.Collapse>
                        <Panel.Body className="panel-body">
                            <Mobileresume />
                        </Panel.Body>
                    </Panel.Collapse>
                    </Panel>
                    <Panel id="collapsible-panel-example-2" onClick={() => this.setState({ open: !this.state.open })}>
                    <Panel.Heading>
                    <Panel.Title className="mobile-nav" toggle>
                        <p className="mobile-nav-title">Contact</p>
                    </Panel.Title>
                    </Panel.Heading>
                    <Panel.Collapse>
                        <Panel.Body className="panel-body" collapsible>
                            <Mobilecontact />
                        </Panel.Body>
                    </Panel.Collapse>
                    </Panel>
                    <Panel id="collapsible-panel-example-2" defaultExpanded>
                    <Panel.Heading>
                    <Panel.Title className="">
                        <p className="mobile-nav-title">About Me</p>
                    </Panel.Title>
                    </Panel.Heading>
                    <Panel.Collapse>
                        <Panel.Body className="panel-body">
                            <MobileAbout profile={ChristinaProfilePic}/>
                        </Panel.Body>
                    </Panel.Collapse>
                </Panel>
            </div>
        )
    }
}

export default accordion;