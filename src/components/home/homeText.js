import React, { Component } from 'react';
import { style } from 'typestyle';
import Slider from '../helperComponents/slider/sliderContainer';
import Slide from '../helperComponents/slider/singleSlide';
import SlideImage1 from '../../assets/images/background.png';
import SlideImage2 from '../../assets/images/background.jpg';

export default ()=>{
    const wrapperStyle = style({
        width: "100vw",
        height: `100vh`,
    });

    return(
            <div className={wrapperStyle}>
                <Slider>
                    <Slide img={SlideImage1} title="some text"/>
                    <Slide img={SlideImage2} title="some text"/>
                </Slider>
            </div>
        );
}
