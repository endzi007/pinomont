import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function (WrappedComponent){
    class Styled extends Component {
        render(){
            return(
                 <WrappedComponent {...this.props} />
            );
        }
    }
    function mapStateToProps(state){
        return {
            appConfig: state.styleConfig
        }
    }
    return connect(mapStateToProps)(Styled);
}