import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Navbar } from 'react-bootstrap';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { style } from "typestyle";
import * as actions from '../../actions/projectActions'
import NavigationDrawer from './navigationDrawer';
import ToggleDrawer from './toggleDrawer';


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
    static contextTypes = {
        router: PropTypes.object
    }

    constructor(){
        super();
        this.state = {
            showDrawer: false,
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

    render(){
        return(
            <div className={defaultStyle}>
                <NavigationDrawer show={this.state.showDrawer} handleClick={this.handleClick.bind(this)}/>
                <ToggleDrawer show ={this.state.showDrawer} handleClick={this.toggleShowDrawer.bind(this)}/>
            </div>
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