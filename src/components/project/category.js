import React, { Component } from "react";
import { style, keyframes, media } from 'typestyle';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/projectActions';

const animationIn = keyframes({
    "0%": {
     " -webkit-transform": "rotateY(-80deg);",
              "transform": "rotateY(-80deg);",
      opacity: 0,
    },
    "100%": {
      "-webkit-transform": "rotateY(0)",
              "transform": "rotateY(0)",
      opacity: 1,
    }
});

const animationOut = keyframes({
    "0%": {
     " -webkit-transform": "rotateY(0);",
              "transform": "rotateY(0);",
      opacity: 1,
    },
    "100%": {
      "-webkit-transform": "rotateY(70deg)",
              "transform": "rotateY(70deg)",
      opacity: 0,
    }
});

class Category extends Component  {
    constructor(){
        super();
        this.state = {
            showDiv: false
        }
    }
    projectItem(){ 
        return (
            style({
                height: "250px",
                paddingTop: "100%",
                overflow: "hidden",
                position: "relative",
             }, media({maxWidth: 768},{
                height: "100px",
                maxHeight: "100px",
                })
            )
            );
    }

    showDiv(){
        let opacity = this.state.showDiv === false? 1 : 0;
        return style({
            opacity: opacity,
            position: "absolute",
            top: 0, 
            height: "100%",
            width: "100%",
            "-webkit-animation": `${this.state.showDiv === false ? animationIn: animationOut} 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
            "animation": `${this.state.showDiv === false ? animationIn: animationOut} 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
            animationDelay: this.state.showDiv === false ? "0.3s" : "0s"
        });
    }

    hideDiv(){
        let opacity = this.state.showDiv === false? 0 : 1;
        return style({
            opacity: opacity,
            top: 0,
            position: "absolute",
            height: "100%",
            width: "100%",
            "-webkit-animation": `${this.state.showDiv === true ? animationIn: animationOut} 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
            "animation": `${this.state.showDiv === true ? animationIn: animationOut} 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
            animationDelay: this.state.showDiv === true ? "0.25s" : "0s"
        });
    }
    render(){
        return(
            <div className={this.projectItem()} 
            onMouseEnter={()=>{
                this.setState({
                    showDiv: true
                })
            }} 
            onMouseLeave={()=>{
                this.setState({
                    showDiv: false
                })
            }}
            onClick={()=>{

                let path = `categories`;
                console.log(path);
                this.props.startPageTransition(true);
                this.props.history.push({
                    pathname: path,
                    params: this.props.title.split(" ").join("_")
                });

            }}
            >
                <img src={this.props.hover} className={this.showDiv()}></img>
                <img src={this.props.featured_image} className={this.hideDiv()}></img>
            </div>
        );
    }
 }

function mapStateToProps(store){
    return {
        appConfig: store.appConfig
    }
}

function mapDispatchToProps (dispatch){
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Category));