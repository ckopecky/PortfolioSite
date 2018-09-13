import React from 'react';
import './App.css';
import sun from '../img/sun.png';
import moon from '../img/moon.png';
import Navbar from '../Navbar/Navbar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDay: true,
      theme: "body-light"
    };
    
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange() {
    const isDay = !this.state.isDay;

    this.setState({isDay: isDay,
      theme: isDay ? "body-light" : "body-dark" })
  }
  render () {
    console.log(this.state.theme)
    return (
      <div className={this.state.theme}>
        <div className="main-container">
        <div className="switch-wrapper">
            <div>            
              <img className="time-of-day-icon"src={sun} alt="sun"/>
            </div>
            <label className="switch">
            <input type="checkbox" value={this.state.isDay} onChange={this.handleChange} />
            <div className="slider"></div>
            </label>
            <div>
            <img className="time-of-day-icon"src={moon} alt="moon"/>
            </div>
          </div>
        <Navbar />
        </div>
      </div>
    );
  }
}

export default App;
