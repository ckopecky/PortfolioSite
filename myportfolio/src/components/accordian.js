import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
class accordian extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            open: true
        };
    }

    render() {
        return (
            <div>
                <Panel id="collapsible-panel-example-2" defaultExpanded>
                    <Panel.Heading>
                    <Panel.Title className="mobile-nav" toggle>
                        <p className="mobile-nav-title">{this.props.title}</p>
                    </Panel.Title>
                    </Panel.Heading>
                    <Panel.Collapse>
                        <Panel.Body>
                            Anim pariatur cliche reprehenderit, enim eiusmod high life
                            accusamus terry richardson ad squid. Nihil anim keffiyeh
                            helvetica, craft beer labore wes anderson cred nesciunt sapiente
                            ea proident.
                        </Panel.Body>
                    </Panel.Collapse>
                </Panel>
            </div>
        )
    }
}

export default accordian;