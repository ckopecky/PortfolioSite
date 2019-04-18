import React, { Component } from 'react';
import { Card, Button, CardImg, CardTitle } from 'reactstrap';
class PortfolioCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            randomImage: ""
        }
    

    }
    
    componentDidMount() {
        let random = Math.floor(Math.random() * this.props.project.images.length);
        this.setState({randomImage: this.props.project.images[random]});
    }

    render() {
        return (
            <Card className="project-card">
                <CardImg src={this.state.randomImage} alt="Project-Thumbnail" />
                <CardTitle>
                    {/* Name of Application */}
                    {this.props.project.name}
                </CardTitle>
                <div className="card-text">
                    <div>{this.props.project.description}</div>
                
                    {/* Tech Stack */}
                    <div className="tech-stack">
                        <div><span>Tech Stack: </span>{this.props.project.techStack}</div>
                        <a target="_blank" rel="noopener noreferrer" href={this.props.project.github}>Github Repo</a>
                    </div>
                </div>
                    {this.props.project.deploy !== null ? 
                    <Button>
                        <a target="_blank" rel="noopener noreferrer" href={this.props.project.deploy}>Visit Site</a>
                    </Button> : <Button className="card-hidden"></Button>}
            </Card>
        );
    }
}

export default PortfolioCard;