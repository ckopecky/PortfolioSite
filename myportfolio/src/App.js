import React, { Component } from 'react';
import './index.css';
import Accordian from './components/accordian';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p id="dev-name">Christina Kopecky</p>
          <p id="dev-position">Full-Stack Web Developer</p>
        </header>
        <nav>

          <Accordian className="mobile-nav" title = "Projects" />
          <Accordian className="mobile-nav" title = "Resumé" />
          <Accordian className="mobile-nav" title = "Contact" />
          <Accordian className="mobile-nav" title = "About Me" />

        </nav>
      </div>
    );
  }
}

export default App;
