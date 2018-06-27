import React from 'react';
import { style } from 'typestyle';


const sliderIndicator = (prop)=>{
    return style({
        position: "absolute",
        color: "#F7F6F1",
        fontSize: "3em",
        top: "50%",
        height: "50px",
        width: "50px",
        overflow: "hidden",
        display: "flex",
        display: "-ms-flex",
        display: "-webkit-flex",
        aligntItems: "center",
        justifyItems: "center",
        left: prop==="right"?"100%": "50px",
        transform: prop==="right" ? "translate(-100px, -50%)": "translateY(-50%)",
        backgroundColor: "rgba(0,0,0,0.5)",
        alignItems: "center",
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
            <div className={sliderIndicator("left")}>
                <svg style={{alignSelf: "center", justifySelf: "center"}}onClick={handleClick.bind(null, "prev")}  width="50" height="50" viewBox="0 0 24 24">
                    <path fill="#F7F6F1" d="M11.67 3.87L9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z"/>
                </svg>
            </div>
        );
    } else {
        return(
            <div className={sliderIndicator("right")}>
                <svg onClick={handleClick.bind(null, "next")} width="50" height="50" viewBox="0 0 24 24">
                    <path fill="#F7F6F1" d="M5.88 4.12L13.76 12l-7.88 7.88L8 22l10-10L8 2z"/>
                </svg>
            </div>
        )

    }
}