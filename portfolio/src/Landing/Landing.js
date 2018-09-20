import React from 'react';
import { Link } from 'react-router-dom';
import Typist from 'react-typist'
import TypistLoop from 'react-typist-loop'
 
const Landing = () => (
  <div className="landing-container text">
    <TypistLoop interval={3000}>
        {[
          'Hi, I\'m Christina',
          'I\'m a web developer...',
          'I\'m a flutist...',
          'I\'m a teacher...',
          'I\'m a lover of knowledge.'
        ].map(text => <Typist key={text} startDelay={1000}>{text}</Typist>)}
      </TypistLoop>
      <div className="route-aboutme">
        <Link to="/aboutme">Enter my site</Link>
      </div>

  </div>
  
)
export default Landing;