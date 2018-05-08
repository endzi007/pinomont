import React, { Component } from "react";
import { Col } from 'react-bootstrap';
class Skills extends Component {
    render(){
        return(
            <Col xs={12} className={"pageSection " + this.props.className} id="skillsSection">

            </Col>
        );
    }
}

export default Skills;