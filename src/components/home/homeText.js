import React, { Component } from 'react';
import { style } from 'typestyle';
import { Helmet } from 'react-helmet';
import Slider from '../helperComponents/slider/sliderContainer';
import SlideImage1 from '../../assets/images/slides/areonFresko.png';
import SlideImage2 from '../../assets/images/slides/kategorije.png';

export default ()=>{
    const wrapperStyle = style({
        width: "100vw",
        height: `100vh`,
    });
    const slides = [{
        index: 0,
        img: SlideImage1,
        link: ""
    },
    {
        index: 1,
        img: SlideImage2,
        link:""
    }
];
    return(
        [
            <Helmet>
                <title>{`Pinomont - Početna`}</title>
            </Helmet>,
            <div className={wrapperStyle}>
                <Slider slides={slides}/>
            </div>
        ]
        );
}
