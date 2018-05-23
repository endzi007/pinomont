import React, { Component } from 'react';
import { style } from 'typestyle';

const defaultStyle = style({
    border: "1px solid black"

});



class Footer extends Component {
    render(){
        return(
            <div className="ui inverted vertical footer segment">
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
                        <a href="#" className="item">Početna</a>
                        <a href="#" className="item">Kategorije</a>
                        <a href="#" className="item">O nama</a>
                        <a href="#" className="item">Kontakt</a>
                    </div>
                    </div>
                    <div className="five wide column">
                    <h4 className="ui inverted header">Kontakt informacije:</h4>
                    <div className="ui inverted link list">
                        <div className="item">
                            <i className="marker icon"></i>
                            <div className="content">VIII Crnogorske 4 - Berane</div>
                        </div>
                        <div className="item">
                            <i className="mail icon"></i>
                            <div className="content">
                            <a href="mailto:jack@semantic-ui.com">pinomont1@gmail.com</a>
                            </div>
                        </div>
                        <div className="item">
                            <i className="phone icon"></i>
                            <div className="content">068/333-333</div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="ui inverted section divider"></div>
                <img src="assets/images/logo.png" className="ui centered mini image"/>
                <div className="ui horizontal inverted small divided link list">
                    <a className="item" href="#">Kontaktirajte nas</a>
                    <a className="item" href="#">Pinomont doo - Sva prava zadržana</a>
                </div>
                </div>
            </div>
        );
    }
}

export default Footer;
