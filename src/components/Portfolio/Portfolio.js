import React from 'react';
import PortfolioCard from './PortfolioCard';

import { CineView, SortingHat, Breakout, GoogleClone, InstaClone, LambdaNotes } from "../../services/projectInfo";
import { CardDeck } from 'reactstrap';

class Portfolio extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            projects: [CineView, LambdaNotes, SortingHat, Breakout, GoogleClone, InstaClone]
        }
    }

    componentDidMount() {
        if(window.localStorage.Theme) {
            document.documentElement.setAttribute("data-theme", window.localStorage.Theme);
        }
    }

    render(){
        return (
            <CardDeck className="main-content">
                {this.state.projects.map(project => {
                    return(
                        <PortfolioCard key={project.github} project={project}/>
                    )
                })}
            </CardDeck>
        );
    } 
    
}

export default Portfolio;