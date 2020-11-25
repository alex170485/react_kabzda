import React, {useState} from "react";

export type OnOffType = true | false;

type OnOffPropsType = {
    setTurnOn: (value: OnOffType) => void;
    turnOn: boolean;
}




function ControlOnOff(props: OnOffPropsType) {
    console.log('OnOff rendering');

    let buttonOnStyle = {
        width: '50px',
        height: '50px',
        border: 'solid',
        display: 'inline',
        backgroundColor: props.turnOn ? 'green' : 'white',

    }
    let buttonOffStyle = {
        width: '50px',
        height: '50px',
        border: 'solid',
        display: 'inline',
        backgroundColor: props.turnOn ? 'white' : 'red',

    }
    let lampStyle = {
        width: '100px',
        height: '100px',
        border: 'solid',
        borderRadius: '5px',
        backgroundColor: props.turnOn? 'green' : 'red'
    }

    return (
        <div>
            <div style={buttonOnStyle} onClick={()=>{props.setTurnOn(true)}}>On
            </div>
            <div style={buttonOffStyle} onClick={()=>{props.setTurnOn(false)}}>Off
            </div>
            <span style={lampStyle}>lamp</span>
        </div>
    );
}


export default ControlOnOff;
