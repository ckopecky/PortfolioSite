import React from 'react';

const DarkLightSwitch = (props) => {
    console.log(props, "props");
    return (
        <div htmlFor="dark_light" className="switch" onClick={props.toggleDarkLight}>{props.buttonLabel}
        </div>
    );
};

export default DarkLightSwitch;