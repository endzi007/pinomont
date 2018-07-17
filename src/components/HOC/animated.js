import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/projectActions';
import { bindActionCreators } from 'redux';

export default function (WrappedComponent){
    class Animated extends Component {
        componentDidMount(){
            setTimeout(()=>{
                this.props.startPageTransition(false);
            }, this.props.appConfig.transitionDuration);
        }
        render(){
            return(
                 <WrappedComponent {...this.props} />
            );
        }
    }

    function mapDispatchToProps(dispatch){
        return bindActionCreators(actions, dispatch);
        
    }
    function mapStateToProps(state){
        return {
            appConfig: state.appConfig
        }
    }
    return connect(mapStateToProps, mapDispatchToProps)(Animated);
}