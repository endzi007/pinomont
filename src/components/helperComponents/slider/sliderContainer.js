import React from 'react';
import { style, keyframes } from 'typestyle';
import Image from '../../../assets/images/slides/kategorije.png';
import Slide2 from '../../../assets/images/slides/areon_fresh_vawe.jpg';
import Slide3 from '../../../assets/images/slides/areonFresko.jpg';
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
        }, 3000)
    componentDidMount(){
        this.setState({
            slides: [
                {
                    image: Image,
                    title: "Slide 1"
                }, 
                {
                    image: Slide2,
                    title: "Slide 2"
                }, 
                {
                    image: Slide3,
                    title: "Slide 3"
                }
            ]
        });
        this.sliderInterval;
    }

    componentWillUnmount(){
        clearInterval(this.sliderInterval);
    }
    render(){
        return(
            <div className={sliderContainer}>
                <SliderArrow direction="left" />
                    <SingleSlide img={this.state.slides.length !== 0 ? this.state.slides[this.state.counter].image: "" }/>
                <SliderArrow direction="right" />
            </div>
        );
    }
}