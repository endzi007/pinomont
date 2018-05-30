import React from 'react';
import { style } from 'typestyle';

const defaultStyle = style({
    transition: "all 0.5s ease-in-out"
});
export default ({ img })=>{
    return(
        <div style={{
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            position: "absolute",
            left: "0",
            top: "0",
            width: "100%",
            height: "100%",
        }} className={defaultStyle}>
        ddd
        </div>
    );
}