import React, { Component } from 'react';
import { style } from 'typestyle';
import Slider from '../helperComponents/slider/sliderContainer';

export default ()=>{
    const wrapperStyle = style({
        width: "100vw",
        height: `100vh`,
    });

    return(
            <div className={wrapperStyle}>
                <Slider />
            </div>
        );
}
