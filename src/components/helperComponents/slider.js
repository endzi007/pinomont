import React from 'react';
import { style, keyframes } from 'typestyle';
import Image from '../../assets/images/slides/kategorije.png';
import Slide2 from '../../assets/images/slides/areon_fresh_vawe.jpg';
import Slide3 from '../../assets/images/slides/areonFresko.jpg';



const sliderContainer = style({
    width: "100%",
    height: "100%",
    position: "relative"
});



const sliderItem = (img) => {
    const animation = keyframes({
        "0%":{
            opacity: "0"
        },
        "100%":{
            opacity: "1"
        }
    });
    return style({
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "norepeat",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "30px",
        animation: `${animation} 0.5s linear`
    })

};

const sliderItemHeading =  style({
    alignSelf: "center",
    justifySelf: "center",
    fontWeight: "bold",
    fontSize: "2.5em",
    color: "#F7F6F1"
});

const sliderPrevIndicator = style({
    alignSelf: "center",
    justifySelf: "flex-start",
    color: "#F7F6F1",
    fontSize: "2.5em"
});

const sliderNextIndicator = style({
    alignSelf: "center",
    justifySelf: "flex-end",
    color: "#F7F6F1",
    fontSize: "2.5em"
});

export default class extends React.Component {
    constructor(){
        super();
        this.state = {
            slides: [],
            counter: 0
        }
    }
    sliderInterval =  setInterval(()=>{
            console.log("slider changed");
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
        let arrToRender = [
            <div className={sliderItem(Image)}><div className={sliderItemHeading}>Pregledaj kategorije</div></div>, 
            <div className={sliderItem(Slide2)}><div className={sliderItemHeading}>Pregledaj kategorije</div></div>, 
            <div className={sliderItem(Slide3)}><div className={sliderItemHeading}>Pregledaj kategorije</div></div>
        ];
        this.setState({
            slides: arrToRender
        });
        this.sliderInterval;
        
    }

    componentWillUnmount(){
        clearInterval(this.sliderInterval);
    }
    render(){
        return(
            <div className={sliderContainer}>
                <div className={sliderPrevIndicator}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24">
                        <path fill="#F7F6F1" d="M11.67 3.87L9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z"/>
                        <path fill="none" d="M0 0h24v24H0z"/>
                    </svg>
                </div>
                {this.state.slides[this.state.counter]}
                <div className={sliderNextIndicator}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24">
                        <path fill="#F7F6F1" d="M5.88 4.12L13.76 12l-7.88 7.88L8 22l10-10L8 2z"/>
                        <path fill="none" d="M0 0h24v24H0z"/>
                    </svg>
                </div>
            </div>
        );
    }
}