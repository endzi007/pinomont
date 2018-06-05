import React from 'react';
import { style, keyframes } from 'typestyle';

const bgAnimation = keyframes({
        "0%, 100%" :{
          transform: "translate(-10px, -50px)",

        },
        "50%": {
            transform: "translate(0px, 0px)",
        }
});

const defaultStyle = style({
    transition: "all 1.5s ease-in-out",
});

const animationIn = ()=>{
    const animation = keyframes({
        "0%" :{
            opacity: 0
          },
        "100%": {
            opacity: 1
        }
    });
    return style({
        animation: `${animation} 0.5s ease-in`
    });
}


const animationOut = ()=>{
    const animation = keyframes({
        "0%" :{
            opacity: 1
          },
        "100%": {
            opacity: 0
        }
    });
    return style({
        animation: `${animation} 0.5s ease-in`
    });
}
export default class extends React.Component {
    constructor(){
        super();
        this.state = {
            classes: []
        }
    }
    componentDidMount(){
        this.props.startTransition(true);
    }

    render(){
        const { img, title, startTransition } = this.props;
        return (
        <div style={{
            position: "relative",
            left: "0",
            top: "0",
            width: "100%",
            height: "100%",
            overflow: "hidden"
        }}>
            <div className={this.state.classes.join(" ")} style={{
                transition: "all 0.5s ease-in-out",
                backgroundImage: `url(${img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                position: "absolute",
                left: `0`,
                top: "0",
                width: "100%",
                height: "100%",
                animation: `${bgAnimation} 20s linear infinite`
            }}>
                <h1 style={{
                    position: "absolute",
                    left: "-200px",
                    top: "50%",
                    transition: "all 5.5s ease-in-out",
                    color: "white"
                    
                }}
                > {title}</h1>
            </div>
        </div>
    );

    }
}