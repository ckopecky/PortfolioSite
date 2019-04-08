import React, { Component } from 'react';
import './css/index.css';
// import { Route } from 'react-router-dom'
import Navigation from './components/Navbar/Navbar';
import LandingHero from './components/Landing-Hero';
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
        <LandingHero />
      </div>
    );
  }
}

export default App;
