import React from 'react';
import { style, keyframes } from 'typestyle';
import _ from 'lodash';



class TextField extends React.Component {
    constructor(){
        super();
        this.state={
            animate: "",
            val: ""
        }
    }

    getStyles(){
        var height = 50;
        const wrapperStyle = style({
            position: "relative",
            minHeight: `${height}px`,
            height: "auto",
            borderBottom: "1px solid gray"
        });
        
        const inputStyle = style({
            position: "absolute",
            left: "0",
            top: "100%",
            transform: 'translateY(-100%)',
            zIndex: 1,
            width: "100%",
            border: "none",
            $nest:{
                "&:active":{
                    border: "none!important"
                },
                "&:focus":{
                    outline: "none!important"
                },
            }
        });
        return {
            wrapperStyle: wrapperStyle,
            inputStyle: inputStyle,
        }
    }

    labelStyle(){
        const animateIn = keyframes({
            "0%": {
              "-webkit-transform": "translateY(-100%)",
                      "transform": "translateY(-100%)",
              "opacity": "0",
            },
            "100%":{
              "-webkit-transform": "translateY(0)",
                      "transform": "translateY(0)",
              "opacity": "1",
            }
         });
         const animateOut = keyframes({
            "0%": {
              "-webkit-transform": "translateY(0px)",
                      "transform": "translateY(0px)",
              "opacity": "0",
            },
            "100%":{
              "-webkit-transform": "translateY(-100%)",
                      "transform": "translateY(-100%)",
              "opacity": "1",
            }
         });
        let val = ""; 
        if(this.state.animate==="in" || this.state.val.length>0){
            val = animateOut;
        } else {
            val = animateIn;
        }
        return style({
            position: "absolute",
            top: "50%",
            transform: "translateY(-100%)",
            left: "0px",
            zIndex: 2,
            "-webkit-animation": `${val} 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
            "animation": `${val} 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
        });
    }

    render (){
        let overrideStyle = this.props.style === undefined? {} : this.props.style;
        let id = _.uniqueId(`${this.props.label}`);
        return (
            <div className={this.getStyles().wrapperStyle}>
                <label className={this.labelStyle()} for={id}>{this.props.label}</label>
                <input 
                    value={this.state.val}
                    id={id} 
                    style={overrideStyle} 
                    className={this.getStyles().inputStyle} 
                    type="text"
                    onFocus={()=>{
                        this.setState({
                            animate: "in"
                        });
                    }}
                    onBlur={()=>{
                        this.setState({
                            animate: "out"
                        });
                    }}
                    onChange={(e)=>{
                        this.setState({
                            val: e.target.value
                        });
                    }}
                />
            </div>
        )
    }
}


export default TextField; 