import React, { Component } from 'react';
import './css/index.css';
import { Route, Switch } from 'react-router-dom'
import Navigation from './components/Navbar/Navbar';
import Landing from './components/Landing/Landing';
import Resume from './components/Resume';
import Contact from './components/Contact';
import FourOhFour from './components/FourOhFour';
import Portfolio from './components/Portfolio/Portfolio';
import Blog from './components/Blog';
import Preview from './components/previewpic';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: "",
      buttonLabel: ""
    }
    this.toggleDarkLight = this.toggleDarkLight.bind(this);
  }

  componentDidMount() {
    if(window.localStorage.getItem("Theme")){
      let theme = window.localStorage.getItem("Theme");
      this.setState({theme: theme, buttonLabel: theme === "Dark" ? "Light": "Dark"});
    } else {
      if (this.state.theme === "" && this.state.buttonLabel === "") {
        const theme = "Light";
        const buttonLabel = "Dark";
        document.documentElement.setAttribute("data-theme", theme);
        this.setState({theme: theme, buttonLabel: buttonLabel})
        window.localStorage.setItem("Theme", theme);
      }

    }
  }

  toggleDarkLight(){
    const theme = this.state.theme === "Dark" ? "Light" : "Dark";
    const buttonLabel = this.state.buttonLabel === "Dark" ? "Light" : "Dark";
    this.setState({ theme: theme, buttonLabel:  buttonLabel });
    window.localStorage.setItem("Theme", theme)
    document.documentElement.setAttribute("data-theme", theme);
  }

  render() {
    return (
      <>
      <div id="body">
        <Navigation 
          toggleDarkLight={this.toggleDarkLight}
          buttonLabel={this.state.buttonLabel}
        />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/blog" component={Blog} />
          <Route component={FourOhFour} />
        </Switch>
      </div>
      <Route exact path="/previewpic" component={Preview} />
      </>
    );
  }
}

export default App;
