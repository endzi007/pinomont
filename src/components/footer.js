import React, { Component } from 'react';
import { style } from 'typestyle';

const defaultStyle = style({
    border: "1px solid black"

});



class Footer extends Component {
    render(){
        return(
        <div className={defaultStyle}>
            <p><span></span>Made by Enis<span></span></p>
        </div>
        );
    }
}

export default Footer;
