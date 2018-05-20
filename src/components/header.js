import React, { Component } from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/projectActions'

class Header extends Component {
    static contextTypes = {
        router: PropTypes.object
    }

    constructor(){
        super();
        this.state = {
            showDrawer: false,
        }
    }

    handleClick(path){
        console.log(this.props.history, "history");
        if (this.props.history.location.pathname === path){
            return;
        }
        this.props.startPageTransition(true);

        setTimeout(()=>{
            this.props.startPageTransition(false);
            this.props.history.push(path)
        }, this.props.appConfig.transitionDuration);
    }

    render(){
        return(
            <div>
                <div className="ui inverted segment">
                    <div className="ui inverted secondary pointing menu">
                        <a className="header item" onClick={this.handleClick.bind(this, "/")}>
                            Logo
                        </a>
                        <a className="active item" onClick={this.handleClick.bind(this, "/")}>
                        Početna
                        </a>
                        <a className="item" onClick={this.handleClick.bind(this, "/categories")}>
                        Kategorije
                        </a>
                        <a className="item" onClick={this.handleClick.bind(this, "/Contact")}>
                        Kontakt
                        </a>
                        <a id="google_translate_element" className="item" style={{backgroundColor: "none!important", border: "none!important"}}>
                        </a>
                    </div>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));


