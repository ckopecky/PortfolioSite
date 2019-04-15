import React, { Component } from 'react';
import { Card, Button, CardImg, CardTitle, CardText } from 'reactstrap';
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
        console.log(this.props.project, "card this props", this.state, "card state");
        return (
            <Card>
                <CardImg src={this.state.randomImage} alt="Project-Thumbnail" />
                <CardTitle>
                    {/* Name of Application */}
                    {this.props.project.name}
                </CardTitle>
                <CardText>
                    <div>{this.props.project.description}</div>
                
                    {/* Tech Stack */}
                    <div><span>Tech Stack: </span>{this.props.project.techStack}</div>
                </CardText>
                <div className="button-container">
                    <Button>
                        <a target="_blank" rel="noopener noreferrer" href={this.props.project.github}>Github Repo</a>
                    </Button>
                    {this.props.project.deploy !== null ? 
                    <Button>
                        <a target="_blank" rel="noopener noreferrer" href={this.props.project.deploy}>Deployed Site</a>
                    </Button> : <Button className="hidden"></Button>}
                    
                </div>
            </Card>
        );
    }
}

export default PortfolioCard;