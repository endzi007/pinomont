import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import * as actions from '../actions/projectActions';
import { bindActionCreators } from 'redux';
import { style } from 'typestyle';
import styles from '../components/helperComponents/templateStyles';
import logoImage from '../assets/images/pinomont.svg';
import appConfig from '../appConfig';

const itemStyle = style({
    "display": ["inline-flex","-ms-inline-flex", "-webkit-inline-flex"],
    justifySelf: "center",
    paddingTop: "8px",
    $nest: {
        "div": {
            marginLeft: "5px"
        }
    }
});

const contactInfo = style({
    display: ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex", "flex"], 
    flexDirection: "column", 
    justifyContent: "center", 
    "-webkit-box-align": "center",  "-moz-box-align": "center",  "-ms-flex-align": "center",  "-webkit-align-items": "center",  "align-items": "center"
});
class Footer extends Component {
    handleClick(path){
        if (this.props.history.location.pathname === path){
            return;
        }
        this.props.toggleShowDrawer(false);
        this.props.startPageTransition(true);
        this.props.changeCurrentRoute(path);
    }
    render(){
        let d = new Date();
        let year = d.getFullYear();
        return(
            <div style={{backgroundColor: "#292621", borderTop: `3px solid ${styles.secondaryColor}`}} className="ui inverted vertical footer segment">
                <div className="ui center aligned container">
                <div className="ui stackable inverted divided grid">
                    <div className="five wide column">
                    <h4 className="ui inverted header">Pinomont</h4>
                    <div className="ui inverted link list">
                    Pinomont doo je firma sa sjedištem u Beranama. Firma se već dugi niz godina uspješno bavi prodajom Areon proizvoda, uglavnom na teritoriji Crne Gore. 
                    </div>
                    </div>
                    <div className="five wide column">
                    <h4 className="ui inverted header">Stranice</h4>
                    <div className="ui inverted link list">
                        <Link to="/" onClick={this.handleClick.bind(this, "/")} className="item">Početna</Link>
                        <Link to="/categories" onClick={this.handleClick.bind(this, "/categories")} className="item">Kategorije</Link>
                        <Link to="/about" onClick={this.handleClick.bind(this, "/about")} className="item">O nama</Link>
                        <Link to="/contact" onClick={this.handleClick.bind(this, "/contact")} className="item">Kontakt</Link>
                    </div>
                    </div>
                    <div className="five wide column">
                    <h4 className="ui inverted header">Kontakt informacije:</h4>
                    <div className={`${contactInfo} ui inverted link list`}>
                        <div className={itemStyle}>
                            <i className="marker icon"></i>
                            <div className="content">{appConfig.contactInfo.address}</div>
                        </div>
                        <div className={itemStyle}>
                            <i className="mail icon"></i>
                            <div className="content">
                            <a href="mailto:pinomont1@gmail.com">{appConfig.contactInfo.email}</a>
                            </div>
                        </div>
                        <div className={itemStyle}>
                            <i className="phone icon"></i>
                            <div className="content">{appConfig.contactInfo.phone}</div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="ui inverted section divider"></div>
                <img src={logoImage} className="ui centered mini image"/>
                <div className="ui horizontal inverted small divided link list">
                    <span className="item">{`Pinomont doo - Sva prava zadržana - ${year}`}</span>
                    <span className="item">Developed by: <a style={{fontSize: "1em"}}href="http://www.enisjasarovic.me" target="_blank">Endzi007</a></span>
                </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps (store){
    return {
        appConfig: store.appConfig
    }
}

function mapDispatchToProps (dispatch){
    return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Footer));