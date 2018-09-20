import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Landing from '../Landing/Landing';
import AboutMe from '../AboutMe/AboutMe';
import Resume from '../Resume/Resume';


class App extends React.Component {

  render(){
    return(
      <div>
      <Switch>
        <Route exact path="/" component={Landing}/>
        <Route path="/aboutme" component={AboutMe}/>
        <Route path="/cmvnkresume" component={Resume}/>
      </Switch>
      </div>
      
    )
  }
}
export default App;
