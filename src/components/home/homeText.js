import React, { Component } from 'react';
import { style } from 'typestyle';
import Slider from '../helperComponents/slider/sliderContainer';
import SlideImage1 from '../../assets/images/slides/areonFresko.jpg';
import SlideImage2 from '../../assets/images/slides/kategorije.png';

export default ()=>{
    const wrapperStyle = style({
        width: "100vw",
        height: `100vh`,
    });
    const slides = [{
        index: 0,
        img: SlideImage1,
        title: "slide 1"
    },
    {
        index: 1,
        img: SlideImage2,
        title: "slide 2"
    }

];
    return(
            <div className={wrapperStyle}>
                <Slider slides={slides}/>
            </div>
        );
}
