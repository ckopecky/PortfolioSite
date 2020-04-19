import React from 'react';
import './css/index.css';
import { Route, Switch } from 'react-router-dom';
import Navigation from './components/Navbar/Navbar';
import Landing from './components/Landing/Landing';
import Resume from './components/Resume';
import Contact from './components/Contact';
import FourOhFour from './components/FourOhFour';
import Portfolio from './components/Portfolio/Portfolio';
import Blog from './components/Blog';
import Preview from './components/previewpic';

const App = () => {
	return (
		<>
			<div id='body'>
				<Navigation />
				<Switch>
					<Route exact path='/' component={Landing} />
					<Route exact path='/resume' component={Resume} />
					<Route exact path='/contact' component={Contact} />
					<Route exact path='/portfolio' component={Portfolio} />
					<Route exact path='/blog' component={Blog} />
					<Route component={FourOhFour} />
				</Switch>
			</div>
			<Route exact path='/previewpic' component={Preview} />
		</>
	);
};

export default App;
