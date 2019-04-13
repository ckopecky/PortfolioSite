import React from 'react';
import Preview from '../img/WebsiteAssets/Website-Preview.png';

class previewpic extends React.Component {
    
    componentDidMount() {
        if(window.localStorage.Theme) {
            document.documentElement.setAttribute("data-theme", window.localStorage.Theme);
        }
    }

    render() {
        return (
            <img style={{width: "100%"}} src={Preview} alt="website-preview"/>
        );
    }
    
};

export default previewpic;