import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import AboutMe from './aboutMe'
import Projects from './projects';
import Resume from './resume';
import Blog from './blog';
import Contact from './contact';
import Footer from './footer';
import "../index.css";
class AppRouter extends Component {
    render() {
        return (
        <div>
            <Switch >
                <Route path="/projects" component={Projects}/>
                <Route path="/resume" component={Resume}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/aboutme" component={AboutMe}/>
                <Route path="/blog" component={Blog}/>

                <Route exact path="/" component={AboutMe}/>

            </Switch>
            <Footer />
        </div>
        );
    }
}

export default AppRouter;