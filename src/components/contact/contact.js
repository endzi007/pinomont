import React, { Component } from 'react';
import { style } from 'typestyle';
import * as Components from '../helperComponents';


const defaultStyle = style({
    textAlign: "center",
    margin: "0 auto",
    padding: "20px",
    paddingTop: "40px"
});

const inputStyle={
    width: "70%",
    backgroundColor: "rgba(255,255,255,0.5)",
    marginBottom: "10px"
}

class Contact extends Component {
    constructor(){
        super();
        this.state = {
            name: "",
            email: "",
            message: ""
        }
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e){
        var name = e.target.name;
        switch (name) {
            case "name":
                this.setState({name: e.target.value})
                break;
            case "email":
                this.setState({email: e.target.value})
                break;
            case "message":
                this.setState({message: e.target.value})
                break;
            default:
                break;
        }
    }
    onFormSubmit(e){
        e.preventDefault();
    }
    render(){

        return(
            
            <div className={`pageSection ${defaultStyle}`}>
                    <h2> Contact me </h2>
                    <Components.TextField 
                        label="enis"
                    />
                    <Components.TextField 
                        label="suad"
                    />
                    <Components.TextField 
                        label="suad"
                    />
            </div>
        );
    }
}





export default Contact;