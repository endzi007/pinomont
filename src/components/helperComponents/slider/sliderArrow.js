import React from 'react';
import { style } from 'typestyle';

const sliderPrevIndicator = style({
    alignSelf: "center",
    justifySelf: "flex-start",
    color: "#F7F6F1",
    fontSize: "2.5em"
});

const sliderNextIndicator = style({
    alignSelf: "center",
    justifySelf: "flex-end",
    color: "#F7F6F1",
    fontSize: "2.5em"
});


export default ({ direction })=>{
    if(direction === "left"){
        return(
            <div className={sliderPrevIndicator}>
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24">
                    <path fill="#F7F6F1" d="M11.67 3.87L9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z"/>
                    <path fill="none" d="M0 0h24v24H0z"/>
                </svg>
            </div>
        );
    } else {
        return(
            <div className={sliderNextIndicator}>
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24">
                    <path fill="#F7F6F1" d="M5.88 4.12L13.76 12l-7.88 7.88L8 22l10-10L8 2z"/>
                    <path fill="none" d="M0 0h24v24H0z"/>
                </svg>
            </div>
        )

    }
}