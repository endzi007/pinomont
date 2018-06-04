import React from 'react';
import { style, keyframes } from 'typestyle';

const bgAnimation = keyframes({
        "0%, 100%" :{
          transform: "translateY(-50px)",
        },
        "50%": {
            transform: "translateY(0px)",
        }
});

const defaultStyle = style({
    transition: "all 1.5s ease-in-out",
});


export default ({ img, title, left })=>{
    return(
        <div style={{
            position: "relative",
            left: "0",
            top: "0",
            width: "100%",
            height: "100%",
            overflow: "hidden"
        }}>
            <div className="sliderItem" style={{
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
            </div>
        </div>
    );
}