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
        transform: "translate(0, 0)"
    },
    "100%":{
        transform: "translate(100px, 100px)"
    }
});


export default ({ img, link, inProp})=>{
    const animationDiv = style({
        position: "absolute",
        top: "-100px",
        left: "-100px",
        width: "110%",
        height: "110%",
        animation: `${panning} 20s linear infinite`,
        animationDirection: "alternate",
        backgroundImage: `url(${img})`, 
        backgroundSize: "cover"
    });

    const slideContent = style({
        position: "absolute",
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        color: "white",
        alignContent: "center",
        justifyContent: "space-between"
    });

    const sliderContainer = (state)=>style({
        transition: `opacity ${timeout}ms ease-in`,
        width: "100%",
        height: "100%",
        maxHeight: "100vh",
        overflow: "hidden",
        opacity: transitionStyles[state],
        position: "absolute",
        });
    const fontFam = "Arapey, Georgia, Times, Times New Roman, serif";
    const timeout = 500;
    return(
        <Transition in={inProp} timeout={timeout}>
        {(state)=>{
            return (
                <div className={sliderContainer(state)}>
                    <div>
                        <div className={animationDiv}></div>
                        <div id="slideContent" className={slideContent}>
                            <h3 
                                style={{
                                    marginTop: "100px", 
                                    fontFamily: fontFam,
                                    fontWeight: "100",
                                    fontSize: "2em",
                                    borderBottom: "1px solid white",
                                    paddingBottom: "12px",
                                    width: "260px",
                                    alignSelf: "center"
                                }}>
                                Pinomont - Berane
                            </h3>
                            <h1 
                                style={{
                                    fontFamily: fontFam,
                                    fontStretch: "extra-expanded",
                                    fontWeight: "100",
                                    maxWidth: "50vw",
                                    alignSelf: "center",
                                    fontSize: "3em"
                                }}> 
                                Najbolja auto kozmetika u Crnoj Gori. Uvoznik i distributer za Areon proizvode...
                            </h1>
                            <h2 style={{marginBottom: "50px", fontFamily: fontFam, fontWeight: "100",}}><a href={link}>Pogledaj još..</a></h2>
                        </div>
                    </div>
                </div>
            )
        }}
        </Transition>
    );
}