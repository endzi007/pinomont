import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { style } from "typestyle";
import * as actions from '../../actions/projectActions'
import NavigationDrawer from './navigationDrawer';
import ToggleDrawer from './toggleDrawer';
import TopMenu from './topMenu';


var defaultStyle = style({
    position: "absolute",
    left: 0,
    top: 0,
    zIndex: 999,
    display: "flex",
    $nest: {
        "p": {
            color: "white",
            fontSize: "1em",
            background: "lightgray"
        }
    }
});

class Navigation extends Component {
    constructor(){
        super();
        this.state = {
            showDrawer: false,
            windowSize: 0
        }
    }

    toggleShowDrawer(show){
        this.setState({
            showDrawer: show
        });
    }

    handleClick(path){
        if (this.props.history.location.pathname === path){
            return;
        }
        this.props.startPageTransition(true);
        this.toggleShowDrawer(false);

        setTimeout(()=>{
            this.props.startPageTransition(false);
            this.props.history.push(path)
        }, this.props.appConfig.transitionDuration);
    }
    updateSize(){
        this.setState({
            windowSize: window.innerWidth
        });
    }
    componentDidMount(){
        window.addEventListener("resize", this.updateSize.bind(this));
        this.updateSize();
    }

    render(){
        return(
            [
                <TopMenu handleClick={this.handleClick.bind(this)} showDrawer={this.state.showDrawer} show={this.state.windowSize>767 ? "top": "right"} />,
                <ToggleDrawer show={this.state.showDrawer} handleClick={this.toggleShowDrawer.bind(this)}/>
            ]

        );
    }
}

function mapStateToProps (state){
    return {
        appConfig: state.appConfig
    }

}

function mapDispatchToProps (dispatch){
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Navigation));