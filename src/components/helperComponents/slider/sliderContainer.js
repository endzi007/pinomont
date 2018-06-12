import React from 'react';
import { style, keyframes } from 'typestyle';
import SingleSlide from './singleSlide';
import SliderArrow from './sliderArrow';
import { connect } from 'react-redux';


const sliderContainer = style({
    width: "100vw",
    height: "100vh",
    position: "relative"
});

class SliderContainer extends React.Component {
    constructor(){
        super();
        this.state = {
            counter: 0,
            transitionTime: 7000, 
            slides:[]
        }
    }

    componentDidMount(){
        this.setState({
            slides: this.props.slides
        }, ()=>{
            this.intervalManager(true);
        });
    }
    intervalManager(start){
        if(start){
            this.sliderInterval = setInterval(this.interval.bind(this), this.state.transitionTime);
        } else {
            clearInterval(this.sliderInterval);
        }
    }
    sliderInterval = () => setInterval(this.interval.bind(this), this.state.transitionTime);

    interval(){
        if(this.state.counter===this.state.slides.length-1){
            this.setState({
                counter: 0
            });
        } else {
            this.setState({
               counter: this.state.counter+1 
            });
        }
    }

    handleClick(next){
        this.intervalManager(false);
        const nextSlide = next === "next" ? this.state.counter +1 : this.state.counter -1;
        let nextCounter;
        if(nextSlide >= this.state.slides.length){
            nextCounter = 0;
        } else if(nextSlide < 0){
            nextCounter = this.state.slides.length-1;
        } else {
            nextCounter = nextSlide;
        }
        this.setState({
            counter: nextCounter
        }, ()=>{
            this.intervalManager(true);
        });
    }
    componentWillUnmount(){
        this.intervalManager(false);
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
                return <SingleSlide 
                key={`key_singleSlide_${i}`} 
                img={slide.img} 
                link={slide.link} 
                inProp={slide.index===this.state.counter} />
            });
            return(
                <div className={sliderContainer}>
                    {arrToRender}
                </div>
            );
        }
    }
}

function mapStateToProps(store){
    return {
        style: store.styleConfig
    }
}

export default connect(mapStateToProps)(SliderContainer)