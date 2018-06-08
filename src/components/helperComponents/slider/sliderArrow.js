import React from 'react';
import { style } from 'typestyle';


const sliderIndicator = (prop)=>{
    return style({
        position: "absolute",
        color: "#F7F6F1",
        fontSize: "3em",
        top: "50%",
        left: prop==="right"?"100%": "50px",
        transform: prop==="right" ? "translate(-100px, -50%)": "translateY(-50%)",
        zIndex: "10",
        $nest:{
            "&:hover":{
                cursor: "pointer",
                fill: "blue!important"
            }
        }
    });
}

export default ({ direction, handleClick })=>{
    if(direction === "left"){
        return(
            <svg className={sliderIndicator("left")} onClick={handleClick.bind(null, "prev")}  width="50" height="50" viewBox="0 0 24 24">
                <path stroke="black" fill="#F7F6F1" d="M11.67 3.87L9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z"/>
                <path fill="none" d="M0 0h24v24H0z"/>
            </svg>
        );
    } else {
        return(
            <svg className={sliderIndicator("right")} onClick={handleClick.bind(null, "next")} width="50" height="50" viewBox="0 0 24 24">
                <path stroke="black" fill="#F7F6F1" d="M5.88 4.12L13.76 12l-7.88 7.88L8 22l10-10L8 2z"/>
                <path fill="none" d="M0 0h24v24H0z"/>
            </svg>
        )

    }
}