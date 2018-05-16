import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Typist from 'react-typist';

export default class HomeText extends Component{
    render(){
        return(
            <div className={`pageSection ${this.props.className}`} >
                Dobrodošli na web prezentaciju firme doo Pinomont iz Berana.
            </div>
        );
    }
}
