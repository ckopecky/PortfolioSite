import React, { Component } from 'react';
import './css/index.css';
// import { Route } from 'react-router-dom'
import Navigation from './components/Navbar/Navbar';
class App extends Component {
    
  render() {
    return (
      <div className="App">
        <Navigation />
      </div>
    );
  }
}

export default App;
