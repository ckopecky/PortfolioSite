import React, { Component } from 'react';
import './css/index.css';
import { Route, Switch } from 'react-router-dom'
import Navigation from './components/Navbar/Navbar';
import Landing from './components/Landing';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      day: false,
      buttonLabel: 'Light Mode'
    }
    this.toggleDarkLight = this.toggleDarkLight.bind(this);
  }

  toggleDarkLight(){
    if(this.state.day === true && this.state.buttonLabel === "Dark Mode") {
      this.setState({day: false, buttonLabel: 'Light Mode'});
    }
    else if(this.state.day === false && this.state.buttonLabel === "Light Mode"){
      this.setState({day: true, buttonLabel: 'Dark Mode'})
    }
  }

  render() {
    // console.log(this.state, 'state')
    return (
      <div id="body" className={this.state.day ? "light-theme" : "dark-theme"}>
        <Navigation 
          toggleDarkLight={this.toggleDarkLight}
          day={this.state.day}
          buttonLabel={this.state.buttonLabel}
        />
        <Switch className="main-content">
          <Route exact path="/" component={Landing} />
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/blog" component={Blog} />
        </Switch>
      </div>
    );
  }
}

export default App;
