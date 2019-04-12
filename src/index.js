import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import ScrollToTop from './ScrollToTop';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
require('dotenv').config();


ReactDOM.render(
<Router>
    <ScrollToTop>
        <App className="App"/>
    </ScrollToTop>
</Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
