import React, { Component } from 'react';
import './index.css';
import Accordion from './components/accordion';
import Navbar from './components/Navbar';
import AppRouter from './components/AppRouter';
import { Link } from 'react-router-dom';

class App extends Component {
    
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="header">
            <Link to="/" id="dev-name">Christina Kopecky</Link>
            <Link  to="/" id="dev-position">Full-Stack Web Developer</Link>
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
