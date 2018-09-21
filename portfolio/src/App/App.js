import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import '../img/Cyril.mp3';
import Landing from '../Landing/Landing';
import AboutMe from '../AboutMe/AboutMe';
import Resume from '../Resume/Resume';
import Audio from '../AudioPlayer/AudioPlayer';
import Projects from '../Projects/Projects';


class App extends React.Component {

  render(){
    return(
      <div>
      <Switch>
        <Route exact path="/" component={Landing}/>
        <Route path="/aboutme" component={AboutMe}/>
        <Route path="/cmvnkresume" component={Resume}/>
        <Route path="/projects" component={Projects}/>
      </Switch>
      {/* <Audio /> */}
      </div>
      
    )
  }
}
export default App;
