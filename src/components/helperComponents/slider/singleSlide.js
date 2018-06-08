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

const innerStyle = style({
    position: "relative",
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyItems: "center"
});

export default ({ img, title, inProp})=>{

    return(
        <Transition in={inProp} timeout={300}>
        {(state)=>{
            return (
                <div style={{
                    transition: `opacity 300ms ease-in`,
                    backgroundImage: `url(${img})`,
                    position: "absolute",
                    left: "0",
                    top: "0",
                    width: "100%",
                    height: "100%",
                    overflow: "hidden",
                    opacity: transitionStyles[state]
                    }}>
                    <div clasName={innerStyle}>
                        <div style={{color: "white"}}>Enis enis enis enis</div>
                    </div>
                </div>
            )
        }}
        </Transition>
    );
}