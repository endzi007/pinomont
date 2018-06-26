import React, { Component } from 'react';
import { style, keyframes } from 'typestyle';
import { connect } from 'react-redux';
import PinomontLogo from '../../assets/images/Pinomont.svg';

const TransitionOverlay = (props)=>{
    const animationIn = keyframes({
        "0%": {
         " -webkit-transform": "rotateY(-80deg)",
                  "transform": "rotateY(-80deg)",
          opacity: 0,

        },
        "20%": {
             opacity: 1,
           },
        "100%": {
          "-webkit-transform": "rotateY(0)",
                  "transform": "rotateY(0)",
          opacity: 1,
        }
    });
    
    const animationOut = keyframes({
        "0%": {
         " -webkit-transform": "rotateY(0)",
                  "transform": "rotateY(0)",
          opacity: 1,
        },
        "80%": {
             opacity: 1,
           },
        "99%": {
          "-webkit-transform": "rotateY(70deg)",
                  "transform": "rotateY(70deg)",
          opacity: 0,
        },
        "100%": {
            " -webkit-transform": "translateX(-3000px)",
            "transform": "translateX(-3000px)",
        }
    });
    const defaultStyle = style({
        zIndex: 100,
        opacity: 0,
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        "-webkit-animation": `${props.show === true ? animationIn: animationOut} ${props.appConfig.transitionDuration}ms cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
        "animation": `${props.show === true ? animationIn: animationOut} ${props.appConfig.transitionDuration}ms cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
        display: "flex",
        verticalAlign: "center",
        backgroundColor: "white"
    });

    const svgStyle = style({
        width: "100%",
        height: "100%"
    });

    return(
        <div className={defaultStyle}>
            <img className={svgStyle} src={PinomontLogo} alt="pinomont logo" />
        </div>
    );
}

function mapStateToProps(state){
    return {
        appConfig: state.appConfig
    }
}


export default connect(mapStateToProps)(TransitionOverlay);