import React from 'react';

const DarkLightSwitch = (props) => {
    console.log(props, "props");
    return (
        <div className="day-switch">
            <label>Mode:</label>
            <div htmlFor="dark_light" 
                className="switch"    
                onClick={props.toggleDarkLight}>
            </div>
        </div>
    );
};

export default DarkLightSwitch;