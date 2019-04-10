import React, { Component } from 'react';
import './css/index.css';
import { Route, Switch } from 'react-router-dom'
import Navigation from './components/Navbar/Navbar';
import Landing from './components/Landing/Landing';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: '',
      buttonLabel: ''
    }
    this.toggleDarkLight = this.toggleDarkLight.bind(this);
  }

  componentDidMount() {
    console.log(window.localStorage, "localStorage");
    if(window.localStorage.Theme !== ""){
      let theme = window.localStorage.getItem("Theme");
      console.log(theme);
      this.setState({theme: theme, buttonLabel: theme === "Dark" ? "Light": "Dark"});
      console.log(this.state, "state after this.setState cdm");
    } else {
      document.documentElement.setAttribute("data-theme", 'Light');
      console.log(document.getElementsByTagName("html"))
      this.setState({theme: 'Light', buttonLabel: 'Dark'})
      window.localStorage.setItem("Theme", this.state.theme);
    }
    }

  toggleDarkLight(){
    const theme = this.state.theme === "Dark" ? "Light" : "Dark";
    const buttonLabel = this.state.buttonLabel === "Dark" ? "Light" : "Dark";
    console.log(theme, document.getElementsByTagName("html"));
    this.setState({ theme: theme, buttonLabel:  buttonLabel });
    window.localStorage.setItem("Theme", theme)
    document.documentElement.setAttribute("data-theme", theme);
  }

  render() {
    console.log(this.state, 'state')
    return (
      <div id="body">
        <Navigation 
          toggleDarkLight={this.toggleDarkLight}
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
