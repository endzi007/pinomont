import React from 'react';
import { style, keyframes } from 'typestyle';



export default (props)=>{
    const animationIn = keyframes({
        "0%": {
            opacity: 0
        },
        "100%": {
            opacity: 1
        }
    });
    const defaultStyle = style({
        opacity: 0,
        animation:`${animationIn} 500ms forwards`,
        animationDelay: `${props.delay*100}ms` 
    });
    console.log(props.allProps);
    return(
        <img className={defaultStyle} src={props.source} alt={props.alternateText} /> 
    );
}