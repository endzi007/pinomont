import React, { Component } from 'react';
import { style } from 'typestyle';
import { connect } from 'react-redux';


const TransitionOverlay = ({appConfig})=>{
    const defaultStyle = style({
        position: "absolute",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "black"
    });

    console.log(appConfig, "appConfig");
    return(
        <div className={defaultStyle}>

        </div>
    );
}

function mapStateToProps(state){
    return {
        appConfig: state.appconfig
    }
}


export default connect(mapStateToProps)(TransitionOverlay);