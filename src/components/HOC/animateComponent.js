import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function (WrappedComponent){
    class Animated extends Component {
        render(){
            const { pageTransition, transitionDuration } = this.props.appConfig;
            let clas = pageTransition === false ? "animateIn": "animateOut";
            return(
                 <WrappedComponent className={clas}{...this.props} />
            );
        }
    }
    function mapStateToProps(state){
        return {
            appConfig: state.appConfig
        }
    }
    return connect(mapStateToProps)(Animated);
}