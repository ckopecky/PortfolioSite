import React from 'react';

const DarkLightSwitch = (props) => {
    // console.log(props, "props");
    return (
        <div className="day-switch">
            <div htmlFor="dark_light" 
                className="switch"    
                onClick={props.toggleDarkLight}>{props.buttonLabel}
            </div>
        </div>
    );
};

export default DarkLightSwitch;