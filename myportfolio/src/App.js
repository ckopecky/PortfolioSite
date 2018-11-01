import React, { Component } from 'react';
import './index.css';
import Accordion from './components/accordion';
import Navbar from './components/Navbar';
import AppRouter from './components/AppRouter';

class App extends Component {
    
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="header">
            <p id="dev-name">Christina Kopecky</p>
            <p id="dev-position">Full-Stack Web Developer</p>
          </div>
        </header>
     
        <nav>

          <Accordion  className="mobile-nav"/>
          <Navbar />
          <AppRouter className="AppRouter"/> 
      

        </nav>
      </div>
    );
  }
}

export default App;
