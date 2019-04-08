import React, { Component } from 'react';
import './css/index.css';
// import { Route } from 'react-router-dom'
import Navigation from './components/Navbar/Navbar';
import LandingHero from './components/Landing-Hero';
class App extends Component {
    
  render() {
    return (
      <div className="App">
        <Navigation />
        <LandingHero />
      </div>
    );
  }
}

export default App;
