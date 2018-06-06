import React from 'react';
import { style, keyframes } from 'typestyle';
import SingleSlide from './singleSlide';
import SliderArrow from './sliderArrow';


const sliderContainer = style({
    width: "100%",
    height: "100%",
    position: "relative"
});

export default class extends React.Component {
    constructor(){
        super();
        this.state = {
            counter: 0,
            transitionTime: false, 
            slides:[]
        }
    }
    
    sliderInterval =  setInterval(()=>{
            if(this.state.counter===this.state.slides.length-1){
                this.setState({
                    counter: 0
                });
            } else {
                this.setState({
                   counter: this.state.counter+1 
                });
            }
        }, 7000)
    componentDidMount(){
        this.setState({
            slides: this.props.slides
        });
        this.sliderInterval;
    }

    componentWillUnmount(){
        clearInterval(this.sliderInterval);
    }
    render(){
        if(this.state.slides.length===0){
            return(
                <div className={sliderContainer}>
                    loading...
                </div>
            )
        } else {
            const arrToRender = this.props.slides.map((slide, i)=>{
                return <SingleSlide key={`key_singleSlide_${i}`} img={slide.img} title={slide.title} inProp={slide.index===this.state.counter} />
            });
            return(
                <div className={sliderContainer}>
                    <SliderArrow direction="left" />
                    {arrToRender}
                    <SliderArrow direction="right" />
                </div>
            );
        }
    }
}