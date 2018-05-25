import React, { Component } from 'react';
import { style } from 'typestyle';

export default ()=>{
    let windowHeight = document.getHeight;
    console.log(windowHeight);
    const wrapperStyle = style({
        width: "100vw",
        height: `100vh`,
        backgroundColor: "red"
    });

    return(
            <div className={wrapperStyle}></div>
        );
}
