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
            slides: []
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
            slides: this.props.children
        });
        this.sliderInterval;
    }

    startTransition(prop){
        console.log("start transition", this.state.counter);
        this.setState({
            transitionTime: prop
        });
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
            return(
                <div className={sliderContainer}>
                    <SliderArrow direction="left" />
                        {React.cloneElement(this.state.slides[this.state.counter], {startTransition: this.startTransition.bind(this)})}
                    <SliderArrow direction="right" />
                </div>
            );
        }
    }
}