import React, { Component } from 'react';
import { style } from 'typestyle';
import { Helmet } from 'react-helmet';
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
                <meta charSet="utf-8" />
                <title>{`Pinomont - Početna`}</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>,
            <div className={wrapperStyle}>
                <Slider slides={slides}/>
            </div>
        ]
        );
}
