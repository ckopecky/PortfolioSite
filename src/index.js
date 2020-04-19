import React, { useContext, createContext, useState } from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import { dark, light, toggleTheme } from './contexts/ThemeContext';
import ScrollToTop from './ScrollToTop';

import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "dotenv/config";
import { GlobalStyle } from './styled-components/GlobalStyle';

const AppStyles = () => {
    const ThemeContext = createContext();

    const [ isLight, setIsLight] = useState(true);

    const toggleTheme = () => {
        return isLight ? setIsLight(!isLight) : setIsLight(isLight);
    }
    console.log(dark, light)

    const theme = isLight ? light : dark;


    

    return (
        <ThemeContext.Provider value={{theme, toggle: toggleTheme}}>
            <GlobalStyle theme={theme}/>
            <Router>
                <ScrollToTop>
                    <App />
                </ScrollToTop>
            </Router>    
        </ThemeContext.Provider>
    )
}


ReactDOM.render(
<AppStyles />
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
