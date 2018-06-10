import React from 'react';
import Transition from 'react-transition-group/Transition';
import { style, keyframes } from 'typestyle';


const defaultStyle = style({
    transition: "all 1.5s ease-in-out",
});

const transitionStyles = {
    entering: 0,
    entered: 1,
    exiting: 1,
    exited: 0
}

const panning = keyframes({
    "0%":{
        transform: "translate(-20px -20px)",
    },
    "100%":{
        transform: "translate(10px 10px)",
    }
});

const innerStyle = style({
    position: "relative",
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    animation: `${panning} 10s both`
});


export default ({ img, title, inProp})=>{

    return(
        <Transition in={inProp} timeout={300}>
        {(state)=>{
            return (
                <div className={innerStyle} style={{
                    transition: `opacity 300ms ease-in`,
                    backgroundImage: `url(${img})`,
                    position: "absolute",
                    left: "0",
                    top: "0",
                    width: "100%",
                    height: "100%",
                    overflow: "hidden",
                    opacity: transitionStyles[state], 
                    }}>
                    <div>
                        <div style={{color: "white", fontSize: "5em", fontFamily: "'Arapey',Georgia,Times, Times New Roman, serif"}}>{title}</div>
                    </div>
                </div>
            )
        }}
        </Transition>
    );
}