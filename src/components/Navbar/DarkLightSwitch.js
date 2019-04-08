import React from 'react';

const DarkLightSwitch = (props) => {
    console.log(props, "props");
    return (
        <div className="day-switch">
            <label>Mode:</label>
            <div htmlFor="dark_light" 
                className="switch"    
                onClick={props.toggleDarkLight}><p>{props.buttonLabel}</p>
            </div>
        </div>
    );
};

export default DarkLightSwitch;