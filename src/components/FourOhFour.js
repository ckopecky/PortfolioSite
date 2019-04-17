import React from 'react';

class FourOhFour extends React.Component {

    componentDidMount() {
        if(window.localStorage.Theme) {
            document.documentElement.setAttribute("data-theme", window.localStorage.Theme);
        }
    }
    render(){
        return (
            <div className="main-content" id='error'>
                <h1 className="notFoundTitle"><strong>404: </strong>Oops! That page can’t be found.</h1>
                <p className="notFoundDesc">
                        It looks like nothing was found at this location.
                        Maybe try one of the links in the menu or press back to go to the previous page.
                </p>
            </div>
        );
    }
};

export default FourOhFour;