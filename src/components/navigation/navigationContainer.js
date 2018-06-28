import React, { Component } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/projectActions'
import ToggleDrawer from './toggleDrawer';
import TopMenu from './topMenu';


class Navigation extends Component {
    constructor(){
        super();
        this.state = {
            showDrawer: false,
        }
    }

    toggleShowDrawer(show){
        this.props.toggleShowDrawer(show);
    }

    handleClick(path){
        if (this.props.history.location.pathname === path){
            return;
        }
        this.props.startPageTransition(true);
        this.props.toggleShowDrawer(false);
        this.props.changeCurrentRoute(path);
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
        this.props.changeCurrentRoute(this.props.location.pathname);
        window.addEventListener("resize", this.updateSize.bind(this));
        this.updateSize();
    }

    render(){
        const { currentRoute } = this.props.appConfig;
        let activeLink = " ";
        if(currentRoute==="/"){
            activeLink = "home";
        } else if(currentRoute=== "/categories"){
            activeLink = "categories"
        } else if(currentRoute==="/contact") {
            activeLink = "contact"
        }
        return(
            [
                <TopMenu activeLink = {activeLink} handleClick={this.handleClick.bind(this)} showDrawer={this.props.appConfig.showDrawer} show={this.state.windowSize>767 ? "top": "right"} />,
                <ToggleDrawer show={this.props.appConfig.showDrawer} handleClick={this.toggleShowDrawer.bind(this)}/>
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