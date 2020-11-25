import React, {useState} from "react";


function UncontrolOnOff() {
    console.log('OnOff rendering');
    let [valume, setValume] = useState(false);
    let buttonOnStyle = {
        width: '50px',
        height: '50px',
        border: 'solid',
        display: 'inline',
        backgroundColor: valume ? 'green' : 'white',

    }
    let buttonOffStyle = {
        width: '50px',
        height: '50px',
        border: 'solid',
        display: 'inline',
        backgroundColor: valume ? 'white' : 'red',

    }
    let lampStyle = {
        width: '100px',
        height: '100px',
        border: 'solid',
        borderRadius: '5px',
        backgroundColor: valume ? 'green' : 'red'
    }

    return (
        <div>
            <div style={buttonOnStyle} onClick={() => {
                setValume(true)
            }}>On
            </div>
            <div style={buttonOffStyle} onClick={() => {
                setValume(false)
            }}>Off
            </div>
            <span style={lampStyle}>lamp</span>
        </div>
    );
}


export default UncontrolOnOff;
