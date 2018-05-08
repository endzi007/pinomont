import React from 'react';

const ToggleDrawer = ({ show, handleClick })=>{
    let left = show === true ? "260px": "10px";
    return (
        <svg style={{
            position: "absolute",
            left: left,
            top: "10px",
            transition: "all 450ms cubic-bezier(0.23, 1, 0.32, 1)"
        }} onClick={handleClick.bind(null, !show)} fill="#000000" height="45" viewBox="0 0 24 24" width="45" xmlns="http://www.w3.org/2000/svg">
        <g style={{
            opacity: show===true? 0 : 1
        }}>
            <path d="M0 0h24v24H0z" fill="none"/>,
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
        </g>
        <g style={{
            opacity: show===true? 1 : 0
        }}>
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>,
            <path d="M0 0h24v24H0z" fill="none"/>
        </g>
        </svg>
    ); 
}

export default ToggleDrawer; 